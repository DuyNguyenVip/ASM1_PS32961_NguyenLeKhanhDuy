const music = new Audio();
const URL_API = `http://localhost:3000`;
let allSongs = [];
export const lay_songs = async () => {
    const response = await fetch(URL_API + "/songs");
    const songs_arr = await response.json();
    let str = "";
    songs_arr.forEach((song, index) => {
        str += `
        <li class="songItem">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <img src="${song.poster}" alt="${song.title}">
          <h5>
            ${song.title}
            <div class="subtitle">${song.artist}</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
        </li>
      `;
    });
    return str;
};
export const lay_pop_songs = async () => {
    const response = await fetch(URL_API + "/popSongs");
    const popSongs_arr = await response.json();
    let str = "";
    const popSongsAsSongs = popSongs_arr.map((song) => ({
        id: song.id_pop,
        title: song.title_pop,
        artist: song.artist_pop,
        poster: song.poster_pop,
    }));
    popSongsAsSongs.forEach((song) => {
        str += `
        <li class="songItem">
          <div class="img_play">
            <img src="${song.poster}">
            <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
          </div>
          <h5>${song.title}<br>
            <div class="subtitle">${song.artist}</div>
          </h5>
        </li>
      `;
    });
    return str;
};
async function loadSongs() {
    const response = await fetch("json/db.json");
    const data = await response.json();
    if (!Array.isArray(data.songs) || !Array.isArray(data.popSongs)) {
        throw new Error("Dữ liệu không hợp lệ");
    }
    const popSongsAsSongs = data.popSongs.map((song) => ({
        id: song.id_pop,
        title: song.title_pop,
        artist: song.artist_pop,
        poster: song.poster_pop,
    }));
    allSongs = data.songs.concat(popSongsAsSongs);
    return {
        songs: data.songs,
        popSongs: data.popSongs,
    };
}
function displaySearchResults(allSongs) {
    const search_results = document.getElementsByClassName("search_results")[0];
    search_results.innerHTML = "";
    allSongs.forEach((element) => {
        const { id, title, poster, artist } = element;
        const card = document.createElement("a");
        card.classList.add("card");
        card.href = "#" + id;
        card.innerHTML = `
            <img src="${poster}" alt="${title}" />
            <div class="content">${title}
                <div class="subtitle">${artist}</div>
            </div>
        `;
        search_results.appendChild(card);
    });
}
function setupSearch(allSongs) {
    const search_results = document.getElementsByClassName("search_results")[0];
    const input = document.getElementsByTagName("input")[0];
    input.addEventListener("keyup", () => {
        const input_value = input.value.toUpperCase();
        const items = search_results.getElementsByTagName("a");
        for (let index = 0; index < items.length; index++) {
            const content = items[index].getElementsByClassName("content")[0];
            const subtitle = items[index].getElementsByClassName("subtitle")[0];
            if ((content &&
                content.textContent?.toUpperCase().indexOf(input_value) > -1) ||
                (subtitle &&
                    subtitle.textContent?.toUpperCase().indexOf(input_value) > -1)) {
                items[index].style.display = "flex";
            }
            else {
                items[index].style.display = "none";
            }
        }
        search_results.style.display = input.value ? "" : "none";
    });
}
const masterPlay = document.getElementById("masterPlay");
const wave = document.getElementById("wave");
const poster_master_play = document.getElementById("poster_master_play");
const download_music = document.getElementById("download_music");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
masterPlay.addEventListener("click", () => {
    console.log("Nút masterPlay đã được nhấn.");
    if (music.paused || music.currentTime <= 0) {
        music.play();
        console.log("Phát nhạc:", music.src);
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }
    else {
        music.pause();
        console.log("Dừng nhạc.");
        wave.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
        const element = el;
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
    });
};
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
        const element = el;
        element.style.background = "rgb(105, 105, 170, 0)";
    });
};
let index = 0;
function setupPlayListEvents() {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
        e.addEventListener("click", (el) => {
            const target = el.target;
            const selectedId = target.id;
            console.log("Bài hát được chọn:", selectedId);
            const numericIndex = allSongs.findIndex((song) => song.id === selectedId);
            if (numericIndex !== -1) {
                index = numericIndex;
                console.log("Chọn bài hát tại chỉ mục:", index);
                music.src = `audio/${allSongs[index].id}.mp3`;
                poster_master_play.src = `${allSongs[index].poster}`;
                title.innerHTML = allSongs[index].title;
                artist.innerText = allSongs[index].artist;
                download_music.href = `audio/${allSongs[index].id}.mp3`;
                music
                    .play()
                    .then(() => {
                    console.log("Đang phát bài hát:", music.src);
                })
                    .catch((error) => {
                    console.error("Không thể phát nhạc:", error);
                });
                masterPlay.classList.remove("bi-play-fill");
                masterPlay.classList.add("bi-pause-fill");
                makeAllBackground();
                const songItems = Array.from(document.getElementsByClassName("songItem"));
                if (numericIndex >= 0 && numericIndex < songItems.length) {
                    songItems[numericIndex].style.background = "rgb(105, 105, 105, .1)";
                }
                makeAllPlays();
                target.classList.remove("bi-play-circle-fill");
                target.classList.add("bi-pause-circle-fill");
            }
            else {
                console.log("Không tìm thấy bài hát với ID:", selectedId);
            }
        });
    });
}
const currentStart = document.getElementById("currentStart");
const currentEnd = document.getElementById("currentEnd");
const seek = document.getElementById("seek");
const bar2 = document.getElementById("bar2");
const dot = document.getElementsByClassName("dot")[0];
const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
};
music.addEventListener("timeupdate", () => {
    const music_curr = music.currentTime;
    const music_dur = music.duration;
    currentEnd.innerText = !isNaN(music_dur) ? formatTime(music_dur) : "0:00";
    currentStart.innerText = formatTime(music_curr);
    if (!isNaN(music_dur) && music_dur > 0) {
        const progressbar = Math.floor((music_curr / music_dur) * 100);
        seek.value = progressbar.toString();
        bar2.style.width = `${progressbar}%`;
        dot.style.left = `${progressbar}%`;
    }
});
seek.addEventListener("input", () => {
    const seekValue = parseInt(seek.value, 10);
    if (!isNaN(music.duration)) {
        music.currentTime = (seekValue * music.duration) / 100;
    }
});
const vol_icon = document.getElementById("vol_icon");
const vol = document.getElementById("vol");
const vol_dot = document.getElementById("vol_dot");
const vol_bar = document.getElementsByClassName("vol_bar")[0];
const updateVolumeIcon = (vol_value) => {
    vol_icon.classList.remove("bi-volume-down-fill", "bi-volume-mute-fill", "bi-volume-up-fill");
    if (vol_value === 0) {
        vol_icon.classList.add("bi-volume-mute-fill");
    }
    else if (vol_value > 0 && vol_value <= 50) {
        vol_icon.classList.add("bi-volume-down-fill");
    }
    else {
        vol_icon.classList.add("bi-volume-up-fill");
    }
};
vol.addEventListener("input", () => {
    const vol_value = parseInt(vol.value, 10);
    updateVolumeIcon(vol_value);
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left = `${vol_value}%`;
    music.volume = Math.max(0, Math.min(vol_value / 100, 1));
});
const back = document.getElementById("back");
const next = document.getElementById("next");
const updateSong = (direction) => {
    if (direction === "next") {
        index += 1;
        if (index >= allSongs.length) {
            index = 0;
        }
    }
    else if (direction === "back") {
        index -= 1;
        if (index < 0) {
            index = allSongs.length - 1;
        }
    }
    const currentSong = allSongs[index];
    if (currentSong) {
        music.src = `audio/${currentSong.id}.mp3`;
        poster_master_play.src = currentSong.poster;
        music.play().catch((error) => {
            console.error("Không thể phát nhạc:", error);
        });
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `audio/${currentSong.id}.mp3`;
        title.innerHTML = currentSong.title;
        artist.innerText = currentSong.artist;
        download_music.setAttribute("download", currentSong.title);
    }
    else {
        console.error("Không tìm thấy bài hát với chỉ số:", index);
    }
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems.forEach((item, idx) => {
        item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : "";
    });
    makeAllPlays();
    wave.classList.add("active1");
};
back.addEventListener("click", () => updateSong("back"));
next.addEventListener("click", () => updateSong("next"));
const pop_song_left = document.getElementById("pop_song_left");
const pop_song_right = document.getElementById("pop_song_right");
const pop_song = document.getElementsByClassName("pop_song")[0];
if (pop_song_left && pop_song_right && pop_song) {
    pop_song_left.addEventListener("click", () => {
        pop_song.scrollLeft -= 330;
    });
    pop_song_right.addEventListener("click", () => {
        pop_song.scrollLeft += 330;
    });
}
const pop_art_left = document.getElementById("pop_art_left");
const pop_art_right = document.getElementById("pop_art_right");
const Artists_bx = document.getElementsByClassName("Artists_bx")[0];
if (pop_art_left && pop_art_right && Artists_bx) {
    pop_art_left.addEventListener("click", () => {
        Artists_bx.scrollLeft -= 330;
    });
    pop_art_right.addEventListener("click", () => {
        Artists_bx.scrollLeft += 330;
    });
}
const shuffle = document.getElementsByClassName("shuffle")[0];
if (shuffle) {
    shuffle.addEventListener("click", () => {
        const currentText = shuffle.innerHTML;
        switch (currentText) {
            case "next":
                shuffle.classList.add("bi-arrow-repeat");
                shuffle.classList.remove("bi-music-note-beamed");
                shuffle.classList.remove("bi-shuffle");
                shuffle.innerHTML = "repeat";
                break;
            case "repeat":
                shuffle.classList.remove("bi-arrow-repeat");
                shuffle.classList.remove("bi-music-note-beamed");
                shuffle.classList.add("bi-shuffle");
                shuffle.innerHTML = "random";
                break;
            case "random":
                shuffle.classList.remove("bi-arrow-repeat");
                shuffle.classList.add("bi-music-note-beamed");
                shuffle.classList.remove("bi-shuffle");
                shuffle.innerHTML = "next";
                break;
            default:
                console.warn("Không xác định chế độ shuffle:", currentText);
                break;
        }
    });
}
const titleElement = document.getElementById("title");
const artistElement = document.getElementById("artist");
const updateUI = (songDetails) => {
    if (songDetails) {
        music.src = `audio/${songDetails.id}.mp3`;
        poster_master_play.src = songDetails.poster;
        titleElement.innerHTML = songDetails.title;
        artistElement.innerHTML = songDetails.artist;
        download_music.href = `audio/${songDetails.id}.mp3`;
        download_music.setAttribute("download", songDetails.title);
    }
    else {
        console.error("Không tìm thấy bài hát với chỉ số:", index);
    }
};
const next_music = () => {
    index++;
    if (index >= allSongs.length) {
        index = 0;
    }
    const songDetails = allSongs[index];
    updateUI(songDetails);
    music.play().catch((error) => {
        console.error("Không thể phát nhạc:", error);
    });
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems[index].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    wave.classList.add("active1");
};
const repeat_music = () => {
    const songDetails = allSongs[index];
    updateUI(songDetails);
    music.play().catch((error) => {
        console.error("Không thể phát nhạc:", error);
    });
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems[index].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    wave.classList.add("active1");
};
const random_music = () => {
    index = Math.floor(Math.random() * allSongs.length);
    const songDetails = allSongs[index];
    updateUI(songDetails);
    music.play().catch((error) => {
        console.error("Không thể phát nhạc:", error);
    });
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems[index].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    wave.classList.add("active1");
};
music.addEventListener("ended", () => {
    const b = shuffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
        default:
            console.error("Không xác định chế độ phát nhạc:", b);
    }
});
async function main() {
    try {
        const { songs, popSongs } = await loadSongs();
        allSongs = [
            ...songs.map((song) => ({
                id: song.id,
                title: song.title,
                artist: song.artist,
                poster: song.poster,
            })),
            ...popSongs.map((song) => ({
                id: song.id_pop,
                title: song.title_pop,
                artist: song.artist_pop,
                poster: song.poster_pop,
            })),
        ];
        console.log(allSongs);
        displaySearchResults(allSongs);
        setupSearch(allSongs);
        setupPlayListEvents();
    }
    catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
}
main();

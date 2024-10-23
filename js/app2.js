const music = new Audio("DungLamTraiTimAnhDau.mp3");
const songs = [
    {
        id: "1",
        title: "Chúng Ta Không Thuộc Về",
        artist: "Sơn Tùng MTP",
        poster: "img/1.jpg",
    },
    {
        id: "2",
        title: "Chúng Ta Của Tương Lai",
        artist: "Sơn Tùng MTP",
        poster: "img/2.jpg",
    },
    {
        id: "3",
        title: "Lạc Trôi",
        artist: "Sơn Tùng MTP",
        poster: "img/3.jpg",
    },
    {
        id: "4",
        title: "Chúng Ta Của Hiện Tại",
        artist: "Sơn Tùng MTP",
        poster: "img/4.jpg",
    },
    {
        id: "5",
        title: "Hãy Trao Cho Anh",
        artist: "Sơn Tùng MTP",
        poster: "img/5.jpg",
    },
    {
        id: "6",
        title: "Nơi Này Có Anh",
        artist: "Sơn Tùng MTP",
        poster: "img/6.jpg",
    },
    {
        id: "7",
        title: "Không Thể Say",
        artist: "Hiếu Thứ Hai",
        poster: "img/7.jpg",
    },
    {
        id: "8",
        title: "Sao Hạng A",
        artist: "Anh Trai Say Hi",
        poster: "img/8.jpg",
    },
    {
        id: "9",
        title: "Tràn Bộ Nhớ",
        artist: "Dương Domic",
        poster: "img/9.jpg",
    },
    {
        id: "10",
        title: "Kim Phút Kim Giờ",
        artist: "Anh Trai Say Hi",
        poster: "img/10.jpg",
    },
    {
        id: "11",
        title: "Ngáo Ngơ",
        artist: "Anh Trai Say Hi",
        poster: "img/11.jpg",
    },
    {
        id: "12",
        title: "Thế Giới Ảo Tình Yêu Thật",
        artist: "Trịnh Đình Quang",
        poster: "img/12.jpg",
    },
    {
        id: "13",
        title: "Lấy Chồng Sớm Làm Gì",
        artist: "HuyR x Tuấn Cry",
        poster: "img/13.jpg",
    },
    {
        id: "14",
        title: "Yêu Em Từ Bé",
        artist: "HuyR",
        poster: "img/14.jpg",
    },
    {
        id: "15",
        title: "Chị Mẹ",
        artist: "Anh Tú",
        poster: "img/15.jpg",
    },
    {
        id: "16",
        title: "Yêu Em 2 Ngày",
        artist: "Dương Domic",
        poster: "img/16.jpg",
    },
];
const songList = document.getElementById("songList");
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.className = "songItem";
    li.innerHTML = `
          <span>${String(index + 1).padStart(2, "0")}</span>
          <img src="${song.poster}">
          <h5>
              ${song.title}
              <div class="subtitle">${song.artist}</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
      `;
    songList.appendChild(li);
});
const popSongs = [
    {
        id_pop: "17",
        title_pop: "Độ Đúng Đời",
        artist_pop: "Thiện Hưng",
        poster_pop: "img/17.jpg",
    },
    {
        id_pop: "18",
        title_pop: "Không Yêu Trả Dép Tôi Về",
        artist_pop: "HuyR",
        poster_pop: "img/18.jpg",
    },
    {
        id_pop: "19",
        title_pop: "Tâm Sự Tuổi 30",
        artist_pop: "Trịnh Thăng Bình",
        poster_pop: "img/19.jpg",
    },
    {
        id_pop: "20",
        title_pop: "Anh Thanh Niên",
        artist_pop: "HuyR",
        poster_pop: "img/20.jpg",
    },
    {
        id_pop: "21",
        title_pop: "Cô Gái Vàng",
        artist_pop: "HuyR x Tuấn Cry",
        poster_pop: "img/21.jpg",
    },
    {
        id_pop: "22",
        title_pop: "Cô Gái M52",
        artist_pop: "HuyR ft. Tùng Viu",
        poster_pop: "img/22.jpg",
    },
    {
        id_pop: "23",
        title_pop: "Bông Hoa Đẹp Nhất",
        artist_pop: "Quân AP",
        poster_pop: "img/23.jpg",
    },
    {
        id_pop: "24",
        title_pop: "Ước Mơ Của Mẹ",
        artist_pop: "Quân AP",
        poster_pop: "img/24.jpg",
    },
    {
        id_pop: "25",
        title_pop: "Cha Già Rồi Đúng Không",
        artist_pop: "ALI HOÀNG DƯƠNG",
        poster_pop: "img/25.jpg",
    },
    {
        id_pop: "26",
        title_pop: "Lớn Rồi Còn Khóc Nhè",
        artist_pop: "Trúc Nhân",
        poster_pop: "img/26.jpg",
    },
    {
        id_pop: "27",
        title_pop: "Họ Yêu Ai Mất Rồi",
        artist_pop: "Doãn Hiếu",
        poster_pop: "img/27.jpg",
    },
];
const popSongList = document.getElementById("popSongList");
popSongs.forEach((song) => {
    const songItem = document.createElement("li");
    songItem.className = "songItem";
    songItem.innerHTML = `
          <div class="img_play">
              <img src="${song.poster_pop}">
              <i class="bi playListPlay bi-play-circle-fill" id="${song.id_pop}"></i>
          </div>
           <h5>${song.title_pop}
              <div class="subtitle">${song.artist_pop}</div>
          </h5>
      `;
    popSongList.appendChild(songItem);
});
const allSongs = [
    ...songs,
    ...popSongs.map((song) => ({
        id: song.id_pop,
        title: song.title_pop,
        artist: song.artist_pop,
        poster: song.poster_pop,
    })),
];
Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    if (songs[i]) {
        element.getElementsByTagName("img")[0].src =
            songs[i].poster;
        element.getElementsByTagName("h5")[0].innerHTML = `
        ${songs[i].title}
        <div class="subtitle">${songs[i].artist}</div>
      `;
    }
});
const search_results = document.getElementsByClassName("search_results")[0];
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
const masterPlay = document.getElementById("masterPlay");
const wave = document.getElementById("wave");
masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }
    else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");
    });
};
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
        el.style.background = "rgb(105, 105, 170, 0)";
    });
};
let index = 0;
const poster_master_play = document.getElementById("poster_master_play");
const download_music = document.getElementById("download_music");
const songTitles = Array.from(document.getElementsByClassName("songTitle"));
const title = document.getElementById("title");
const artist = document.getElementById("artist");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
    e.addEventListener("click", (el) => {
        const target = el.target;
        const selectedId = target.id;
        const numericIndex = allSongs.findIndex((song) => song.id === selectedId || song.id === selectedId);
        if (numericIndex !== -1) {
            index = numericIndex;
        }
        music.src = `audio/${selectedId}.mp3`;
        poster_master_play.src = `img/${selectedId}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `audio/${selectedId}.mp3`;
        let currentSong = songs.find((song) => song.id === selectedId);
        let currentPopSong = popSongs.find((song) => song.id_pop === selectedId);
        if (currentSong) {
            title.innerHTML = currentSong.title;
            artist.innerText = currentSong.artist;
            download_music.setAttribute("download", currentSong.title);
        }
        else if (currentPopSong) {
            title.innerHTML = currentPopSong.title_pop;
            artist.innerText = currentPopSong.artist_pop;
            download_music.setAttribute("download", currentPopSong.title_pop);
        }
        else {
            console.error("Song not found for selectedId:", selectedId);
        }
        makeAllBackground();
        const songItems = Array.from(document.getElementsByClassName("songItem"));
        if (numericIndex >= 0 && numericIndex < songItems.length) {
            songItems[numericIndex].style.background = "rgb(105, 105, 105, .1)";
        }
        makeAllPlays();
        target.classList.remove("bi-play-circle-fill");
        target.classList.add("bi-pause-circle-fill");
        wave.classList.add("active1");
    });
});
const currentStart = document.getElementById("currentStart");
const currentEnd = document.getElementById("currentEnd");
const seek = document.getElementById("seek");
const bar2 = document.getElementById("bar2");
const dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
    const music_curr = music.currentTime;
    const music_dur = music.duration;
    const min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    const min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    if (!isNaN(music_dur)) {
        const progressbar = Math.floor((music_curr / music_dur) * 100);
        seek.value = progressbar.toString();
        const seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }
});
seek.addEventListener("change", () => {
    const seekValue = parseInt(seek.value, 10);
    if (!isNaN(music.duration)) {
        music.currentTime = (seekValue * music.duration) / 100;
    }
});
const vol_icon = document.getElementById("vol_icon");
const vol = document.getElementById("vol");
const vol_dot = document.getElementById("vol_dot");
const vol_bar = document.getElementsByClassName("vol_bar")[0];
vol.addEventListener("change", () => {
    const vol_value = parseInt(vol.value, 10);
    if (vol_value === 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    else if (vol_value > 0 && vol_value <= 50) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    else if (vol_value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left = `${vol_value}%`;
    music.volume = vol_value / 100;
});
const back = document.getElementById("back");
const next = document.getElementById("next");
back.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
        index = allSongs.length - 1;
    }
    const currentSong = allSongs[index];
    music.src = `audio/${currentSong.id}.mp3`;
    poster_master_play.src = currentSong.poster;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${currentSong.id}.mp3`;
    if (currentSong) {
        title.innerHTML = currentSong.title;
        artist.innerText = currentSong.artist;
        download_music.setAttribute("download", currentSong.title);
    }
    else {
        console.error("Song not found for index:", index);
    }
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems.forEach((item, idx) => {
        item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : "";
    });
    makeAllPlays();
    wave.classList.add("active1");
});
next.addEventListener("click", () => {
    index += 1;
    if (index >= allSongs.length) {
        index = 0;
    }
    const currentSong = allSongs[index];
    music.src = `audio/${currentSong.id}.mp3`;
    poster_master_play.src = currentSong.poster;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${currentSong.id}.mp3`;
    if (currentSong) {
        title.innerHTML = currentSong.title;
        artist.innerText = currentSong.artist;
        download_music.setAttribute("download", currentSong.title);
    }
    else {
        console.error("Song not found for index:", index);
    }
    makeAllBackground();
    const songItems = Array.from(document.getElementsByClassName("songItem"));
    songItems.forEach((item, idx) => {
        item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : "";
    });
    makeAllPlays();
    wave.classList.add("active1");
});
const pop_song_left = document.getElementById("pop_song_left");
const pop_song_right = document.getElementById("pop_song_right");
const pop_song = document.getElementsByClassName("pop_song")[0];
pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 330;
});
pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 330;
});
const pop_art_left = document.getElementById("pop_art_left");
const pop_art_right = document.getElementById("pop_art_right");
const Artists_bx = document.getElementsByClassName("Artists_bx")[0];
pop_art_left.addEventListener("click", () => {
    Artists_bx.scrollLeft -= 330;
});
pop_art_right.addEventListener("click", () => {
    Artists_bx.scrollLeft += 330;
});
const shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click", () => {
    const a = shuffle.innerHTML;
    switch (a) {
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
    }
});
const titleElement = document.getElementById("title");
const artistElement = document.getElementById("artist");
const next_music = () => {
    index++;
    if (index >= allSongs.length) {
        index = 0;
    }
    const songDetails = allSongs[index];
    if (songDetails) {
        music.src = `audio/${songDetails.id}.mp3`;
        poster_master_play.src = songDetails.poster;
        titleElement.innerHTML = songDetails.title;
        artistElement.innerHTML = songDetails.artist;
        download_music.href = `audio/${songDetails.id}.mp3`;
        download_music.setAttribute("download", songDetails.title);
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        makeAllBackground();
        const songItems = Array.from(document.getElementsByClassName("songItem"));
        songItems[index].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        wave.classList.add("active1");
    }
    else {
        console.error("Không tìm thấy bài hát với chỉ số: ", index);
    }
};
const repeat_music = () => {
    const songDetails = allSongs[index];
    if (songDetails) {
        music.src = `audio/${songDetails.id}.mp3`;
        poster_master_play.src = songDetails.poster;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `audio/${songDetails.id}.mp3`;
        const { title, artist } = songDetails;
        titleElement.innerHTML = title;
        artistElement.innerHTML = artist;
        download_music.setAttribute("download", title);
        makeAllBackground();
        const songItems = Array.from(document.getElementsByClassName("songItem"));
        songItems[index].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        wave.classList.add("active1");
    }
    else {
        console.error("Không tìm thấy bài hát với chỉ số: ", index);
    }
};
const random_music = () => {
    index = Math.floor(Math.random() * allSongs.length);
    const songDetails = allSongs[index];
    if (songDetails) {
        music.src = `audio/${songDetails.id}.mp3`;
        poster_master_play.src = songDetails.poster;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `audio/${songDetails.id}.mp3`;
        const { title, artist } = songDetails;
        titleElement.innerHTML = title;
        artistElement.innerHTML = artist;
        download_music.setAttribute("download", title);
        makeAllBackground();
        const songItems = Array.from(document.getElementsByClassName("songItem"));
        songItems[index].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        wave.classList.add("active1");
    }
    else {
        console.error("Không tìm thấy bài hát với chỉ số: ", index);
    }
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

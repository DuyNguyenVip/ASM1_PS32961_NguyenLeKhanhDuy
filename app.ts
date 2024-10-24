// Khai báo các biến toàn cục
const music = new Audio();
const URL_API = `http://localhost:3000`;

// Định nghĩa giao diện chung cho bài hát
interface Song {
  id: string;
  title: string;
  artist: string;
  poster: string;
}

// Biến toàn cục để lưu trữ tất cả các bài hát
let allSongs: Song[] = [];

// Hàm lấy danh sách bài hát và trả về HTML
export const lay_songs = async (): Promise<string> => {
  const response = await fetch(URL_API + "/songs");
  const songs_arr: Song[] = await response.json();
  let str = "";

  songs_arr.forEach((song: Song, index: number) => {
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

// Hàm lấy danh sách popSongs và trả về HTML
export const lay_pop_songs = async (): Promise<string> => {
  const response = await fetch(URL_API + "/popSongs");
  const popSongs_arr: any[] = await response.json();
  let str = "";

  // Chuyển đổi popSongs sang cấu trúc Song
  const popSongsAsSongs: Song[] = popSongs_arr.map((song) => ({
    id: song.id_pop,
    title: song.title_pop,
    artist: song.artist_pop,
    poster: song.poster_pop,
  }));

  popSongsAsSongs.forEach((song: Song) => {
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

// Tải dữ liệu từ db.json và cập nhật allSongs
async function loadSongs() {
  const response = await fetch("json/db.json");
  const data = await response.json();

  if (!Array.isArray(data.songs) || !Array.isArray(data.popSongs)) {
    throw new Error("Dữ liệu không hợp lệ");
  }

  // Chuyển đổi popSongs sang cấu trúc Song
  const popSongsAsSongs: Song[] = data.popSongs.map((song: any) => ({
    id: song.id_pop,
    title: song.title_pop,
    artist: song.artist_pop,
    poster: song.poster_pop,
  }));

  // Cập nhật allSongs với dữ liệu bài hát
  allSongs = data.songs.concat(popSongsAsSongs);

  return {
    songs: data.songs,
    popSongs: data.popSongs,
  };
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(allSongs: Song[]) {
  const search_results = document.getElementsByClassName(
    "search_results"
  )[0] as HTMLElement;
  search_results.innerHTML = ""; // Xóa nội dung trước đó

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

    search_results.appendChild(card); // Thêm card vào search_results
  });
}

// Lắng nghe sự kiện nhập từ ô tìm kiếm
function setupSearch(allSongs: Song[]) {
  const search_results = document.getElementsByClassName(
    "search_results"
  )[0] as HTMLElement;
  const input = document.getElementsByTagName("input")[0] as HTMLInputElement;

  input.addEventListener("keyup", () => {
    const input_value = input.value.toUpperCase();
    const items = search_results.getElementsByTagName("a");

    for (let index = 0; index < items.length; index++) {
      const content = items[index].getElementsByClassName("content")[0];
      const subtitle = items[index].getElementsByClassName("subtitle")[0];

      // Kiểm tra nội dung bài hát và nghệ sĩ
      if (
        (content &&
          content.textContent?.toUpperCase().indexOf(input_value) > -1) ||
        (subtitle &&
          subtitle.textContent?.toUpperCase().indexOf(input_value) > -1)
      ) {
        (items[index] as HTMLElement).style.display = "flex"; // Hiển thị bài hát nếu tìm thấy
      } else {
        (items[index] as HTMLElement).style.display = "none"; // Ẩn bài hát nếu không tìm thấy
      }
    }

    // Ẩn hoặc hiện search_results dựa vào giá trị nhập vào
    search_results.style.display = input.value ? "" : "none";
  });
}

// Khởi tạo các phần tử từ DOM
const masterPlay = document.getElementById("masterPlay") as HTMLElement;
const wave = document.getElementById("wave") as HTMLElement;
const poster_master_play = document.getElementById(
  "poster_master_play"
) as HTMLImageElement;
const download_music = document.getElementById(
  "download_music"
) as HTMLAnchorElement;
const title = document.getElementById("title") as HTMLElement;
const artist = document.getElementById("artist") as HTMLElement;

// Sự kiện click cho nút masterPlay
masterPlay.addEventListener("click", () => {
  console.log("Nút masterPlay đã được nhấn.");
  if (music.paused || music.currentTime <= 0) {
    music.play();
    console.log("Phát nhạc:", music.src);
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    console.log("Dừng nhạc.");
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

// Hàm để đặt tất cả các nút phát về trạng thái ban đầu
const makeAllPlays = (): void => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    const element = el as HTMLElement;
    element.classList.add("bi-play-circle-fill");
    element.classList.remove("bi-pause-circle-fill");
  });
};

// Hàm để đặt tất cả các nền về trạng thái ban đầu
const makeAllBackground = (): void => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    const element = el as HTMLElement;
    element.style.background = "rgb(105, 105, 170, 0)";
  });
};

// Khai báo biến cho việc phát nhạc
let index: number = 0;

// Hàm thiết lập sự kiện cho danh sách phát
function setupPlayListEvents() {
  // Đăng ký sự kiện cho các nút phát
  Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
    e.addEventListener("click", (el: Event) => {
      const target = el.target as HTMLElement;
      const selectedId = target.id; // Lấy id của phần tử được click
      console.log("Bài hát được chọn:", selectedId);

      // Tìm bài hát trong danh sách
      const numericIndex = allSongs.findIndex((song) => song.id === selectedId);
      if (numericIndex !== -1) {
        index = numericIndex; // Cập nhật index thành vị trí bài hát vừa được chọn
        console.log("Chọn bài hát tại chỉ mục:", index);

        // Cập nhật nguồn âm thanh và hình ảnh cho bài hát được chọn
        music.src = `audio/${allSongs[index].id}.mp3`;
        poster_master_play.src = `${allSongs[index].poster}`;
        title.innerHTML = allSongs[index].title; // Cập nhật tiêu đề bài hát
        artist.innerText = allSongs[index].artist; // Cập nhật tên nghệ sĩ
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

        // Cập nhật nền và trạng thái của danh sách bài hát
        makeAllBackground();
        const songItems = Array.from(
          document.getElementsByClassName("songItem")
        ) as HTMLElement[];

        if (numericIndex >= 0 && numericIndex < songItems.length) {
          songItems[numericIndex].style.background = "rgb(105, 105, 105, .1)";
        }
        makeAllPlays();
        target.classList.remove("bi-play-circle-fill");
        target.classList.add("bi-pause-circle-fill");
      } else {
        console.log("Không tìm thấy bài hát với ID:", selectedId);
      }
    });
  });
}

const currentStart = document.getElementById("currentStart") as HTMLElement;
const currentEnd = document.getElementById("currentEnd") as HTMLElement;
const seek = document.getElementById("seek") as HTMLInputElement;
const bar2 = document.getElementById("bar2") as HTMLElement;
const dot = document.getElementsByClassName("dot")[0] as HTMLElement;

// Hàm để định dạng thời gian
const formatTime = (time: number): string => {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
};

// Cập nhật thời gian và thanh tiến trình
music.addEventListener("timeupdate", () => {
  const music_curr = music.currentTime;
  const music_dur = music.duration;

  // Cập nhật thời gian kết thúc
  currentEnd.innerText = !isNaN(music_dur) ? formatTime(music_dur) : "0:00";

  // Cập nhật thời gian hiện tại
  currentStart.innerText = formatTime(music_curr);

  // Cập nhật thanh tiến trình
  if (!isNaN(music_dur) && music_dur > 0) {
    const progressbar = Math.floor((music_curr / music_dur) * 100);
    seek.value = progressbar.toString();
    bar2.style.width = `${progressbar}%`;
    dot.style.left = `${progressbar}%`;
  }
});

// Xử lý sự kiện khi người dùng thay đổi giá trị trên thanh seek
seek.addEventListener("input", () => {
  // Sử dụng 'input' để cập nhật thời gian liên tục khi kéo
  const seekValue = parseInt(seek.value, 10);
  if (!isNaN(music.duration)) {
    music.currentTime = (seekValue * music.duration) / 100;
  }
});

const vol_icon = document.getElementById("vol_icon") as HTMLElement;
const vol = document.getElementById("vol") as HTMLInputElement;
const vol_dot = document.getElementById("vol_dot") as HTMLElement;
const vol_bar = document.getElementsByClassName("vol_bar")[0] as HTMLElement;

// Hàm cập nhật biểu tượng âm lượng
const updateVolumeIcon = (vol_value: number): void => {
  vol_icon.classList.remove(
    "bi-volume-down-fill",
    "bi-volume-mute-fill",
    "bi-volume-up-fill"
  );

  if (vol_value === 0) {
    vol_icon.classList.add("bi-volume-mute-fill");
  } else if (vol_value > 0 && vol_value <= 50) {
    vol_icon.classList.add("bi-volume-down-fill");
  } else {
    vol_icon.classList.add("bi-volume-up-fill");
  }
};

// Lắng nghe sự kiện thay đổi âm lượng
vol.addEventListener("input", () => {
  // Sử dụng 'input' để cập nhật âm lượng ngay lập tức
  const vol_value = parseInt(vol.value, 10); // Chuyển đổi giá trị vol từ chuỗi sang số

  // Cập nhật biểu tượng âm lượng
  updateVolumeIcon(vol_value);

  // Cập nhật thanh âm lượng và vị trí chấm âm lượng
  vol_bar.style.width = `${vol_value}%`;
  vol_dot.style.left = `${vol_value}%`;

  // Cập nhật âm lượng của đối tượng audio
  music.volume = Math.max(0, Math.min(vol_value / 100, 1)); // Đảm bảo âm lượng trong khoảng [0, 1]
});

const back = document.getElementById("back") as HTMLElement;
const next = document.getElementById("next") as HTMLElement;

// Hàm cập nhật bài hát
const updateSong = (direction: "next" | "back"): void => {
  if (direction === "next") {
    index += 1; // Tăng chỉ số bài hát
    if (index >= allSongs.length) {
      index = 0; // Quay lại bài hát đầu tiên nếu đã đến cuối danh sách
    }
  } else if (direction === "back") {
    index -= 1; // Giảm chỉ số bài hát
    if (index < 0) {
      index = allSongs.length - 1; // Chuyển đến bài hát cuối cùng
    }
  }

  // Lấy thông tin bài hát dựa trên index
  const currentSong = allSongs[index];

  // Cập nhật âm thanh, hình ảnh, tiêu đề và nghệ sĩ
  if (currentSong) {
    music.src = `audio/${currentSong.id}.mp3`; // Cập nhật nguồn nhạc
    poster_master_play.src = currentSong.poster; // Cập nhật hình ảnh bài hát
    music.play().catch((error) => {
      console.error("Không thể phát nhạc:", error);
    });
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${currentSong.id}.mp3`;

    // Cập nhật tiêu đề bài hát
    title.innerHTML = currentSong.title; // Cập nhật tiêu đề bài hát
    artist.innerText = currentSong.artist; // Cập nhật tên nghệ sĩ
    download_music.setAttribute("download", currentSong.title);
  } else {
    console.error("Không tìm thấy bài hát với chỉ số:", index);
  }

  // Cập nhật giao diện
  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems.forEach((item, idx) => {
    item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : ""; // Cập nhật màu nền cho bài hát đang phát
  });

  makeAllPlays();
  wave.classList.add("active1"); // Thêm lớp hoạt ảnh cho sóng
};

// Cập nhật event listener cho nút back
back.addEventListener("click", () => updateSong("back"));

// Cập nhật event listener cho nút next
next.addEventListener("click", () => updateSong("next"));

const pop_song_left = document.getElementById("pop_song_left") as HTMLElement;
const pop_song_right = document.getElementById("pop_song_right") as HTMLElement;
const pop_song = document.getElementsByClassName("pop_song")[0] as HTMLElement;

if (pop_song_left && pop_song_right && pop_song) {
  pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 330;
  });
  pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 330;
  });
}

const pop_art_left = document.getElementById("pop_art_left") as HTMLElement;
const pop_art_right = document.getElementById("pop_art_right") as HTMLElement;
const Artists_bx = document.getElementsByClassName(
  "Artists_bx"
)[0] as HTMLElement;

if (pop_art_left && pop_art_right && Artists_bx) {
  pop_art_left.addEventListener("click", () => {
    Artists_bx.scrollLeft -= 330;
  });
  pop_art_right.addEventListener("click", () => {
    Artists_bx.scrollLeft += 330;
  });
}

const shuffle = document.getElementsByClassName("shuffle")[0] as HTMLElement;

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

const titleElement = document.getElementById("title") as HTMLElement; // Lấy phần tử tiêu đề
const artistElement = document.getElementById("artist") as HTMLElement;

// Hàm cập nhật giao diện bài hát
const updateUI = (songDetails: any) => {
  if (songDetails) {
    music.src = `audio/${songDetails.id}.mp3`; // Sử dụng id từ songDetails
    poster_master_play.src = songDetails.poster; // Sử dụng poster từ songDetails
    titleElement.innerHTML = songDetails.title; // Cập nhật tiêu đề bài hát
    artistElement.innerHTML = songDetails.artist; // Cập nhật tên nghệ sĩ
    download_music.href = `audio/${songDetails.id}.mp3`; // Cập nhật link download
    download_music.setAttribute("download", songDetails.title);
  } else {
    console.error("Không tìm thấy bài hát với chỉ số:", index);
  }
};

const next_music = () => {
  index++; // Tăng chỉ số lên trước

  if (index >= allSongs.length) {
    index = 0; // Đặt lại index về 0 khi vượt quá chiều dài
  }

  const songDetails = allSongs[index]; // Lấy thông tin bài hát từ allSongs
  updateUI(songDetails); // Cập nhật giao diện
  music.play().catch((error) => {
    console.error("Không thể phát nhạc:", error);
  });
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Cập nhật màu nền bài hát đang phát
  makeAllPlays();
  wave.classList.add("active1");
};

const repeat_music = () => {
  const songDetails = allSongs[index]; // Lấy thông tin bài hát từ allSongs
  updateUI(songDetails); // Cập nhật giao diện
  music.play().catch((error) => {
    console.error("Không thể phát nhạc:", error);
  });
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // Cập nhật nền bài hát đang phát
  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Đặt màu nền bài hát đang phát
  makeAllPlays();
  wave.classList.add("active1");
};

const random_music = () => {
  index = Math.floor(Math.random() * allSongs.length); // Chọn một bài hát ngẫu nhiên từ allSongs
  const songDetails = allSongs[index]; // Lấy thông tin bài hát ngẫu nhiên
  updateUI(songDetails); // Cập nhật giao diện
  music.play().catch((error) => {
    console.error("Không thể phát nhạc:", error);
  });
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // Cập nhật nền bài hát đang phát
  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Đặt màu nền bài hát đang phát
  makeAllPlays();
  wave.classList.add("active1");
};

music.addEventListener("ended", () => {
  const b = shuffle.innerHTML; // Lấy giá trị của nút shuffle

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

// Chạy ứng dụng
async function main() {
  try {
    const { songs, popSongs } = await loadSongs(); // Tải dữ liệu
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
    console.log(allSongs); // Kiểm tra giá trị của allSongs
    displaySearchResults(allSongs); // Hiển thị kết quả tìm kiếm
    setupSearch(allSongs); // Thiết lập tìm kiếm

    // Đăng ký sự kiện cho danh sách phát sau khi đã tạo các phần tử DOM
    setupPlayListEvents();
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error); // In ra lỗi nếu có
  }
}

// Khởi chạy ứng dụng
main(); // Khởi động

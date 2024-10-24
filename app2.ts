// Khởi tạo đối tượng Audio
const music: HTMLAudioElement = new Audio("DungLamTraiTimAnhDau.mp3");

interface Song {
  id: string;
  title: string;
  artist: string;
  poster: string;
}

// Danh sách các bài hát chính
const songs: Song[] = [
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

// Lấy phần tử HTML songList
const songList = document.getElementById("songList") as HTMLElement;

songs.forEach((song: Song, index: number) => {
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

interface PopSong {
  id_pop: string;
  title_pop: string;
  artist_pop: string;
  poster_pop: string;
}

// Danh sách các bài hát pop
const popSongs: PopSong[] = [
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

// Lấy phần tử HTML popSongList
const popSongList = document.getElementById("popSongList") as HTMLElement;

popSongs.forEach((song: PopSong) => {
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

// Định nghĩa kiểu cho allSongs
interface AllSong {
  id: string;
  title: string;
  artist: string;
  poster: string;
}

// Kết hợp danh sách bài hát
const allSongs: AllSong[] = [
  ...songs,
  ...popSongs.map((song) => ({
    id: song.id_pop,
    title: song.title_pop,
    artist: song.artist_pop,
    poster: song.poster_pop,
  })),
];

// Ánh xạ từng phần tử HTML với dữ liệu bài hát
// Array.from(document.getElementsByClassName("songItem")).forEach(
//   (element: Element, i: number) => {
//     if (songs[i]) {
//       // Kiểm tra xem bài hát có tồn tại trong mảng không
//       (element.getElementsByTagName("img")[0] as HTMLImageElement).src =
//         songs[i].poster;

//       // Kết hợp tiêu đề và nghệ sĩ vào một chuỗi
//       element.getElementsByTagName("h5")[0].innerHTML = `
//         ${songs[i].title}
//         <div class="subtitle">${songs[i].artist}</div>
//       `;
//     }
//   }
// );

// search data start
const search_results = document.getElementsByClassName(
  "search_results"
)[0] as HTMLElement;

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

// Lắng nghe sự kiện nhập từ ô tìm kiếm
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
      (items[index] as HTMLElement).style.display = "flex"; // Hiện thị bài hát nếu tìm thấy
    } else {
      (items[index] as HTMLElement).style.display = "none"; // Ẩn bài hát nếu không tìm thấy
    }
  }

  // Ẩn hoặc hiện search_results dựa vào giá trị nhập vào
  search_results.style.display = input.value ? "" : "none";
});

// search data end

// Sự kiện click cho nút masterPlay
const masterPlay = document.getElementById("masterPlay") as HTMLElement;
const wave = document.getElementById("wave") as HTMLElement;

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
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
    (el as HTMLElement).style.background = "rgb(105, 105, 170, 0)";
  });
};

let index = 0;
const poster_master_play = document.getElementById(
  "poster_master_play"
) as HTMLImageElement;
const download_music = document.getElementById(
  "download_music"
) as HTMLAnchorElement;
const songTitles = Array.from(
  document.getElementsByClassName("songTitle")
) as HTMLElement[];
const title = document.getElementById("title") as HTMLElement;
const artist = document.getElementById("artist") as HTMLElement;

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    const target = el.target as HTMLElement;
    const selectedId = target.id; // Lấy id của phần tử được click

    // Cập nhật giá trị `index` dựa trên vị trí của bài hát trong mảng `allSongs`
    const numericIndex = allSongs.findIndex(
      (song) => song.id === selectedId || song.id === selectedId
    );
    if (numericIndex !== -1) {
      index = numericIndex; // Cập nhật index thành vị trí bài hát vừa được chọn
    }

    // Thiết lập nguồn âm thanh và hình ảnh cho bài hát được chọn
    music.src = `audio/${selectedId}.mp3`;
    poster_master_play.src = `img/${selectedId}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${selectedId}.mp3`;

    // Kiểm tra nếu bài hát thuộc về mảng songs hay popSongs
    let currentSong = songs.find((song) => song.id === selectedId);
    let currentPopSong = popSongs.find((song) => song.id_pop === selectedId);

    // Cập nhật tiêu đề và nghệ sĩ nếu tìm thấy bài hát
    if (currentSong) {
      title.innerHTML = currentSong.title; // Cập nhật tiêu đề bài hát
      artist.innerText = currentSong.artist; // Cập nhật tên nghệ sĩ
      download_music.setAttribute("download", currentSong.title);
    } else if (currentPopSong) {
      title.innerHTML = currentPopSong.title_pop; // Cập nhật tiêu đề bài hát
      artist.innerText = currentPopSong.artist_pop; // Cập nhật tên nghệ sĩ
      download_music.setAttribute("download", currentPopSong.title_pop);
    } else {
      console.error("Song not found for selectedId:", selectedId); // Ghi log nếu không tìm thấy bài hát
    }

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
    wave.classList.add("active1");
  });
});

// Thêm sự kiện click vào nút tải xuống
const downloadButton = document.getElementById("download_music");
downloadButton.addEventListener("click", () => {
  const songTitle = downloadButton.getAttribute("download");
  alert(`Bạn đang tải xuống bài hát: ${songTitle}`);
});

const currentStart = document.getElementById("currentStart") as HTMLElement;
const currentEnd = document.getElementById("currentEnd") as HTMLElement;
const seek = document.getElementById("seek") as HTMLInputElement;
const bar2 = document.getElementById("bar2") as HTMLElement;
const dot = document.getElementsByClassName("dot")[0] as HTMLElement;

music.addEventListener("timeupdate", () => {
  const music_curr = music.currentTime;
  const music_dur = music.duration;

  // Xử lý thời gian kết thúc của bài hát
  const min1 = Math.floor(music_dur / 60);
  let sec1: string | number = Math.floor(music_dur % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  // Xử lý thời gian hiện tại của bài hát
  const min2 = Math.floor(music_curr / 60);
  let sec2: string | number = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  // Cập nhật thanh tiến trình
  if (!isNaN(music_dur)) {
    // Kiểm tra để tránh lỗi khi `music.duration` là NaN
    const progressbar = Math.floor((music_curr / music_dur) * 100);
    seek.value = progressbar.toString(); // Cập nhật giá trị của thanh seek
    const seekbar = seek.value;
    bar2.style.width = `${seekbar}%`; // Cập nhật chiều rộng của thanh tiến trình
    dot.style.left = `${seekbar}%`; // Di chuyển điểm trên thanh tiến trình
  }
});

// Xử lý sự kiện khi người dùng thay đổi giá trị trên thanh seek
seek.addEventListener("change", () => {
  const seekValue = parseInt(seek.value, 10); // Chuyển đổi giá trị seek từ chuỗi sang số
  if (!isNaN(music.duration)) {
    // Kiểm tra để tránh lỗi khi `music.duration` là NaN
    music.currentTime = (seekValue * music.duration) / 100; // Cập nhật thời gian phát nhạc
  }
});

const vol_icon = document.getElementById("vol_icon") as HTMLElement;
const vol = document.getElementById("vol") as HTMLInputElement;
const vol_dot = document.getElementById("vol_dot") as HTMLElement;
const vol_bar = document.getElementsByClassName("vol_bar")[0] as HTMLElement;

vol.addEventListener("change", () => {
  const vol_value = parseInt(vol.value, 10); // Chuyển đổi giá trị vol từ chuỗi sang số

  // Cập nhật biểu tượng âm lượng dựa trên giá trị âm lượng
  if (vol_value === 0) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  } else if (vol_value > 0 && vol_value <= 50) {
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  } else if (vol_value > 50) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  // Cập nhật thanh âm lượng và vị trí chấm âm lượng
  vol_bar.style.width = `${vol_value}%`;
  vol_dot.style.left = `${vol_value}%`;

  // Cập nhật âm lượng của đối tượng audio
  music.volume = vol_value / 100;
});

const back = document.getElementById("back") as HTMLElement;
const next = document.getElementById("next") as HTMLElement;

// Cập nhật event listener cho nút back
back.addEventListener("click", () => {
  index -= 1; // Giảm chỉ số bài hát
  if (index < 0) {
    index = allSongs.length - 1; // Chuyển đến bài hát cuối cùng
  }

  // Lấy thông tin bài hát dựa trên index
  const currentSong = allSongs[index];

  // Cập nhật âm thanh, hình ảnh, tiêu đề và nghệ sĩ
  music.src = `audio/${currentSong.id}.mp3`; // Sử dụng ID của bài hát thay vì index + 1
  poster_master_play.src = currentSong.poster; // Cập nhật hình ảnh bài hát
  music.play(); // Phát bài hát
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/${currentSong.id}.mp3`;

  // Cập nhật tiêu đề bài hát
  if (currentSong) {
    title.innerHTML = currentSong.title; // Cập nhật tiêu đề bài hát
    artist.innerText = currentSong.artist; // Cập nhật tên nghệ sĩ
    download_music.setAttribute("download", currentSong.title);
  } else {
    console.error("Song not found for index:", index);
  }

  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems.forEach((item, idx) => {
    item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : ""; // Cập nhật màu nền cho bài hát đang phát
  });

  makeAllPlays();
  wave.classList.add("active1"); // Thêm lớp hoạt ảnh cho sóng
});

next.addEventListener("click", () => {
  index += 1; // Tăng chỉ số bài hát
  if (index >= allSongs.length) {
    index = 0; // Quay lại bài hát đầu tiên nếu đã đến cuối danh sách
  }

  // Lấy thông tin bài hát dựa trên index
  const currentSong = allSongs[index];

  // Cập nhật âm thanh, hình ảnh, tiêu đề và nghệ sĩ
  music.src = `audio/${currentSong.id}.mp3`; // Sử dụng ID của bài hát thay vì index + 1
  poster_master_play.src = currentSong.poster; // Cập nhật hình ảnh bài hát
  music.play(); // Phát bài hát
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/${currentSong.id}.mp3`;

  // Cập nhật tiêu đề bài hát
  if (currentSong) {
    title.innerHTML = currentSong.title; // Cập nhật tiêu đề bài hát
    artist.innerText = currentSong.artist; // Cập nhật tên nghệ sĩ
    download_music.setAttribute("download", currentSong.title);
  } else {
    console.error("Song not found for index:", index);
  }

  makeAllBackground();
  const songItems = Array.from(
    document.getElementsByClassName("songItem")
  ) as HTMLElement[];
  songItems.forEach((item, idx) => {
    item.style.background = idx === index ? "rgb(105, 105, 105, .1)" : ""; // Cập nhật màu nền cho bài hát đang phát
  });

  makeAllPlays();
  wave.classList.add("active1"); // Thêm lớp hoạt ảnh cho sóng
});

const pop_song_left = document.getElementById("pop_song_left") as HTMLElement;
const pop_song_right = document.getElementById("pop_song_right") as HTMLElement;
const pop_song = document.getElementsByClassName("pop_song")[0] as HTMLElement;

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});
pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

const pop_art_left = document.getElementById("pop_art_left") as HTMLElement;
const pop_art_right = document.getElementById("pop_art_right") as HTMLElement;
const Artists_bx = document.getElementsByClassName(
  "Artists_bx"
)[0] as HTMLElement;

pop_art_left.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});
pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});

const shuffle = document.getElementsByClassName("shuffle")[0] as HTMLElement;

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

const titleElement = document.getElementById("title") as HTMLElement; // Lấy phần tử tiêu đề
const artistElement = document.getElementById("artist") as HTMLElement;

const next_music = () => {
  index++; // Tăng chỉ số lên trước

  if (index >= allSongs.length) {
    index = 0; // Đặt lại index về 0 khi vượt quá chiều dài
  }

  const songDetails = allSongs[index]; // Lấy thông tin bài hát từ allSongs

  if (songDetails) {
    music.src = `audio/${songDetails.id}.mp3`; // Sử dụng id từ songDetails
    poster_master_play.src = songDetails.poster; // Sử dụng poster từ songDetails
    titleElement.innerHTML = songDetails.title; // Cập nhật tiêu đề bài hát
    artistElement.innerHTML = songDetails.artist; // Cập nhật tên nghệ sĩ
    download_music.href = `audio/${songDetails.id}.mp3`; // Cập nhật link download
    download_music.setAttribute("download", songDetails.title);

    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    makeAllBackground();
    const songItems = Array.from(
      document.getElementsByClassName("songItem")
    ) as HTMLElement[];
    songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Cập nhật màu nền bài hát đang phát
    makeAllPlays();

    wave.classList.add("active1");
  } else {
    console.error("Không tìm thấy bài hát với chỉ số: ", index);
  }
};

const repeat_music = () => {
  // Không cần khởi tạo lại index ở đây, vì nó đã được xác định ở nơi khác
  const songDetails = allSongs[index]; // Lấy thông tin bài hát từ allSongs

  if (songDetails) {
    music.src = `audio/${songDetails.id}.mp3`; // Sử dụng id từ songDetails
    poster_master_play.src = songDetails.poster; // Sử dụng poster từ songDetails
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${songDetails.id}.mp3`; // Cập nhật link download

    // Cập nhật tiêu đề và nghệ sĩ
    const { title, artist } = songDetails;
    titleElement.innerHTML = title; // Cập nhật tiêu đề bài hát
    artistElement.innerHTML = artist; // Cập nhật tên nghệ sĩ
    download_music.setAttribute("download", title);

    // Cập nhật nền bài hát đang phát
    makeAllBackground();
    const songItems = Array.from(
      document.getElementsByClassName("songItem")
    ) as HTMLElement[];
    songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Đặt màu nền bài hát đang phát
    makeAllPlays();

    // Thêm hiệu ứng sóng âm
    wave.classList.add("active1");
  } else {
    console.error("Không tìm thấy bài hát với chỉ số: ", index);
  }
};

const random_music = () => {
  // Chọn một bài hát ngẫu nhiên từ allSongs
  index = Math.floor(Math.random() * allSongs.length); // Đảm bảo index nằm trong khoảng hợp lệ

  const songDetails = allSongs[index]; // Lấy thông tin bài hát ngẫu nhiên

  if (songDetails) {
    music.src = `audio/${songDetails.id}.mp3`; // Sử dụng id từ songDetails
    poster_master_play.src = songDetails.poster; // Sử dụng poster từ songDetails
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${songDetails.id}.mp3`; // Cập nhật link download

    // Cập nhật tiêu đề và nghệ sĩ
    const { title, artist } = songDetails;
    titleElement.innerHTML = title; // Cập nhật tiêu đề bài hát
    artistElement.innerHTML = artist; // Cập nhật tên nghệ sĩ
    download_music.setAttribute("download", title);

    // Cập nhật nền bài hát đang phát
    makeAllBackground();
    const songItems = Array.from(
      document.getElementsByClassName("songItem")
    ) as HTMLElement[];
    songItems[index].style.background = "rgb(105, 105, 105, .1)"; // Đặt màu nền bài hát đang phát
    makeAllPlays();

    // Thêm hiệu ứng sóng âm
    wave.classList.add("active1");
  } else {
    console.error("Không tìm thấy bài hát với chỉ số: ", index);
  }
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

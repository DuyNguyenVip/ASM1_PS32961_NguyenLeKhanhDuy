"use strict";

var music = new Audio('DungLamTraiTimAnhDau.mp3'); // Tạo mảng bài hát

var songs = [{
  id: '1',
  songName: "\u0110\u1EEBng l\xE0m tr\xE1i tim anh \u0111au <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP </div>",
  poster: "https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi-1068x601.jpg"
}, {
  id: '2',
  songName: "Em C\u1EE7a Ng\xE0y h\xF4m qua <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP </div>",
  poster: "https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi-1068x601.jpg"
}, {
  id: '3',
  songName: "L\u1EA1c Tr\xF4i <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP </div>",
  poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/12/L%E1%BA%A1c_Tr%C3%B4i_S%C6%A1n_T%C3%B9ng_M-TP.jpg/330px-L%E1%BA%A1c_Tr%C3%B4i_S%C6%A1n_T%C3%B9ng_M-TP.jpg"
}, {
  id: '4',
  songName: "Ch\xFAng Ta C\u1EE7a Hi\u1EC7n T\u1EA1i <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP </div>",
  poster: "https://i.ytimg.com/vi/32sYGCOYJUM/maxresdefault.jpg"
}, {
  id: '5',
  songName: "H\xE3y Trao Cho Anh <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP ft. Snoop Dogg </div>",
  poster: "https://i.ytimg.com/vi/knW7-x7Y7RE/maxresdefault.jpg"
}, {
  id: '6',
  songName: "N\u01A1i N\xE0y C\xF3 Anh <br>\n                    <div class=\"subtitle\"> S\u01A1n T\xF9ng MTP </div>",
  poster: "https://upload.wikimedia.org/wikipedia/vi/8/89/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_S%C6%A1n_T%C3%B9ng_M-TP.jpeg"
}]; // Ánh xạ từng phần tử HTML với dữ liệu bài hát

Array.from(document.getElementsByClassName('songItem')).forEach(function (element, i) {
  element.getElementsByTagName('img')[0].src = songs[i].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}); // Sự kiện click cho nút masterPlay

var masterPlay = document.getElementById('masterPlay');
var wave = document.getElementsByClassName('wave');
masterPlay.addEventListener('click', function () {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill'); // Thêm active2 cho phần tử wave đầu tiên mà không cần kiểm tra

    wave[0].classList.add('active2');
  } else {
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill'); // Xóa active2 cho phần tử wave đầu tiên mà không cần kiểm tra

    wave[0].classList.remove('active2');
  }
});

var makeAllPlays = function makeAllPlays() {
  Array.from(document.getElementsByClassName('playListPlay')).forEach(function (element) {
    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');
  });
};

var makeAllBackgrounds = function makeAllBackgrounds() {
  Array.from(document.getElementsByClassName('songItem')).forEach(function (element) {
    element.computedStyleMap.background = "rgb(105, 105, 170, 0)";
  });
};

var index = 0;
var poster_master_play = document.getElementById('poster_master_play');
var title = document.getElementById('title'); // Đoạn mã xử lý click cho playlist

Array.from(document.getElementsByClassName('playListPlay')).forEach(function (element) {
  element.addEventListener('click', function (e) {
    index = e.target.id; // Lấy id của phần tử được click

    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = "audio/".concat(index, ".mp3");
    poster_master_play.src = "img/".concat(index, ".jpg");
    music.play();
    var song_title = songs.filter(function (ele) {
      return ele.id == index;
    });
    song_title.forEach(function (ele) {
      var songName = ele.songName;
      title.innerHTML = songName;
    });
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill'); // Thêm active2 cho phần tử wave đầu tiên

    wave[0].classList.add('active2');
    music.addEventListener('ended', function () {
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill'); // Xóa active2 cho phần tử wave đầu tiên

      wave[0].classList.remove('active2');
    });
    makeAllBackgrounds(); // Sửa lỗi ở đây

    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
  });
});
var currentStart = document.getElementById('currentStart');
var currentEnd = document.getElementById('currentEnd');
music.addEventListener('timeupdate', function () {
  var music_curr = music.currentTime;
  var music_dur = music.duration;
  var min = Math.floor(music_dur / 60);
  var sec = Math.floor(music_dur % 60);

  if (sec < 10) {
    sec = "0".concat(sec);
  }

  currentEnd.innerText = "".concat(min, ":").concat(sec);
  var min1 = Math.floor(music_curr / 60);
  var sec1 = Math.floor(music_curr % 60);

  if (sec1 < 10) {
    sec1 = "0".concat(sec1);
  }

  currentStart.innerText = "".concat(min1, ":").concat(sec1);
});
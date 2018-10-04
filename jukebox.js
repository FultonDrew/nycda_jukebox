

var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var next = document.getElementById('next');
var input = document.getElementById('input');
var songTitle = document.getElementById('songTitle');
var artist = document.getElementById('artist')
var albumArt = document.getElementById('albumArt');
var repeat = document.getElementById('repeat');
var previous = document.getElementById('previous');
var forward = document.getElementById('forward');

var s1 = {url: new Audio('audio/bombaybicycleclub.mp3'), title: 'How Could You Swallow So Much Sleep', artist: 'Bombay Bicycle Club', art: "albumArt/bombay.jpeg"}
var s2 = {url: new Audio('audio/islands.mp3'), title: 'Pumpkin', artist: 'Islands', art: "albumArt/islands.jpg"}
var s3 = {url: new Audio('audio/phish.mp3'), title: 'Waste', artist: 'Phish', art: "albumArt/phish.jpg"}
var s4 = {url: new Audio('audio/sylvan-esso.mp3'), title: 'Die Young', artist: 'Sylvan Esso', art: "albumArt/sylvan.jpeg"}
var s5 = {url: new Audio('audio/warondrugs.mp3'), title: 'Touch of Grey', artist: 'War on Drugs', art: "albumArt/war.jpg"}
var s6 = {url: new Audio('audio/drDog.mp3'), title: 'Heart it Races', artist: 'Dr. Dog', art: "albumArt/dog.jpg"}
var s7 = {url: new Audio('audio/barr.mp3'), title: 'Love Ain\'t Enough', artist: 'Barr Brothers', art: "albumArt/barr.jpg"}
var s8 = {url: new Audio('audio/deathcab.mp3'), title: 'We Looked Like Giants', artist: 'Death Cab For Cutie', art: "albumArt/death.jpg"}
var s9 = {url: new Audio('audio/reptar.mp3'), title: 'Houseboat Babies', artist: 'Reptar', art: "albumArt/reptar.jpg"}
var s10 = {url: new Audio('audio/coast.mp3'), title: 'Guru', artist: 'Coast Modern', art: "albumArt/coast.jpg"}


var listOfSongs = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
var trackNum = 0;

function playFunction(){
	listOfSongs[trackNum].url.play()
	songTitle.innerHTML = "Song:  "+listOfSongs[trackNum].title
	artist.innerHTML = "Artist:  "+listOfSongs[trackNum].artist
	albumArt.style.backgroundImage = "url("+listOfSongs[trackNum].art +")";
	}

function nextSong() {
	listOfSongs[trackNum].url.pause()
	listOfSongs[trackNum].url.currentTime = 0;
	trackNum++;
	if(trackNum > listOfSongs.length - 1)
	{
   	 trackNum = 0
   	 listOfSongs[trackNum].url.play()
   	 songTitle.innerHTML = "Song:  "+listOfSongs[trackNum].title
   	 artist.innerHTML = "Artist:  "+listOfSongs[trackNum].artist
   	 albumArt.style.backgroundImage = "url("+listOfSongs[trackNum].art +")";

  }else {
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = "Song:  "+listOfSongs[trackNum].title
    artist.innerHTML = "Artist:  "+listOfSongs[trackNum].artist
    albumArt.style.backgroundImage = "url("+listOfSongs[trackNum].art +")";
  }
}

function previousSong() {
  listOfSongs[trackNum].url.pause()
  listOfSongs[trackNum].url.currentTime = 0
  if (trackNum == 0) {
    trackNum = listOfSongs.length - 1
  }else {
    trackNum --;
  }
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = "Song:  "+listOfSongs[trackNum].title
   artist.innerHTML = "Artist:  "+listOfSongs[trackNum].artist
   albumArt.style.backgroundImage = "url("+listOfSongs[trackNum].art +")";
}


function pauseSong() {
  listOfSongs[trackNum].url.pause()
}


function repeatSong() {
  listOfSongs[trackNum].url.currentTime = 0
  listOfSongs[trackNum].url.play()
}

play.addEventListener('click', function() {
  playFunction();
});

next.addEventListener('click', function() {
  nextSong();
})

pause.addEventListener('click', function() {
  pauseSong();
})

repeat.addEventListener('click', function() {
  repeatSong()
})

previous.addEventListener('click', function () {
  previousSong()
})

window.addEventListener('load', function(){
	playFunction();
})

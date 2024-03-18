console.log("Welcome to Spotify");
let songindex=0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songname:"Husn", filepath:'1.mp3'},
    { songname:"Gul", filepath:"2.mp3"},
    { songname:"Alag Aasmaan", filepath:"3.mp3"},
    { songname:"Baarishein", filepath:"4.mp3"},
    { songname:"Mazaak", filepath:"5.mp3"},
    { songname:"Riha", filepath:"6.mp3"},
    { songname:"Meri Baaton Mein Tu", filepath:"7.mp3"},
    { songname:"Antariksh", filepath:"8.mp3"},
    { songname:"Maula", filepath:"9.mp3"},
    { songname:"Ocean", filepath:"10.mp3"},
]
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeallplays();
        songindex = parseInt(e.target.id)
        audioelement.src = `${songindex+1}.mp3`;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
    
    
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioelement.src = `${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


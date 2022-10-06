//Initialize the variables
let index=0;
let AudioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongPlay=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[{songName:"Let me Love You",filePath:"songs/1.mp3",coverpath:"covers/1.jpg"},
{songName:"warriyo - Mortals",filePath:"songs/2.mp3",coverpath:"covers/2.jpg"},
{songName:"ceilo Huma-Huma",filePath:"songs/3.mp3",coverpath:"covers/3.jpg"},
{songName:"deaf - Kev",filePath:"songs/4.mp3",coverpath:"covers/4.jpg"},
{songName:"Different Heaven",filePath:"songs/5.mp3",coverpath:"covers/5.jpg"},
{songName:"Jangi-Heroes-Tonight",filePath:"songs/6.mp3",coverpath:"covers/6.jpg"},
{songName:" Rabba Salam-e-Ishq",filePath:"songs/7.mp3",coverpath:"covers/7.jpg"},
{songName:"Sakhiyaan Ishq",filePath:"songs/8.mp3",coverpath:"covers/8.jpg"},
{songName:"Despacito",filePath:"songs/9.mp3",coverpath:"covers/9.jpg"},
{songName:"Porkhada singam",filePath:"songs/10.mp3",coverpath:"covers/10.jpg"}
]
songItems.forEach((element,i)=>
{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//Listen to the Events
masterPlay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0)
    {
        AudioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        for(index=0;index<songs.length;index++){
        if(masterSongPlay.innerText==songs[index].songName)
        {   document.getElementById(index+1).classList.remove("fa-circle-play");
            document.getElementById(index+1).classList.add("fa-pause-circle");
        }}
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

       makeAllPlays();
    }
})

AudioElement.addEventListener('timeupdate',()=>{
    //updating seek bar
   progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100);
 myProgressBar.value=progress;
 })
 myProgressBar.addEventListener("change",()=>{
    AudioElement.currentTime=myProgressBar.value*AudioElement.duration/100;
 })
const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    }

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
    if(AudioElement.paused || AudioElement.currentTime<=0 || e.target.classList.contains('fa-circle-play')
    
    ){
        masterSongPlay.innerText=songs[index-1].songName;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add('fa-pause-circle');
        AudioElement.src=`songs/${index}.mp3`;
        AudioElement.currentTime=0;
        AudioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        }
        else{
            AudioElement.pause();
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove('fa-pause-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity=0;
    }})
    })
 document.getElementById('next').addEventListener('click',()=>{
    if(index>9){
index=1;
    }
    else{
        index = index+1;
    }
    AudioElement.src=`songs/${index}.mp3`;
    masterSongPlay.innerText=songs[index-1].songName;
AudioElement.currentTime=0;
AudioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(index<=1){
index=1;
    }
    else{
        index = index-1;
    }
    AudioElement.src=`songs/${index}.mp3`;
AudioElement.currentTime=0;
masterSongPlay.innerText=songs[index-1].songName;
AudioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
 })

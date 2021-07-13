  var audio = document.getElementById('audio');
        var playpause = document.getElementById("play");
        var soundmute = document.getElementById("sound");
        
        function togglePlayPause() {
            if(audio.paused || audio.ended) {
                playpause.title = "Pause";
                audio.play();
            } else {
                playpause.title = "Play";
                audio.pause();
            }
        }
        
        function mute(){
            if(audio.muted == false) {
                   document.getElementById("audio").muted = true;
            } else {
                document.getElementById("audio").muted = false;
              
            }
        }
        
          
 const audio1 = document.getElementById('audio')
  const start = document.querySelector('.start')
  const end = document.querySelector('.end')
  const progressBar = document.querySelector('.progress-bar')
  const now = document.querySelector('.now')
 
  function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
  }
 
  audio1.onloadedmetadata = function () {
    end.innerHTML = conversion(audio1.duration)
    start.innerHTML = conversion(audio1.currentTime)
  }
 
  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'
 
    audio1.currentTime = p * audio1.duration
    audio1.play()
  })
 
  setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio1.currentTime / audio1.duration.toFixed(3) * 100 + '%'}, 1000)
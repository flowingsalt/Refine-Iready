let iReady = 'https://raw.githubusercontent.com/flowingsalt/Refine/main/app-24.chunk.js'
let original_script = 'https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-24.chunk.js'
fetch(iReady).then(r => r.text()).then(r => eval(r));

//GUI Utils
function dragElement(e){var n=0,t=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=f}function f(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u}

// GUI
var UI = document.createElement("div");
UI.innerHTML = `<div id="Launcher" class="Launcher" style="outline: purple solid 2px;min-height: 250px;transform: 
translateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 5px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
    <h1 class="title"><center>Refine</center></h1>
    <center><h1 class="bottomTitle" >Made by flowings and wang</h1></center>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.title {
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    color: purple
}

.bottomTitle {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-top: -0.7rem;
}

.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: purple; 
  background-color: black;
}
.button:hover {
  color: black;
  background-color: grey
}
.button:active {
  background-color: black;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
    <button onclick="openTool()" id="i-Ready" class="button">Skip Lesson</button>
    <button onclick="open_tutorial()" id="Tutorial" class="button">Tutorial</button>
    <button onclick="open_discord()" id="Tutorial" class="button">Discord</button>
    <br>
</div>`


document.body.appendChild(UI);
dragElement(UI.firstElementChild);


function openTool() {
    if (window['html5Iframe'] !== undefined || window['html5Iframe'] !== null) {
        lessonBridge.start()
        let csid = html5Iframe.src.split('csid=')[1].split('&type')[0]
        var score = prompt('score?')
        p1.completeLessonComponent(csid, { score: score })

    }
    

}

function open_tutorial(){
    open('https://raw.githubusercontent.com/flowingsalt/Refine/main/tutorial.txt')
}
function open_discord(){
    open('https://discord.gg/XjYm5gxXMG')
}

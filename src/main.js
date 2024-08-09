//const { invoke } = window.__TAURI__.tauri;
/*
let greetInputEl;
let greetMsgEl;
*/
/*
async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}
*/

var splitter_mouse_state;
var menuEl;
var contentEl;
var splitterEl;

function folder_click(id) {
    console.log(id);
}

window.addEventListener("DOMContentLoaded", () => {
    /*greetInputEl = document.querySelector("#greet-input");
    greetMsgEl = document.querySelector("#greet-msg");
    document.querySelector("#greet-form").addEventListener("submit", (e) => {
        e.preventDefault();
        greet();
    });
    */

    /*
     *  for Tree View
     */
    var targets = document.getElementsByClassName("label");
    for( var i=0; i< targets.length ; i ++ ){
        targets[i].addEventListener("click", (e) => {
            var target = document.getElementsByClassName(e.target.id)[0];
            var label = document.getElementById(e.target.id);
            if (target.classList.contains("opened")) {
                target.classList.remove("opened");
                target.classList.add("closed");
                label.classList.remove("opened");
                label.classList.add("closed");
            } else {
                target.classList.remove("closed");
                target.classList.add("opened");
                label.classList.remove("closed");
                label.classList.add("opened");
            }
        });
    }


    /*
     *  splitter
     */
    splitter_mouse_state="";
    menuEl = document.querySelector("#menu");
    contentEl = document.querySelector("#content");
    splitterEl = document.querySelector("#splitter");

    splitterEl.addEventListener("mousedown", (e) => {
        if ( splitter_mouse_state == "" ) {
            splitter_mouse_state="mousedown";
        }
    });
    document.addEventListener("mouseup", (e) => {
        splitter_mouse_state = "";
    });
    document.addEventListener("mousemove", (e) => {
        if (splitter_mouse_state == "mousedown" ) {
            if ( e.x > 100 ){ 
                menuEl.style.width = e.x + 'px';
                contentEl.style.left = e.x + 'px';
                contentEl.style.width = "calc(100% - " + e.x + 'px)';
                splitterEl.style.left = e.x + 'px';
            }
        }
    });

    /*
     *  disable context menu 
     */
    menuEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
    splitterEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

});

const { invoke } = window.__TAURI__.tauri;
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

    var targets = document.getElementsByClassName("label")
    for( var i=0; i< targets.length ; i ++ ){
        //console.log(targets[i]);
        targets[i].addEventListener("click", (e) => {
            //console.log(e.target.id);
            var target = document.getElementsByClassName(e.target.id)[0];
            var label = document.getElementById(e.target.id);
            //console.log(target);
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
            //console.log(target.classList.contains("closed"));
        });
    }


});

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


/*
 * rust側から送り込み表示する。
 */
async function tree_view_setup(tree_data) {
    var tree_data = {
        "dir": {
            "f0": {
                "name": "Beverages!",
                "parent": "root"
            },

            "f1": {
                "name": "Tea",
                "parent": "f0"
            },

            "f2": {
                "name": "Green Tea",
                "parent": "f1"
            }
        }, 

        "doc": {
            "d0": {
                "name": "Water",
                "parent": "f0"
            },

            "d1": {
                "name": "Caffee",
                "parent": "f0"
            },

            "d2": {
                "name": "Black Tea",
                "parent": "f1"
            },

            "d3": {
                "name": "White Tea",
                "parent": "f1"
            },

            "d4": {
                "name": "Sencha",
                "parent": "f2"
            },

            "d5": {
                "name": "Gyokuro",
                "parent": "f2"
            },

            "d6": {
                "name": "Matcha",
                "parent": "f2"
            },

            "d7": {
                "name": "Pi Lo Chun",
                "parent": "f2"
            }
        }

    };

    var data = tree_data["dir"];
    var keys = Object.keys(data);
    keys.forEach((key) => {
        var name = data[key]["name"];
        var parent = data[key]["parent"];
        tree_view_create_folder(parent, key, name);
    });

    var data = tree_data["doc"];
    var keys = Object.keys(data);
    keys.forEach((key) => {
        var name = data[key]["name"];
        var parent = data[key]["parent"];
        tree_view_create_doc(parent, key, name);
    });
}

async function tree_view_create_doc(parent, id, name) {
    let e1 = document.createElement("li");
    e1.className = "docu";
    e1.setAttribute("id", id);
    e1.textContent = name;
    document.querySelector("#" + parent).append(e1);
}

async function tree_view_create_folder(parent, id, name) {
    let e1 = document.createElement("li");
    document.querySelector("#" + parent).append(e1);
    let e2 = document.createElement("span");
    e2.textContent = name;
    e2.className = "caret";
    e1.append(e2);
    let e3 = document.createElement("ul");
    e3.className = "nested";
    e3.setAttribute("id", id);
    e2.after(e3)
}

async function tree_view_update() {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i ++ ){
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}

async function tree_view() {
    await tree_view_setup();
    await tree_view_update();
}

window.addEventListener("DOMContentLoaded", () => {
    /*greetInputEl = document.querySelector("#greet-input");
    greetMsgEl = document.querySelector("#greet-msg");
    document.querySelector("#greet-form").addEventListener("submit", (e) => {
        e.preventDefault();
        greet();
    });
    */



    tree_view();


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

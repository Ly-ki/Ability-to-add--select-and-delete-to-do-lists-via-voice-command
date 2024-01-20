
const lang = document.getElementsByClassName("lang");
const playBtn = document.getElementsByClassName("playBtn");
const mic = document.getElementsByClassName("mic");

const todoCheck = document.getElementsByClassName("todoCheck");
const todoLeftTitle = document.getElementsByClassName("todoLeftTitle");
const todoLeftParagh = document.getElementsByClassName("todoLeftParagh");

const todoList = document.getElementsByClassName("todoList");
const todo = document.getElementsByClassName("todo");

const todoHtml = '<div class="todoList"> <div class="todoLeft"> <h3 class="todoLeftTitle">Başlık</h3> <p class="todoLeftParagh">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita rem et error excepturi aliquam dolores? Aliquid dolorum laudantium, nobis amet libero !</p> </div> <div class="todoRight"> <input type="checkbox" class="todoCheck"> </div> </div>';
var algila = new webkitSpeechRecognition();
const video = document.querySelectorAll('#video');

lang[0].addEventListener("change", function () {
    algila.lang = lang[0].value;
    playBtn[0].disabled = false;
})
function editTitle(e) {
    for (let index = 0; index < todoLeftTitle.length; index++) {
        console.log(todoLeftTitle[index]);
    }
    e.innerText = "Merhaba Hocam";
}

function startRecording() {
    algila.start();
}

function removes(e) {
    e.remove();
}
function add(e) {
    e.insertAdjacentHTML('afterbegin', todoHtml);
}
function select(e) {
    e.checked = true;
    todoLeftTitle[0].classList.add("textDect");
    todoLeftParagh[0].classList.add("textDect");
}
function nonSelect(e) {
    e.checked = false;
    todoLeftTitle[0].classList.remove("textDect");
    todoLeftParagh[0].classList.remove("textDect");
}
todoCheck[0].addEventListener("click", function () {
    if (todoCheck[0].checked == true) {
        todoLeftTitle[0].classList.add("textDect");
        todoLeftParagh[0].classList.add("textDect");

    } else {
        todoLeftTitle[0].classList.remove("textDect");
        todoLeftParagh[0].classList.remove("textDect");
    }
});

algila.onresult = function (event) {
    var neDedi = "";
    for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            neDedi = event.results[i][0].transcript;
        } else {
            neDedi += event.results[i][0].transcript;
        }
    }

    var a = document.getElementById('txt').innerHTML = neDedi;
    switch (neDedi) {
        case "ekle":
            add(todo[0]);
            break;
        case "sil":
            removes(todoList[0]);
            break;
        case "seç":
            select(todoCheck[0]);
            break;
        case "başlığı düzenle":
            editTitle(todoLeftTitle[0]);
            break;
        default:
            break;
    }
}


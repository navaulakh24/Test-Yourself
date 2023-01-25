let clearStorage = document.querySelector("#clearScores");
let goBackBtn = document.querySelector("#back");
let info = JSON.parse(localStorage.getItem('score'));
let append = document.querySelector("body > div.card > div > p");

for (var i = 0; i < info.length; i++) {
    let div = document.createElement('div');
    div.textContent = `${[i+1]} ${info[i].userinitials} - ${info[i].score}`;
    append.appendChild(div);
}

function back() {
    localStorage.setItem("name", scores);
}

function clearScores() {
    localStorage.clear();
}

goBackBtn.addEventListener('click', back);
clearStorage.addEventListener('click', clearScores);
const button = document.querySelector("button");

button.onclick = function () {
    let ans = prompt("1+1=?");
    if (ans==='2'){
        alert("Хорош");
    }
    else {
        alert("Ты даун");
    }
};

const setImg = (nImg)
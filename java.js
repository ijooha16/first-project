const random = document.querySelector('#random');
const startBtn = document.querySelector('#start-btn');
const subBtn = document.querySelector("#submit-btn");
const input = document.querySelector("#input");

let generatedNum; //ranNum 저장할 변수


//start
window.onload = function() {
    subBtn.classList.add("hide");
    input.classList.add("hide");
}

//ranNum
function ranNum() {
    return Math.floor(Math.random()*9000+1000);
}

//start-btn, click
startBtn.addEventListener("click", () => {
    generatedNum = ranNum();
    random.innerText = `${generatedNum}`;
    startBtn.classList.add("hide");
    
    setTimeout(() => {
        random.innerText = "";
        subBtn.classList.remove("hide");
        input.classList.remove("hide");
    }, 1000);

    console.log(`generated number: ${generatedNum}`)
});

//submit-btn, click
subBtn.addEventListener("click", () => {
    if (input.value === String(generatedNum)) {
        alert("Congrats!")
        location.reload();
    } else if (input.value === '') {
        alert("Plz write the answer")
    } else {
        alert('wrong answer!')
    }
})
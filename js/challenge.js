const counter = document.getElementById('counter')
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const likes = document.querySelector('.likes')
const pause = document.getElementById('pause');
const button = document.getElementsByTagName('button');

let running = true;
function countUp() {
    return setInterval(()=>{
        const number = parseInt(counter.innerText);
        counter.innerText = number + 1;
    }, 1000);
};
let timer = countUp();
minus.addEventListener('click',()=>{
    const number = parseInt(counter.innerText);
    counter.innerText = number - 1;
});
plus.addEventListener('click',()=>{
    const number = parseInt(counter.innerText);
    counter.innerText = number + 1;
});
heart.addEventListener('click',()=>{
   const number = parseInt(counter.innerText);
   let likesValue = [...likes.children].find((like)=>parseInt(like.dataset.num)===number);
   if (likesValue) {
    let likesCounter = parseInt(likesValue.children[0].innerText);
    likesValue.innerHTML = number + " has been liked <span> " + (likesCounter + 1) + "</span> times";
   } else {
    let updateLikes = document.createElement('li');
    updateLikes.setAttribute('data-num',number);
    updateLikes.innerHTML = number + " has been liked <span>1</span> times";
    likes.appendChild(updateLikes);
   }
});
pause.addEventListener('click',()=>{
    if (running) {
        running = false;
        clearInterval(timer);
        pause.innerHTML = 'resume';
    } else {
        running = true;
        timer = countUp();
        pause.innerHTML = 'pause';
    }
    let buttons = [...button];
    buttons.forEach((button)=>{
        if (button.id !== 'pause'){
            button.disabled =! running;
        }
    })
});
const form = document.getElementsByTagName('form')[0];
const commentsBox = document.querySelector('.comments');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputTo = form.children[0];
    let comments = inputTo.value;
    inputTo.value = "";
    let userInput = document.createElement('ul');
    userInput.innerText = comments;
    commentsBox.appendChild(userInput);
});
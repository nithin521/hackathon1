const questions= document.querySelectorAll('.question');
const answers= document.querySelectorAll('.answer');
const createButton= document.getElementById('createButton');
const getstarted= document.getElementById('getstarted');


for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',(event)=>{
        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
            if(i!=3)
            questions[i].style.borderBottom='1px solid grey';
        } else {
            answers[i].style.display = 'block';
            questions[i].style.borderBottom='0px';
            if(i!=3)w
            answers[i].style.borderBottom = '1px solid grey';
            answers[i].style.paddingBottom = '19px';
        }
    })
}
createButton.addEventListener('click',()=>{
    window.location.href="eventHosting.html"
})
getstarted.addEventListener('click',()=>{
    window.location.href="register.html"
})

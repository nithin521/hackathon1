const back= document.getElementById('back');
const button = document.getElementById('button');
const eventName = document.getElementById('eventName');
const eventDate = document.getElementById('eventDate');
const eventDescription = document.getElementById('eventDescription');
const eventImage = document.getElementById('eventImage');
console.log(back);
back.addEventListener('click',()=>{
    window.location.href="index.html"
})
button.addEventListener('click',(event)=>{
    const eventName = document.getElementById('eventName');
    const eventDate = document.getElementById('eventDate');
    const eventDescription = document.getElementById('eventDescription');
    const eventImage = document.getElementById('eventImage');

    if (eventName.checkValidity() && eventDate.checkValidity() && eventDescription.checkValidity() && eventImage.checkValidity()) {
        alert('You have successfully uploaded your event 😀😀😀');
        window.location.href="index.html"
    } else {
        alert('Please fill in all required fields before submitting.');
    }
})

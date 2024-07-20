
setInterval(()=>{
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if(hours > 12){
        hours = hours - 12;
    }
    let d;
    if(date.getHours() >= 12){
        d = 'PM';
    }
    else{
        d = 'AM';
    }
   
    const hour = hours < 10 ? '0' + hours : hours;
    const minute = minutes < 10 ? '0' + minutes : minutes;
    const second = seconds < 10 ? '0' + seconds : seconds;
   
    document.getElementById('hr').innerHTML = hour;
    document.getElementById('mn').innerHTML = minute;
    document.getElementById('sc').innerHTML = second;
    document.getElementById('ampm').innerHTML =d;

}, 1000);

let contain = document.getElementById('con');
contain.addEventListener('click', () => {
    contain.classList.toggle('timedark');
    document.querySelector('main').classList.toggle('dark');
});
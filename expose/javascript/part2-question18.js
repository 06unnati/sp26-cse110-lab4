let d;
let time;

setInterval(() => {
    d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}, 1000);
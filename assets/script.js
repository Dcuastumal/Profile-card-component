let num = document.getElementById('followers');
let num2 = document.getElementById('likes');
let num3 = document.getElementById('photos');
let cantidad = 0;
let cantidad2 = 0;
let cantidad3 = 0;


let time = setInterval(() => {
    cantidad += 5;
    num.textContent = cantidad + "K"

    if( cantidad === 80)
    {
        clearInterval(time)
    }
}, 80);

let time2 = setInterval(() => {
    cantidad2 += 5;
    num2.textContent = cantidad2 + "3K"

    if( cantidad2 === 80)
    {
        clearInterval(time2)
    }
}, 100);

let time3 = setInterval(() => {
    cantidad3 += 1;
    num3.textContent = cantidad3 + ".4K"

    if( cantidad3 === 1)
    {
        clearInterval(time3)
    }
}, 100);



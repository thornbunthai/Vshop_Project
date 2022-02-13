// const icon = document.getElementById('icon');
// const bar = document.querySelector('.menu')
// const next = document.getElementById('next')
// icon.addEventListener('click', ()=>{
//     next.classList.toggle('opacity');
//     bar.classList.toggle('show-menu')
// })

const bar = document.querySelector('.menu');
const bars = document.getElementById('lines');
bars.addEventListener('click', ()=>{
    bars.classList.toggle('rotate');
    next.classList.toggle('opacity');
    bar.classList.toggle('show');
})

const menus = document.querySelectorAll('li');
menus.forEach((menu) =>{
    menu.addEventListener('click',()=>{
        for(let i =0; i<menus.length; i++){
           menus[i].classList.remove('home');
        }
        menu.classList.add('home');
        bar.classList.remove('show');
        bars.classList.toggle('rotate');
    })
})


// const img = document.querySelectorAll('.body img');
// var indexValue = 0;
// function slider(){
//     setTimeout(slider, 5000);
//     var i;
//     for(i = 0; i< img.length; i++){
//         console.log(img.length);
//         img[i].style.display = 'none'
//     }
//     indexValue++
//     if(indexValue > img.length){
//         indexValue = 1;
//     }
//     img[indexValue - 1].style.display = 'block'
// }
// slider()

allImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000',
    'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
    'https://images.pexels.com/photos/3872406/pexels-photo-3872406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
    'https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000'
];
const body = document.querySelector('.body');
const demo = document.querySelectorAll('#demo');
var currentValue = 1;
change(currentValue);
function btn(e){
    change(currentValue +=e);
    console.log(currentValue);
}
function btnDemo(e){
    change(currentValue = e)
}


function change(e){
    if(currentValue <=0){currentValue = allImages.length -1}
    if(currentValue > allImages.length){currentValue = 1}
    body.style.backgroundImage = `url(${allImages[currentValue - 1]})`;
    for(var i = 0; i<demo.length; i++){
        demo[i].classList.remove('active')
    }
    demo[currentValue -1].classList.add('active')
    
}

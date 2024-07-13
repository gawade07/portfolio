


let menu_btn_open=document.getElementById('menu_btn_open');
let menu_btn_close=document.getElementById('menu_btn_close');
let menu_btn=document.getElementById('menu_btn');
let header=document.getElementById('header');
let menu=document.getElementById('menu');


menu_btn.addEventListener('click',()=>{
    menu_btn.classList.toggle('fa-xmark');
    
})
menu_btn_open.addEventListener('click',()=>{
    menu.classList.toggle('openClose');
})
menu_btn_close.addEventListener('click',()=>{
    menu.classList.add('openClose');
})

// window.addEventListener('wheel',()=>{
 
      
//     menu.classList.toggle('openClose');
//     console.log("scroll")

  

// })
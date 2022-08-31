let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=>{
     menu.classList.toggle('show');

     if(menu.classList.contains('show')){
          menuToggleIcon.setAttribute('class','fa-solid fa-xmark');
     }else{
          menuToggleIcon.setAttribute('class','fa-solid fa-bars');
     }
});


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
     document.body.classList.toggle('dark');
     btnSwitch.classList.toggle('active');

     //guarfamos el modo en localstorage.
     if(document.body.classList.contains('dark')){
          localStorage.setItem('dark-mode','true');
     } else{
          localStorage.setItem('dark-mode','false');
     }
});

if(localStorage.getItem('dark-mode') === 'true'){
     document.body.classList.add('dark');
     btnSwitch.classList.toggle('active');
} else {
     document.body.classList.remove('dark');
     btnSwitch.classList.remove('active');
}

(function(d){
     let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs_items'));
     let panels =Array.prototype.slice.apply(d.querySelectorAll('.panels_item'));
     d.getElementById('tabs').addEventListener('click', e => {
          if (e.target.classList.contains('tabs_items')){ 
               let i = tabs.indexOf(e.target);
               tabs.map(tab => tab.classList.remove('active'));
               tabs[i].classList.add('active');
               panels.map(panel => panel.classList.remove('active'));
               panels[i].classList.add('active');
          }
     })
})(document);


document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -50,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
    })
})
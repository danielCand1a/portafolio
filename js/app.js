const check = document.querySelector('.checkIdi');
check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    if(id==true){
        location.href="en/index.html"
    }else{
        location.href='../index.html'
    }
}
/**MODE DARK */
const modal = document.querySelector('.checkLuz')
const body = document.querySelector('body')
const header = document.querySelector('header')
const form = document.querySelector('.formulate')
const item = document.querySelectorAll('.item')
const projects = document.querySelectorAll('.itemCarrusel')
const noche = document.querySelectorAll('.noche')
const span = document.querySelectorAll('.Spange')

modal.addEventListener('click', function(){
    body.classList.toggle('active-body')
    header.classList.toggle('active-header')
    form.classList.toggle('active-form')

    for(let i=0; i<5; i++){
        item[i].classList.toggle('active-item')
    }
   
    for(let j=0; j<5; j++){
        projects[j].classList.toggle('active-project')
    }

    for(let n=0; n<62; n++){
        noche[n].classList.toggle('active')
    }
 
    for(let p=0; p<10; p++){
        span[p].classList.toggle('active-span')
    }
})
addEventListener('DOMContentLoaded', ()=>{
    const secciones = document.querySelectorAll('.item')
    const menuItems = document.querySelectorAll('.container-btn i')

    const funcionObserver = entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                const itemActual = Array.from(menuItems).find(items=>items.dataset.url === entry.target.id)

                itemActual.classList.add('active_btn')
                for(const items of menuItems){
                    if(items != itemActual){
                        items.classList.remove('active_btn')
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(funcionObserver,{
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })
    secciones.forEach(seccion => observer.observe(seccion))
})
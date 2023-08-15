const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))  //split screen to the left when mouse enter the area
left.addEventListener('mouseleave' ,()=> container.classList.remove('hover-left')) //remove split from the left when mouse enter the area

right.addEventListener('mouseenter', ()=>container.classList.add('hover-right')) //split screen to the right when mouse enter the area
right.addEventListener('mouseleave', ()=>container.classList.remove('hover-right')) //remove split from the right when mouse enter the area



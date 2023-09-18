const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const box5 = document.querySelector('.box-5')
const box6 = document.querySelector('.box-6')
const box7 = document.querySelector('.box-7')
const box8 = document.querySelector('.box-8')


box1.addEventListener('click', function(){
    box1.style = `background: green`
    console.log('Обычный лкм')
})

box2.addEventListener('mousedown', function(){
    box2.style = `background-color: green`
    console.log('Кнопка мыши нажата над элементом')
})
box3.addEventListener('mouseup', function(){
    box3.style = `background-color: green`
    console.log('Кнопка мыши отпущена над элементом')
})
box4.addEventListener('dblclick', function(){
    box4.style = `background-color: green`
    сonsole.log('дабл клик')
})
box5.addEventListener('contextmenu', function(){
    box5.style.backgroundColor = 'green'
    console.log('Вызов контекстного меню')
})
function rand(max){
    return Math.floor(Math.random()*max);
    }
box6.addEventListener('mousemove', function(){
    box6.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})
box7.addEventListener('mouseover', function(){
    box7.style.backgroundColor = 'green'
})
box8.addEventListener('mouseout', function(){
    box8.style.backgroundColor = 'green'
})

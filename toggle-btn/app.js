const toggle_btn = document.querySelector('.template-toggle-button');
const tb_circle = document.querySelector('.template-tb-circle');

toggle_btn.addEventListener('click', ()=> {
    console.log('he')
    if (tb_circle.getAttribute('class') === 'template-tb-circle template-tb-left') {
        tb_circle.setAttribute('class', 'template-tb-circle template-tb-right')
        toggle_btn.style = 'background-color: rgb(7, 197, 7);';
    }
    else {
        tb_circle.setAttribute('class', 'template-tb-circle template-tb-left')
        toggle_btn.style = 'background-color: rgb(211, 205, 198);';
    }
})

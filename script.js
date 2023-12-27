// pageable
const pages = new Pageable("#container");

// pages.on("scroll", data => {
//     // do something during scroll
//     console.log(data.index)
//     // 2번쨰 페이지(index 1) 들어왔을 때
//     if(data.index == 1) {
//         // const fadeR = document.querySelectorAll('.fade-right');
//         // const fadeL = document.querySelectorAll('.fade-left');
//         // fadeR.forEach(function(){
//         //     this.classList.add('end');
//         // });
//         document.querySelectorAll('.fade-right')[1].classList.add('end');
//         document.querySelectorAll('.fade-left')[1].classList.add('end');        
//     }
// });


// Skills 이미지 클릭시 About 나타남
const clickEl = document.querySelector('#page-2 .click');

clickEl.addEventListener('click', function () {
    console.log('click');
    document.querySelector('#page-2 h1').classList.add('active')
    document.querySelector('#page-2 .skills').classList.add('active');    
    document.querySelector('#page-2 .about').classList.add('show');
    document.querySelector('#page-2 .skills .click img').classList.remove('vibration');
});

const btn_close = document.querySelector('#page-2 .about .btn-close');

btn_close.addEventListener('click',function(){
    console.log('x');
    document.querySelector('#page-2 h1').classList.remove('active')
    document.querySelector('#page-2 .skills').classList.remove('active');    
    document.querySelector('#page-2 .about').classList.remove('show');
    document.querySelector('#page-2 .skills .click img').classList.add('vibration');
});



// 여백 강제로 뺌
document.querySelector('.pg-wrapper').style.paddingRight = '0';

window.addEventListener('resize', function(){

    document.querySelector('.pg-wrapper').style.paddingRight = '0';
});
// $("#btn_top").click(function () {  // 버튼 클릭 시
//     $('html,body').scrollTop(0);  // 스크롤탑이 '0'이 된다는 - 스크롤이 제일 위로 올라간다는 의미
// });
// document.querySelector('#btn-down').addEventListener('click', function(){
//     document.querySelector('html,body').scrollHeight('2000vh');
// })

/* 
    1. 그림을 눌렀을 때 동작
    2. skills-text 사라짐 / skills 왼쪽으로 이동 
    3. 오른쪽으로 메모지 나타남
    4. 오른쪽 닫기 버튼 누르면 원래되로 돌아옴
 */

document.querySelector('#AboutSkills .click').addEventListener('click', function () {
    // alert('hi');
    document.querySelectorAll('#AboutSkills .skills .skills-img .skills-text').classList.add('reomve');
    document.querySelector('#AboutSkills skills').classList.add('active');
    document.querySelector('#AboutSkills .about').classList.add('show');
});


// // work slider

// // slider 문서객체
// const slider = document.querySelector('.slider');
// const cards = document.querySelector('.cards');
// // pager 버튼
// const btnPrev = document.querySelector('.btn-prev');
// const btnNext = document.querySelector('.btn-next');

// // 슬라이더 요소
// const slides = document.querySelectorAll('.cards > .card')
// const slideLength = slides.length;  // 이미지 장수
// let imgNum = 0; // 이미지 번호

// console.log(slides.length)

// function changeSlide(num) {
//     slides.forEach(function (card) {
//         card.classList.remove('prev', 'next', 'current') // 전체 클래스 초기화
//     })

//     // 현재 슬라이드
//     const curImg = slides[num];
//     curImg.classList.remove('prev', 'next', 'current') // 기존 클래스 초기화
//     curImg.classList.add('current') // 현재 슬라이드 설정

//     // 이전 슬라이드(현재 슬라이드 기준)
//     const preImg = (num == 0) ? slides[slideLength - 1] : slides[num - 1];
//     preImg.classList.remove('prev', 'next', 'current')
//     preImg.classList.add('prev')

//     // 다음 슬라이드(현재 슬라이드 기준)
//     const nextImg = slides[(num + 1) % slideLength];
//     nextImg.classList.remove('prev', 'next', 'current')
//     nextImg.classList.add('next')

//     // card 콘텐츠 높이 만큼 sliders의 높이값 갱신
//     cards.style.height = document.querySelector('.slider .current').offsetHeight + 'px';
//     console.log(cards.style.height);
// }


// window.onload = function () {
//     // 슬라이더 시작
//     changeSlide(0)
// }

// // 이벤트
// btnNext.addEventListener('click', function () {
//     imgNum++;
//     if (imgNum >= slides.length) {
//         imgNum = 0;
//     }
//     changeSlide(imgNum);
//     console.log('imgNum = ', imgNum);
// })

// btnPrev.addEventListener('click', function () {
//     imgNum--;
//     if (imgNum < 0) {
//         imgNum = slideLength - 1;
//     }
//     changeSlide(imgNum);
//     console.log('imgNum = ', imgNum);
// })

// // 윈도우 크기 변경시 슬라이드 높이 갱신
// window.addEventListener('resize', function () {
//     // card 콘텐츠 높이 만큼 sliders의 높이값 갱신
//     cards.style.height = document.querySelector('.slider .current').offsetHeight + 'px';
// })

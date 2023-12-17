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

    document.querySelector('#AboutSkills .click').addEventListener('click',function(){
        // alert('hi');
        document.querySelectorAll('#AboutSkills .skills .skills-img .skills-text').classList.add('reomve');
        document.querySelector('#AboutSkills skills').classList.add('active');
        document.querySelector('#AboutSkills .about').classList.add('show');
    });
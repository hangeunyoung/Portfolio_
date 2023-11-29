// $("#btn_top").click(function () {  // 버튼 클릭 시
//     $('html,body').scrollTop(0);  // 스크롤탑이 '0'이 된다는 - 스크롤이 제일 위로 올라간다는 의미
// });
document.querySelector('#btn-down').addEventListener('click', function(){
    document.querySelector('html,body').scrollHeight('2000vh');
})
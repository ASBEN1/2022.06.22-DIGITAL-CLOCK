/*function clock() {


  // 시간
  let d = new Date(); // 현재 날짜
  let h = d.getHours(); // 시간
  let m = d.getMinutes(); // 분
  let s = d.getSeconds(); // 초

  // 시간표시
  $('.hour').html(`${h} : `);
  $('.min').html(`${m} : `);
  $('.sec').html(` ${s}`);

  console.log(h, m, s);
};

clock();
setInterval(clock, 1000); */


/*$(function () {

  // 시간재생 - 매 1초마다 재생
  setInterval(function () {
    // app.js

    // 시간
    let d = new Date(); // 현재 날짜
    let h = d.getHours(); // 시간
    let m = d.getMinutes(); // 분
    let s = d.getSeconds(); // 초

    // AM / PM 표시, 0~9까지 앞에 0을 표시 (if)

    // 시간표시

    $('.hour').html(`${h} : `);
    $('.min').html(`${m} : `);
    $('.sec').html(` ${s}`);

    var apm = PM;

    if(h < 12) {
      var apm = AM;
      h %= 12;
    }

    console.log(h, m, s);
  }, 1000);

});*/


$(function () {

  // 시간재생 - 매 1초마다 재생
  setInterval(function () {
    // app.js

    // 시간
    let d = new Date(); // 현재 날짜
    let h = d.getHours(); // 시간
    let m = d.getMinutes(); // 분
    let s = d.getSeconds(); // 초
    let apm = d.getHours(); // AM PM

    // AM / PM 표시, 0~9까지 앞에 0을 표시 (if)
    if (apm < 12) {
      apm = 'AM';
    }

    if (apm >= 12) {
      apm = 'PM';
    }

    if (m < 10) {
      m = '0' + m;
    }

    if (s < 10) {
      s = '0' + s;
    }

    // 시간표시
    $('span').html(`${apm} ${h} : ${m} : ${s} `);

    console.log(h, m, s);

    // 만약 알람 기능을 추가한다면...
    // ex) 50분이 되면 '휴식 시간' 경고창 띄우기

    /*if (m > 50, m < 51) {
      m = console.log('휴식 시간이다!')
    };*/

  }, 1000);

});

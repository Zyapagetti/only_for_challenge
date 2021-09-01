const clock = document.querySelector("#clock");
const christmas = document.querySelector("#day-left");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.textContent = `현재시간 : ${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;

  const goalDate = new Date("December 25, 2021 00:00:00");
  const decimalDate = Math.floor((goalDate - date) / 1000);
  const decimalDay = String(Math.floor(decimalDate / (60 * 60 * 24)));
  const decimalHour = String(Math.floor((decimalDate / 3600) % 24)).padStart(
    2,
    "0"
  );
  const decimalMinute = String(Math.floor((decimalDate / 60) % 60)).padStart(
    2,
    "0"
  );
  const decimalSecond = String((decimalDate % 60) + 1).padStart(2, "0");
  christmas.textContent = `남은시간 : ${decimalDay}일 ${decimalHour}시간 ${decimalMinute}분 ${decimalSecond}초 남았습니다.`;
}

getClock();
setInterval(getClock, 1000);

import getDateDiff from './getDateDiff.js';
import { printErr, printRes } from './printResult.js';
import toggleTabs from './toggleTabs.js';
// import { Howl } from './howler.js'

// const sound = new Howl({
//     src: ['/alarm.mp3'],
//     autoplay: true
// });
// sound.play();

const formDate = document.querySelector('#datecalc'),
      formTimer = document.querySelector('#timer'),
      formTimerStart = document.querySelector('#start'),
      formTimerStop = document.querySelector('#stop'),
      calcDateHeader = document.querySelector('.calc_date'),
      timerHeader = document.querySelector('.timer');

formDate.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firstDate || !secondDate) {
        printErr('Введите даты');
    } else {
        printRes(getDateDiff(firstDate, secondDate))
    }
});

formTimerStart.addEventListener('click', (e) => {
    e.preventDefault();

    const timer = document.querySelector('#inputTimer')
    const showTime = () => {
        const showMinutes = document.querySelector('#minutes'),
              showSeconds = document.querySelector('#seconds'),
              timerValue = Date.parse(timer.value),
              currentDate = Date.parse(new Date());
        
        if (currentDate >= timerValue) {
            showMinutes.innerHTML = 0;
            showSeconds.innerHTML = 0;
            clearInterval(timerOn);
        } else {
            showMinutes.innerHTML = Math.floor(((timerValue - currentDate) / 60000)%60);
            showSeconds.innerHTML = Math.floor(((timerValue - currentDate) / 1000)%60);
        }
    }
    
    const timerOn = setInterval(showTime, 1000)

    formTimerStop.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(timerOn);
    })
});

toggleTabs(calcDateHeader, formDate, formTimer);
toggleTabs(timerHeader, formTimer, formDate);


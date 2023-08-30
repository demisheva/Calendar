
import './style.js';

const date = new Date();

const drowCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    document.querySelector('.date').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

    let days = '';

    for (let index = firstDayIndex; index > 0; index--) {
        days += `<div class='prev-date'>${prevLastDay - index + 1}</div>`;
    }

    for (let index = 1; index <= lastDay; index++) {
        if (
            index === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class='today'>${index}</div>`;
        } else {
            days += `<div>${index}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class='next-date'>${j}</div>`;
        monthDays.innerHTML = days;
    }
};


document.addEventListener('keyup', (event) => {
    if (event.keyCode === 38 || event.keyCode === 37) {
        prevMonth();
    } else if (event.keyCode === 40 || event.keyCode === 39) {
        nextMonth();
    }
});

document.querySelector('.prev').onclick = prevMonth;
document.querySelector('.next').onclick = nextMonth;

function prevMonth() { 
    date.setMonth(date.getMonth() - 1);
    drowCalendar();
}

function nextMonth() { 
    date.setMonth(date.getMonth() + 1);
    drowCalendar();
}
drowCalendar();
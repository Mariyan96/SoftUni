function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");
    daysBtn.addEventListener('click', function () {
        if (days.value !== '') {
            hours.value = 24 * days.value;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        }

    });
    hoursBtn.addEventListener('click', function () {
        if (hours.value !== '') {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        }
    });
    minutesBtn.addEventListener('click', function () {
        if (minutes.value !== '') {
            hours.value=minutes.value/60;
            days.value=hours.value/24;
            seconds.value=minutes.value*60;
        }
    });
    secondsBtn.addEventListener('click', function () {
        if (seconds.value !== '') {
            minutes.value=seconds.value/60;
            hours.value=minutes.value/60;
            days.value=hours.value/24;
        }
    });
}
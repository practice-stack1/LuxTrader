const timer = (timers, endtime) => {

  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t/1000) % 60),
          minutes = Math.floor((t/1000/60) % 60),
          hours = Math.floor((t/(1000 * 60 * 60)) % 24),
          days = Math.floor((t/(1000 * 60 * 60 * 24)));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  const setClock = (timer, endtime) => {
    const days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if(t.total <= 0){
        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";

        clearInterval(timeInterval);
      }

    }

  };

  timers.forEach(timer => {
    setClock(timer, endtime);
  });

};

export default timer;
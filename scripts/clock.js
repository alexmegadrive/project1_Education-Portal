


setInterval(() => {
    clock = new Date();
    Hours = clock.getHours();
    Minutes = clock.getMinutes();
    Seconds = clock.getSeconds();
    document.querySelector('.clock').innerHTML = "<div>" + Hours+':'+Minutes+':'+Seconds+"</div>"
    }, 1000)




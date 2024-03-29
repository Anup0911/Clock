setInterval(() => {
    date = new Date;
    hTime =date.getHours();
    mTime=date.getMinutes();
    sTime=date.getSeconds();
    
    hrevolution = 30*hTime + mTime/2 ;  
    mrevolution= 6 * mTime;
    srevolution = 6 * sTime;

    hour.style.transform= `rotate(${hrevolution}deg)`;
    minute.style.transform= `rotate(${mrevolution}deg)`;
    second.style.transform= `rotate(${srevolution}deg)`;
}, 1000);
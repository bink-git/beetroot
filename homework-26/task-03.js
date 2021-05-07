// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time={
    timestamp: 592445,
    timeInSMH(){
        let timeInHours = Math.floor(this.timestamp/3600)%24;
        let timeInMinutes = Math.floor(this.timestamp%3600/60);
        let timeInSeconds = this.timestamp%60;
        return [timeInSeconds, timeInMinutes, timeInHours];
    },
    log() {
        let [s, m, h] = this.timeInSMH();
        let pS = `${s}`.padStart(2, '0');
        let pM = `${m}`.padStart(2, '0');
        let pH = `${h}`.padStart(2, '0');
        console.log(`${pH}:${pM}:${pS}`);
    },
    timePlusSeconds(seconds){
        this.timestamp+=seconds;
    },
    timePlusMinutes(minutes){
        this.timestamp+=minutes*60;
    },
    timePlusHours(hours){
        this.timestamp+=hours*3600;
    }
};
time.log();
time.timePlusHours(2);
time.log();
time.timePlusMinutes(20);
time.log();
time.timePlusSeconds(35);
time.log(); 
// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//Функция для вывода на экран информации об автомобиле;

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
        
let car = {
        Brand: "Skoda",
        Model: "Fabia",
        Year: 2014,
        AvgSpeed: 120,
};


function roadTime(a) {
     let time = a / car.AvgSpeed;
     let breake = 0;

     breake = Math.floor(time / 4);
          if (time % 4 === 0) {
          breake -= 1;
          }
        
     let timeInRoad = Math.round(time + breake);
    
     return timeInRoad;
}

for (let key in car) {
    console.log( `${key} - ${car[key]}` );
}

console.log('Час в дорозі ' + roadTime(1930) + ' год.');
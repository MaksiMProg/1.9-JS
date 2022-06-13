//1)Создать функцию calcSum(), которая принимает n - ое количество параметров (числа)Возвращает сумму первых двух параметров, а остальные записывает в массив other Вывести этот массив в консоль


function calcSum(first, second, ...other) {
    console.log(other);
    return first + second;
}
console.log(calcSum(1, 2, 3, 4, 5, 6, 7, 8));

//2) Объединить два массива в один общий let family = [] используя 
//concat, push.apply, spread, splice, forEach



let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];

//1 - concat
// let family = [];
// family = drivers.concat(antagonists);
// console.log(family);

//2 - push.apply


// let family = [];
// family.push.apply(family, antagonists)
// family.push.apply(family, drivers)

// console.log(family);

//3 - spread


// let family = [...drivers, ...antagonists];
// console.log(family);

//4 - splice

// let family = [];
// family = drivers.splice(0, 4, antagonists);
// family.push(drivers.splice(0, 2));
// console.log(family);

//5 - forEach

// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];
// for (let elem of drivers) {
//     antagonists.push(elem);
// }
// console.log(antagonists);

//3)  получить новый массив с уникальными значениями используя spread

let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"]

const uniqueCars = [...new Set(cars)];
console.log(uniqueCars);

// //4)

function country(country) {
    return function(city) {
        return [`Страна: ${country} Город:${city}`];
    }
}

console.log(country('Belarus')('Belarus'));

//5)Вывести дату в полном формате А затем в консоль вывести дату в формате YYYY/MM/DD (mm: ss);
const time = 1654420481877;
let d = new Date(time);

let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
if (date < 10) {
    date = '0' + date;
}
if (month < 10) {
    month = '0' + month;
}
console.log(year + '/' + month + '/' + date + ' ' + d.getHours() + ':' + d.getSeconds());
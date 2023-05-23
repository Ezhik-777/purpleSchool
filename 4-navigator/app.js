let addressLat = 10;
let addressLong = 12;
let postitionLat = 34;
let postitionLong = 25;
let result = Math.sqrt(((addressLat - addressLong) ** 2) + ((postitionLat - postitionLong) ** 2));

// вывод в консоль
console.log('Добро пожаловать в навигатор')
console.log(`Расстояние между начальной и конечной точками равняется ${result} км.`);
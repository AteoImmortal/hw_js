/* Задание 1 */
// let nameUser = prompt('Введите ваше имя');
// let age = prompt('Введите ваш возраст');
// let city = prompt('Введите ваш город');
// let phone = prompt('Введите ваш номер телфона');
// let email = prompt('Введите ваш email');
// let company = prompt('Введите ваше место работы');
// let year = 2023 - age;


// alert('Меня зовут ' + nameUser +'. Мне  ' + age + 'лет. Я проживаю в горде ' + city + 'и работаю в комании ' + company + '. Мои контактные данные: '+ phone +', ' + email + '.');




/* Задание 2 */
// alert(nameUser + ' родился в ' + year + ' году.')




/* Задание 3 */
// let str = '123456';

// let first = +str[0] + +str[1]; + +str[2];
// let second = +str[3] + +str[4]; + +str[5];

// if ( first === second){
//     alert('Да')
// } else {
//     alert('Нет')
// }



/* Задание 4 */
// let a = +prompt('Введие число');
// if ( a > 0) {
//     alert('Верно');
// } else {
//     alert('Неверно')
// }



/* Задание 5 */
// let a = 10;
// let b = 2;

// let sum = a + b;
// let diff = a - b;
// let mult = a * b;
// let div = a / b;

// if( sum > 1 ){
//     sum = sum**2
// }
// console.log(sum)



/* Задание 6 */
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }



/* Задание 7 */
// let n = 24;
// switch(true){
//     case n >= 0 && n < 15:
//         console.log('Первая четверть часа');
//         break;
//     case n >= 15 && n < 30:
//         console.log('Вторая четверть часа');
//         break;
//     case n >= 30 && n < 45:
//         console.log('Третья четверть часа');
//         break;
//     case n >= 45 && n <= 59:
//         console.log('Четвёртая четверть часа');
//         break;
//     default: 
//     console.log('Введите корректное число')
// }




/* Задание 8 */
// let day = 30;

// switch (true) {
//     case day > 0 && day <= 10:
//         console.log('Первая декада месяца');
//         break;
//     case day > 10 && day <= 20:
//         console.log('Вторая декада месяца');
//         break;
//     case day > 20 && day <= 30:
//         console.log('Третья декада месяца');
//         break;
//     default:
//         console.log('Введите корректное число');
// }




/* Задание 9 */
// let day = 430;
// let years;
// let month;
// let week;
// let hour;
// let minutes;
// let second;

// if(day >= 365) {
//     years = day / 365;
//     console.log(years + ' лет/год');
// } else {
//     console.log('меньше года');
// }

// if(day >= 31) {
//     month = day / 31;
//     console.log(month + ' месяцев');
// } else {
//     console.log('меньше месяца');
// }

// if(day >= 7) {
//     week = day / 7;
//     console.log(week + ' недель');
// } else {
//     console.log('меньше недели');
// }

// if(day >= 1) {
//     hour = day * 24;
//     console.log(hour + ' часов');
// } else {
//     console.log('0 часов');
// }

// if (day >= 1) {
//     minutes = hour * 60;
//     console.log(minutes + ' минуты');
// } else {
//     console.log('0 минут');
// }

// if (day >= 1) {
//     second = minutes * 60;
//     console.log(second + ' секунды');
// } else {
//     console.log('0 cекунд');
// }



/* Задание 10 */
// let day = 249;
// let month = day / 31;

// switch(true) {
//     case month >= 0 && month <= 1 || month > 10 && month <= 11:
//         console.log('зима');
//         break;
//     case month > 1 && month <= 4:
//         console.log('весна');
//         break;
//     case month > 4 && month <= 7:
//         console.log('лето');
//         break;
//     case month > 7 && month <= 10:
//             console.log('осень');
//             break;
//     default:
//         console.log('Введите корректное число');
// }
/* Задача 1 */
// let a = 10;
// let b = 4;
// let c = 2
// function sum(a, b, c){
//     return (a - b) / c 
// }
// let result = sum(a, b, c)
// console.log(result)



/* Задача 2 */
// let a = 2;
// function squareCube(a){
//     let square = a**2;
//     let cube = a**3;
//     return {
//         square: square,
//         cube: cube
//     }
// }
// let result = squareCube(a);
// console.log(`Квадрат числа : ${result.square}; Куб числа: ${result.cube}`)



/* Задача 3 */
// const a = 13;
// const b = 9;
// function minMax(a, b){
//     if(a > b){
//         return {
//             max: a,
//             min: b
//         }
//     } else if(a < b){
//         return {
//             max: b,
//             min: a
//         }
//     } else {
//         return {
//             max: error,
//             min: error
//         }
//     }
// }
// const result = minMax(a, b);
// console.log(`Минимальное число: ${result.min}`);
// console.log(`Максимальное число: ${result.max}`)



/* Задача 4 *
// const arr = [];

// for(;;){
//     let numbers = +prompt('Введите число');
//     if( numbers === false || numbers == ' '){
//         break
//     } else {
//         arr.push(numbers);
//     }
// }
// console.log(arr)




/* Задача 5 */
// const a = 12;
// function isEven(a){
//     if(a % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEven(a))




/* Задача 6 */
// const arr = [2, 5, 7, 1, 3, 4, 8]
// const newArr = []
// function isEven(arr, newArr){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// isEven(arr, newArr)
// console.log(newArr)



/* Задача 9 */
// const arr = [];
// function newArr(arr){
//     arr.push(0)
//     arr.push(1)
//     for(let i = 2; i <= 1000; i++){
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     return arr
// }
// console.log(newArr(arr))

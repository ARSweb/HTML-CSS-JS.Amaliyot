// function evenorodd(number)
// {
//     if (number % 2 === 0){
//       console.log(number +' is even')
//     }else{
//       console.log(number +' is odd')  
//     }
// }
// evenorodd(4)

// const ewen = function(numberl){
//     if (numberl % 2 === 0){
//         console.log(numberl +' is even')
//     }else{
//         console.log(numberl +' is odd')  
//     }
// }
// ewen(5)

// const odd = numberd =>{
//     if (numberd % 2 === 0){
//         console.log(numberd +' is even')
//     }else{
//         console.log(numberd +' is odd')  
//     }
// }
// odd(5)

// function small( number1, number2){
//     if(number1 >= number2){
//         return number1;
//     }
//     return number2;
// }
// console.log(small(34,6))


// function rotate(number){
//     const ns = String(number);
//     const nds = ns.split('').reverse('').join('');
//     return Number(nds);
// }
// console.log(rotate(15434355))




// amalyot
// let i = 0;
// const numbers = [ 3 ,7, 4, 9 ,8, 1, 0, 6, 10];
// const numbersf= numbers.sort();
// while(numbersf[i]===numbersf[0]){
//     i++;
//     numbersf[0]++
//     continue;
// }
// console.log(numbersf[0])



// function topdanOshishdanTushganSonlar(arr) {
//     // To'plamni tartiblash
//     arr.sort((a, b) => a - b);

//     // Tushgan sonlarni aniqlash
//     let tushganSonlar = [];
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr.indexOf(i) === -1) {
//             tushganSonlar.push(i);
//         }
//     }

//     // Natijani chiqarish
//     console.log("Tushib qolgan sonlar: ", tushganSonlar);
// }

// // Test qilish
// let testArray = [-3 ,-7, -4, -9 ,-8, -1, 0, -6, -10 ];
// topdanOshishdanTushganSonlar(testArray);  // Natija: Tushib qolgan sonlar:  [4, 6]

// const element = document.getElementById('salomh1').innerText = "hayr";
// element.textContent = "hayr";

const change = () => {
    const heading = document.getElementById('heading');
    heading.textContent = 'hayr';
}

const btn = document.getElementById('hayr');
btn.onclick = change;
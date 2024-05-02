// 1-misol
// function getInitialOdds(n) {
//   let oddNumbers = [];
//   let k = 1;

//   for (let i = 1; i <= n; i++) {
//     if (i == 1) {
//       oddNumbers.push(i);
//     } else {
//       oddNumbers.push((k += 2));
//     }
//   }

//   return oddNumbers;
// }
// const result = getInitialOdds(5);
// console.log(result);

// 2-misol
// function getEvenReverse(arr) {
//   let juftlar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juftlar.push(arr[i]);
//     }
//   }
//   return juftlar;
// }
// let berilganArr = [4, 5, 7, 8, 6, 9];
// let hosilbolganArr = getEvenReverse(berilganArr);
// console.log(hosilbolganArr);

// 4-misol
// function rangeSum(arr, k, l) {
// let arr = [1, 6, 9, 5, 8, 10, 20];
// let k = 3;
// let l = 5;

//   let sum = 0;
// let result = rangeSum(arr, k, l);
//   for (let i = k; i <= l; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(result);

// 7-misol
// function arrayRight(arr) {
//   if (arr.length <= 1) return arr;
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// }

// const son = [1, 5, 8, 9, 10];
// const son2 = arrayRight(son);
// console.log(son2);

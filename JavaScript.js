// const inventory = [
//   ["Laptops", 10],
//   ["Keyboards", 25],
//   ["Mice", 30],
//   ["Monitors", 12],
// ];
// let products = [];
// inventory.forEach((product) => {
//   product.forEach((item) => {
//     products.push(item);
//     // console.log(item);
//   });
// });
// products.forEach((item) => {
//   if (typeof item === "string") {
//     console.log("key", item);
//   } else console.log("value:", item);
// });
// // console.log(products);

// const text = "abcabcbb";

// let arry;
// arry = text.split("");
// let unique = [...new Set(arry)];
// console.log("unique:", unique);
// console.log(unique.reverse().length);

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Eve", role: "admin" },
// ];
// // → { admin: ["Alice", "Eve"], user: ["Bob"] }
// let group = {};
// users.forEach((user) => {
//   for (let key in user) {
//     // console.log(key, group[key]);
//     // console.log(!group[key]);
//     if (!group[key]) {
//       group[key] = [];
//     }
//     group[key].push(user[key]);
//   }
// });

// // console.log(group);
// const students = [
//   { name: "A", marks: [10, 90, 100] },
//   { name: "B", marks: [70, 60, 80] },
// ];
// let std = {};
// let marks;
// students.forEach((student) => {
//   for (let key in student) {
//     // console.log(key);
//     if (!std[key]) {
//       std[key] = [];
//       marks = student[key];

//       // console.log("mark:", marks);
//       std[key].push(student[key]);
//       std[key].push(marks);
//       // console.log(std);
//     }
//   }
// });
// console.log(std);
// const marksdata = [23, 2, 10, 11, 34];
// console.log(marksdata);
// let small = [marksdata[0]];
// let larg = [marksdata[0]];

// for (let i = 0; i < marksdata.length; i++) {
//   if (marksdata[i] < small) {
//     small = marksdata[i];
//   }
//   if (marksdata[i] > larg) {
//     larg = marksdata[i];
//   }
// }
// console.log("max:", larg);
// console.log("smallest:", small);

// let smallest = [...marksdata].sort((a, b) => a - b);

// console.log("smal", smallest[0]);
// const array = [2, 4, 3, 5, 7, 8, 9];
// const target = 10;
// let pair = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === target) {
//       pair.push([array[i], array[j]]);
//     }
//   }
//   // console.log("no pair");
// }

// console.log(pair);

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let newarray = [];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (!newarray[j]) {
//       newarray[j] = [];
//     }
//     newarray[j][array.length - 1 - i] = array[i][j];
//   }
// }
// console.log(newarray);
//

// let arry = [[1, [2, [3, [4]]]]];
// let isNested = true;
// console.log(arry.some(Array.isArray));
// // while (isNested) {
// //   let temp = [];
// //   isNested = false;

// //   arry.forEach((item) => {
// //     if (Array.isArray(item)) {
// //       item.forEach((inner) => temp.push(inner));
// //       isNested = true;
// //     } else {
// //       temp.push(item);
// //     }
// //   });

// //   arry = temp;
// // }
// while (arry.some(Array.isArray)) {
//   let temarry = [];
//   for (let i = 0; i < arry.length; i++) {
//     if (Array.isArray(arry[i])) {
//       console.log("true");
//       for (let j = 0; j < arry[i].length; j++) {
//         temarry.push(arry[i][j]);
//       }
//     } else {
//       temarry.push(arry[i]);
//     }
//   }
//   arry = temarry;
// }
// console.log(arry);

const array = [
  1,
  [2, [2, [2, [2, [23, 34]]]], 3],
  [4, 5, [6, [7, [8], 9, [10, 22], [223]]]],
  "string data",
];
let arry = [];

// console.log(array);
// console.log("strat", array.flat(Infinity)); //moderen and easy way

let newarry = [...array];

while (newarry.some(Array.isArray)) {
  newarry = [].concat(...newarry);
}
// console.log(newarry);

// array.forEach((value) => {
//   if (Array.isArray(value)) {
//     while (Array.isArray(value)) {
//       value.forEach((val) => {
//         if (Array.isArray(val)) {
//           for (let i = 0; i < val.length; i++) {
//             if (Array.isArray(val[i])) {
//               if (Array.isArray(val[i])) {
//                 val[i].forEach((value) => {
//                   if (Array.isArray(value)) {
//                     value.forEach((data) => {
//                       if (Array.isArray(data)) {
//                         // console.log(data);
//                         data.forEach((val) => {
//                           newarry.push(val);
//                         });
//                       } else {
//                         newarry.push(data);
//                       }
//                     });
//                   } else {
//                     newarry.push(value);
//                   }
//                 });
//               } else {
//                 newarry.push(val[i]);
//               }
//             } else {
//               newarry.push(val[i]);
//             }
//           }
//         } else {
//           newarry.push(val);
//         }
//       });
//     }

//     // console.log("arry");
//   } else if (typeof value === "string") {
//     newarry.push(value);
//   } else {
//     // console.log("numbr");
//     newarry.push(value);
//   }
// });
// console.log(newarry);

// array.forEach((value) => {
//   if (Array.isArray(value)) {
//     value.forEach((val) => {
//       if (Array.isArray(val)) {
//         for (let i = 0; i < val.length; i++) {
//           if (Array.isArray(val[i])) {
//             if (Array.isArray(val[i])) {
//               // console.log("Arry check:", val[i]);
//               val[i].forEach((value) => {
//                 if (Array.isArray(value)) {
//                   value.forEach((data) => {
//                     if (Array.isArray(data)) {
//                       // console.log(data);
//                       data.forEach((val) => {
//                         newarry.push(val);
//                       });
//                     } else {
//                       newarry.push(data);
//                     }
//                   });
//                 } else {
//                   newarry.push(value);
//                 }
//               });
//             } else {
//               newarry.push(val[i]);
//             }
//           } else {
//             newarry.push(val[i]);
//           }
//         }
//       } else {
//         newarry.push(val);
//       }
//     });
//     // console.log("arry");
//   } else if (typeof value === "string") {
//     newarry.push(value);
//   } else {
//     // console.log("numbr");
//     newarry.push(value);
//   }
// });
// console.log(newarry);

// function stratarry(arry) {
//   let newarry = [];
//   for (let data of arry) {
//     if (Array.isArray(data)) {
//       newarry.push(...stratarry(data));
//     } else {
//       newarry.push(data);
//     }
//   }
//   return newarry;
// }

// console.log(stratarry(array));

const deepary = [
  1,
  [2, 3],
  [4, 5, [6, [7, [8], 9, [10, 22], [223]]]],
  "string data",
];

// function findNoandStrindArry(arr) {
//   let count = 0;
//   for (let val of arr) {
//     // console.log(val);
//     if (Array.isArray(val)) {
//       count += findNoandStrindArry(val);
//     } else if (typeof val === "number") {
//       // console.log(val);
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findNoandStrindArry(deepary));

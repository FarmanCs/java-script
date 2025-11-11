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

const arry = [[1, [2, [3, [4]]]]];
let newarry = [];
arry.forEach((arry) => {
  arry.forEach((ary) => {
    newarry.push(ary);
  });
  newarry.push(arry);
});

console.log(newarry);

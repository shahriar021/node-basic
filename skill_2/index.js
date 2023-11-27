const fs = require("fs");

// fs.writeFile("demo.txt", "this is interesting", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfull...");
//   }
// });

// fs.appendFile("demo.txt", " i love mern", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("appended successfully....");
//   }
// });

// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo.txt", "demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succfully renamed");
//   }
// });

// fs.unlink("demo3.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succfully deleted");
//   }
// });

fs.exists("demo2.txt",

//syncronize er shomoy call back ba nicer tuk thakbe na


(result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found");
  }
});

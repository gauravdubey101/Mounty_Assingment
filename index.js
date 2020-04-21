const fs = requires("fs");
const text = fs.readFileSync("del.tex","utf-8");
console.log("The content of the file is ");
console.log(text);


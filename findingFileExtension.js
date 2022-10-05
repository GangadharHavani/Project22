let filename = prompt("Enter the Filename: ");
let i = filename.indexOf(".");
let fileextension = filename.slice(i+1);
console.log("------------- File Extension --------------");
console.log("The file extension of the file name you have entered is: ",fileextension);
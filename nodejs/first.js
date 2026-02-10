console.log("Hello Shubham jadav");

const fs = require('fs');
fs.writeFile("output.txt","Shubham jadav",(err)=>{
    if(err) console.log("Error msg.");
    else console.log("File Writtedn Successfully");
})

import fs from "fs";
fs.writeFile("Sample.txt","Hello node.js\n",(err)=>{
    if(err)throw err;
    console.log("write successful");
    fs.appendFile("sample.txt","welcome to fs module",(err)=>{
        if(err)throw err;
        console.log("Append successfull");
        fs.readFile("sample.txt","utf8",(err,data)=>{
            if(err)throw err;
            console.log("File content:/\n"+data); 
        });
    });
});
/*const prompt=require('prompt-sync')();
n=prompt("enter the number of line");
n=parseInt(n);
console.log(".....................Start of pattern........................")
for(let i=1;i<=n;i++){
    for(let k=1;k<=n;k++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    for(let k=1;k<=(n-i)*2;k++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}
console.log(".................End of pattern..................")

*/




const prompt=require('prompt-sync')();
n=prompt("enter the number of line");
n=parseInt(n);
console.log(".....................Start of pattern........................")
for(let i=1;i<=n;i++){
    for(let k=1;k<=n;k++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=(n-i)*1;j++){
        process.stdout.write("*");
    }
    for(let k=1;k<=n;k++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=(n-1)*1;j++){
        process.stdout.write("*");
    }
    console.log();
}
console.log(".................End of pattern..................")





//x="Hello";
//y=x.charAt(2);[]
//console.log(y);
//console.log(x.charCodeAt(0));
/*x="Anil Kumar Singh";
console.log(x.endWith('Kumar',10))
String.prototype.String()*/
/*x=1
for(let i=1;i<=20;i++){
    i=i+1
    console.log(x**1,i)
    x++
}*/


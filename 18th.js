/*function fun1(){
    console.group("i an fun1");
}
fun1();
m=fun1;
m();*/


function sumOfAnyArgumrnts(){
    sum=0;
    if(arguments.length==0){
        return 0;
    }
    else {
        i=0;
        while(i<arguments.length){
            sum+=arguments[i];
            i+=1;
        }
        return sum;
    }
}
x=sumOfAnyArgumrnts();
y=sumOfAnyArgumrnts(1,3);
z=sumOfAnyArgumrnts(1,3,5,7,9);
a=sumOfAnyArgumrnts(1,2,3,4);
console.log(x,y,z,a)


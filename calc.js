/*alert("Connect Now....")*/
function sumClick(){
    //alert("sum Connect Now....")//
    var txtNo1=document.getElementById('txtNo1');
    var no1=parseInt( txtNo1.value);
    var txtNo2=document.getElementById('txtNo2');
    var no2=parseInt( txtNo2.value);
    var txtResult=document.getElementById('txtResult');
    txtResult.value=no1+no2;
    /*//alert(no1);
   // alert(n02);//*/
   txtResult.style.backgroundColor="red";

}
function subClick(){
    //alert(" sub Connect Now....")
}
function multiplyClick(){
    //alert("multiply Connect Now....")
}
function divideClick(){
    //alert("divide Connect Now....")
}


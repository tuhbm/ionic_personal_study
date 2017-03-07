// 1. 함수 매개변수와 리턴값
function test1(value:number){
    console.log("value="+value);
}

test1(10);


function test2(value1:number,value2:number):number{
    return value1+value2;
}

var result:string=test2(10,"20");

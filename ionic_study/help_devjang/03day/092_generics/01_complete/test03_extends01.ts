/*
extends  X
매개변수 값에 X에 해당하는 프로퍼티 또는 정보가 존재해야 합니다.
 */
interface User {
    name:string;
    age:number;
}

function test1<T extends User>(info:T):void{
    console.log(info.name);
    console.log(info.age);
}

let user1 = {
    name:"user1",
    age:10
}

test1(user1);

let user2 = {
    name:"user2",
    age1:30
}
test1(user2);



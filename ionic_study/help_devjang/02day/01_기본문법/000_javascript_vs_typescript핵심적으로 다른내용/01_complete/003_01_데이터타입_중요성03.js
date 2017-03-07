// 1. 함수 매개변수와 리턴값
class MyClass1 {
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }
}

class MyClass2 {
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }
}

var my1 = new MyClass1();
console.log(my1);

my1 = new MyClass2();
console.log(my1);
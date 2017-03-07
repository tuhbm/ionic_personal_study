// 1. 함수 매개변수와 리턴값
class MyClass11 {
    name:string;
    constructor(name:string){
        this.name=name;
    }

    getName():string{
        return this.name;
    }
}
class MyClass22 {
    name:string;
    constructor(name:string){
        this.name=name;
    }

    getName2():string{
        return this.name;
    } 
}
var my11:MyClass11 = new MyClass11("ddandongne");
my11.getName();

my11 = new MyClass22("ddandongne33");
my11.getName2();

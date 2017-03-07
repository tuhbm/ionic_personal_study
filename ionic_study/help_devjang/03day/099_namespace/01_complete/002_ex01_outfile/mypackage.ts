namespace  myPackage {
    let count:number=0;
    export class MyClass1{
        constructor(){
            count++;
        }

        public method1():void{
            console.log("MyClass1 method1");
        }

        static getCount():number{
            return count;
        }
    }

    class MyClass2{
        public method1():void{
            console.log("MyClass2 method1");
        }
    }
}
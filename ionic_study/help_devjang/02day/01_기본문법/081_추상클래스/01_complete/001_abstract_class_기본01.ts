/*
프로그래밍 동네에서는 
선언 부분과 구현부분으로 나눠져 있음

선언 부분 = interface, abstract class
구현 부분 = class, abstract class

*/
/* interface는 약속 

interface를 연결한 클래스는 반드시 해당 인터페이스의 메서드를 구현하고 있어함.
*/
abstract class AImageSlider {
    nextImage():void{
        // 다음 이미지 출력
    }
    prevImage():void{
        // 이전 이미지 출력
    }
    showImageAt(index:number):void{

    }
    // 추상 메서드
    abstract effect():void;
}

class NormalImageSlider extends AImageSlider{
    constructor(){
        super();
    }
    // 다음 메서드를 구현해야 합니다.
   
    effect():void {
        console.log("effect");
    }
   
} 

class ResponsiveImageSlider extends AImageSlider{
    constructor(){
        super();
    }
    // 다음 메서드를 구현해야 합니다.
    /*
    effect():void {
        console.log("effect");
    }
    */
} 

let slider1 : AImageSlider = new NormalImageSlider();
let slider2 : AImageSlider = new ResponsiveImageSlider();

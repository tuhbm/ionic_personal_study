/*
프로그래밍 동네에서는 
선언 부분과 구현부분으로 나눠져 있음

선언 부분 = interface, abstract class
구현 부분 = class, abstract class

*/
/* interface는 약속 

interface를 연결한 클래스는 반드시 해당 인터페이스의 메서드를 구현하고 있어함.
*/
interface effectAble {
    effect():void
}

class ImageSlider implements effectAble{
    constructor(){

    }
    // 다음 메서드를 구현해야 합니다.
   
    effect():void {
        console.log("effect");
    }
    
} 

let a:ImageSlider = new ImageSlider();
a.effect();
 
let b:effectAble = new ImageSlider();
b.effect();
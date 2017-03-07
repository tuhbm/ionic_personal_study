/*
프로그래밍 동네에서는
선언 부분과 구현부분으로 나눠져 있음

선언 부분 = interface, abstract class
구현 부분 = class, abstract class

*/
/* interface는 약속

interface를 연결한 클래스는 반드시 해당 인터페이스의 메서드를 구현하고 있어함.
*/
class AImageSlider {
    nextImage() {
        // 다음 이미지 출력
    }
    prevImage() {
        // 이전 이미지 출력
    }
    showImageAt(index) {
    }
}
class NormalImageSlider extends AImageSlider {
    constructor() {
        super();
    }
    // 다음 메서드를 구현해야 합니다.
    effect() {
        console.log("effect");
    }
}
class ResponsiveImageSlider extends AImageSlider {
    constructor() {
        super();
    }
}
let slider1 = new NormalImageSlider();
let slider2 = new ResponsiveImageSlider();
//# sourceMappingURL=001_abstract_class_기본01.js.map
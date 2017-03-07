class MyClass {
    // 생성자
    constructor(data) {
        // 프로퍼티
        this.userName = data;
    }
    // 메서드
    start() {
        setTimeout(() => {
            alert("start()" + this.userName);
        }, 1000);
    }
}
let my1 = new MyClass("ddandongne");
//# sourceMappingURL=002_class_arrow_func02.js.map
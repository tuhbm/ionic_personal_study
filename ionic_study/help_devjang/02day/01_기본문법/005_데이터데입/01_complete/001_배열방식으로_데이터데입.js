'use strict';
/*
es6
var [a,b,c] = [10,20,30];
console.log("1. es6", a,b,c);
*/
var [a1, b1, c1] = [10, 20, 30];
console.log("1. ", a1, b1, c1);
// 데이터 값을 건너 뛸수도 있음.
/*
var [a,,b]=[10,20,30];
console.log("5. es6", a,b);
*/
let [a2, b2] = [10, "ddandongne"];
console.log("2. ", a2, b2);
function test1([a3, b3]) {
    console.log("3. ", a3, b3);
}
test1(["ddandongne", 1000]);
//# sourceMappingURL=001_배열방식으로_데이터데입.js.map
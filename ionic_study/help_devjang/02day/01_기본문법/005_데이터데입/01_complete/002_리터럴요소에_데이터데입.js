/*
// es6
var a=10, b =20, c=30;
var obj = {a,b,c};
console.log("2.", obj);
*/
let { a: string, b: number } = { a: "ddandongne", b: 10 };
function test1(info) {
    console.log(info.name, info.age);
}
test1({ age: 10, name: "ddandongne" });
//# sourceMappingURL=002_리터럴요소에_데이터데입.js.map
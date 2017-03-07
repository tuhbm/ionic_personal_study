'ㅕㄴㄷ';
//Boolean
let isLogin = true;
//Number
let age = 10;
//String
let userName = "ddandongne";
//Array
let effectList1 = ["normal", "slide", "fade"];
let effectList2 = ["normal", "slide", "fade"];
//Tuple
let info1 = ["ddanddongne", 10];
let info2 = [10, "ddandongne"]; // 에러
console.log(info1[0]);
info1[0] = 10; // 에러
info1[2] = 30; // 동적으로 데이터 접근 가능 
//Enum (열거형)
var EffectType1;
(function (EffectType1) {
    EffectType1[EffectType1["Normal"] = 0] = "Normal";
    EffectType1[EffectType1["Slide"] = 1] = "Slide";
    EffectType1[EffectType1["Fade"] = 2] = "Fade";
})(EffectType1 || (EffectType1 = {}));
;
EffectType1.Normal;
var EffectType2;
(function (EffectType2) {
    EffectType2[EffectType2["Normal"] = 3] = "Normal";
    EffectType2[EffectType2["Slide"] = 4] = "Slide";
    EffectType2[EffectType2["Fade"] = 5] = "Fade";
})(EffectType2 || (EffectType2 = {}));
EffectType2.Slide; // 4
// Any
let data1 = 10;
data1 = "ddandongne";
// 데이터 타입을 넣지 않는 경우 자동으로 데이터 타입 설정
let data2 = 10; // 자동으로 숫자로 설정
data2 = "ddandongne"; // 에러
let data3; //  any와 동일
data3 = 30;
data3 = "ddandongne";
// 숫자 또는 문자열만 저장 가능
let data4 = 10;
data4 = "ddandongne";
data4 = 10;
data4 = false;
//# sourceMappingURL=001_type.js.map
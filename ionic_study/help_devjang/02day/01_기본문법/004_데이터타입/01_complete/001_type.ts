'ㅕㄴㄷ'
//Boolean
let isLogin:boolean= true;

//Number
let age:number=10;

//String
let userName:string="ddandongne";

//Array
let effectList1:string[]=["normal", "slide", "fade"];
let effectList2:Array<string>=["normal", "slide", "fade"];

//Tuple
let info1:[string, number] = ["ddanddongne", 10];
let info2:[string, number] = [10,"ddandongne"]; // 에러
console.log(info1[0]);
info1[0] = 10; // 에러
info1[2] = 30 // 동적으로 데이터 접근 가능 

//Enum (열거형)
enum EffectType1 {
    Normal, Slide, Fade 
};
EffectType1.Normal;
enum EffectType2 {
    Normal=3, Slide, Fade 
}
EffectType2.Slide; // 4


// Any
let data1:any = 10;
data1="ddandongne";

// 데이터 타입을 넣지 않는 경우 자동으로 데이터 타입 설정
let data2 = 10; // 자동으로 숫자로 설정
data2 = "ddandongne"; // 에러

let data3; //  any와 동일
data3=30;
data3="ddandongne";



// 숫자 또는 문자열만 저장 가능
let data4:string | number =10;
data4="ddandongne";
data4=10;
data4=false;

/*
extends  X
매개변수 값에 X에 해당하는 프로퍼티 또는 정보가 존재해야 합니다.

아래와 같이 T에 U 정보를 복사하는 경우
T에는 U정보를 반드시 가지고 있어야 합니다
 */

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
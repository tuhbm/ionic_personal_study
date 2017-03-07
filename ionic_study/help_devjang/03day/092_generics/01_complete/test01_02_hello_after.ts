function test1<T>(arg1:T):T {
    return arg1;
}

console.log("test1 = ", test1(10));
console.log("test1 = ", test1("sample"));
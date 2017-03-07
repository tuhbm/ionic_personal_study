function test1<T,U>(arg1:T, arg2:U):T {
    let va1:any = arg2;

    return arg1+va1;
}

console.log("test1 = ", test1(10,20));

"use strict";
var count = 0;
function test1() {
    count++;
    return "count =" + count;
}
exports.test1 = test1;

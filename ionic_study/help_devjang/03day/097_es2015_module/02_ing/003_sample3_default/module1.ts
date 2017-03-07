export ?? function() {
    return "test1"
}

function test2() {
    return "test2"
}

function test3() {
    return "test3"
}

export {test2 as newtest2, test3};

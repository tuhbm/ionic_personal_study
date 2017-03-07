function test1(info) {
    console.log(info.name);
    console.log(info.age);
}
var user1 = {
    name: "user1",
    age: 10
};
test1(user1);
var user2 = {
    name: "user2",
    age1: 30
};
test1(user2);

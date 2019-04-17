// var reg = /abcd/i;
// var test = "abcd";
// console.log(reg.test(test));
// var str = "abcd\naefg";
// var reg = /^a/gm;

// console.log(str.match(reg))
// var reg = /jk$/g;
// var str = "abcdefghrjklm";
// console.log(str.match(reg)
// 检验一个字符串首位是否含有数字
// var reg = /^\d[\s\S]*\d$/g;
// var str = "123adc123";
// console.log(str.match(reg))
// var reg = /(\w)\1/g;
// var str = "gfdysgfyegfyegfyegaacducudbcdddchducdugg";
// console.log(str.split(reg));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// console.log(reg.lastIndex)
// console.log(reg.exec(str));
// var reg=/(\w)\1(\w)\a/g;
// var str = "aabb";
// console.log(str.replace(reg,"$2$2$1$1"));
// var reg = /-(\w)/g;
// var str = "the-first-name";
// console.log(str.replace(reg,function($,$1){
//     return $1.toUpperCase();
// }))
// var reg =/a(?=b)/g;
// var str = "abaaaa";
// console.log(str.match(reg));
// var str = "aaaaaaaaaabbbbbbbbbbccccccc";
// var reg = /(\w)\1*/g;
// console.log(str.replace(reg,"$1"));
var str="100000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
console.log(str.replace(reg,"."));
var reg = /^1[34578]\d{9}$/;
var reg = /\d{10}@\w{3}\.com/;
function ansy1(){
    var p = new Promise(function(resolve,reject){
        resolve("数据1");
    })
    return p;
}
function ansy2(){
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("数据2")
        },2000)
    })
    return p;
}
function ansy3(){
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("数据3")
        },1000)
    })
    return p;
}
ansy1().then(function(data){
    console.log(data);
    return ansy2();
}).then(function(data){
    console.log(data);
    return ansy3();
}).then(function(data){
    console.log(data);
})
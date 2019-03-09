
2
3
4
5
6
7
8
9
10
11
12
13
14
15/*this: 글로벌 this (아래 두가지 x)
          부모 json 객체에서
          자기자신 (생성자)*/
16
17
function Animal(type, legs) {
  this.type = type; // 자기자신 (생성자)
  this.legs = legs;
  this.logInfo = function() { // json 에서 this는 부모
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);

// 리터럴 객체로 Animal 객체를 적으시오.
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000); // global this (function 가 따로 떨어져 나온다.)

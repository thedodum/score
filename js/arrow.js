
2
3
4
5
6
7
8
9
10
let circleArea = (pi, r) => pi * r * r;

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

//커링 function?
// a => b=> a+b
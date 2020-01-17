
function * gen(){
    let a = yield 1;
    console.log('a',a);
    let b = yield 2;
    console.log('b',b);
    let c = yield 3;
    console.log('c',c);
}

let id = gen();
let result=id.next();
console.log(result);
let result2=id.next(8);
console.log(result2);
let result3=id.next(9);
console.log(result3);
let result4=id.next(7);
console.log(result4);
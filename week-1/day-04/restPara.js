function rest(x,y,...z){
    console.log(`Length of z is ${z.length}`);
    return x*y*z.length
}

let res = rest(3, 2, "rest parameter", false, 1);

console.log(res);
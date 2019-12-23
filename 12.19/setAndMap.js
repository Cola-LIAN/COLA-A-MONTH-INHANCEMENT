let s = new Set();
s.add("mawsitsit").add("Cola").add("Earvin").add("Ben");
console.log(`size of s:  ${s.size}`);
console.log(s)
console.log(`Whether s has Cola:  ${s.has("Cola")}`);
console.log(s.entries());

let s2 = new Set([6,4,3,2,7]);
console.log(s2);
console.log('==================');

let m = new Map();
m.set(0, "red").set(1, "yellow");
// console.log(m);
// console.log(m.keys());
// console.log(m.values());

console.log(m.entries());
for([key, value] of m.entries()){
    key++;
    console.log(key)
    console.log(value);
}
console.log(m.entries());

// console.log([...m]);
// console.log(Array.from(m));


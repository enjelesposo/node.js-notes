// console.log(global);

setTimeout(() => {
    console.log('3 seconds has passed')
    clearInterval(int);
}, 3000)

const int = setInterval(() => {
    console.log('a second has passed')
}, 1000)

console.log(__dirname);
console.log(__filename);
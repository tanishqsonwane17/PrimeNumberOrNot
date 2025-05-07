let prompt = require('prompt-sync')()
let n = Number(prompt('Enter your number'))
function checkPrime(n){
let arr = new Array(n).fill(true)
for(let i = 2; i<Math.floor(Math.sqrt(n)); i++){
    if(arr[i]==true) {
        for(let j = i*i; j<n; j+=i){
            arr[j] = false
        }
    }
}
for(let i = 2; i<arr.length;i++){
    if(arr[i])process.stdout.write(i+ ' ')
}
}
checkPrime(n)
import { suma } from '../src/suma.js'

let result
console.log('Test 1.- Must return null if any params is not a number')
result = suma('2', 2)
if (result === null) {
    console.log('✔️ Test passed!')
} else {
    console.log(`❌ Test failed! The result is ${result}`)
}

console.log('Test 2.- Must return null if any params is not a number')
result = suma(2, '2')
if (result === null) {
    console.log('✔️ Test passed!')
} else {
    console.log(`❌ Test failed! The result is ${result}`)
}

console.log('Test 3.- Must return 0 if there is not params')
result = suma()
if (result === 0) {
    console.log('✔️ Test passed!')
} else {
    console.log(`❌ Test failed! The result is ${result}`)
}

console.log('Test 4.- The sum must be correct')
result = suma(3, 4)
if (result === 7) {
    console.log('✔️ Test passed!')
} else {
    console.log(`❌ Test failed! The result is ${result}`)
}

console.log('Test 5.- The sum must be correct with many params')
result = suma(3, 4, 1, 7, 5)
if (result === 20) {
    console.log('✔️ Test passed!')
} else {
    console.log(`❌ Test failed! The result is ${result}`)
}
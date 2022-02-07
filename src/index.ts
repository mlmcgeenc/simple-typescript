import multiply, {multiplyByTwo as mBy2} from './multiply'

const a = 8
const b = 2
const c = 3

console.log(`${a} * ${b} = ${multiply(a, b)}`)
console.log(`${c} * two = ${mBy2(c)}`)
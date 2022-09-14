const numbers = [1, 2, 3, 4, 5]
let nomor1 = (numbers) => {
return numbers.map((item)=> item % 2 === 0 ? (item * 2) : (item * 3))
}
console.log(nomor1(numbers))
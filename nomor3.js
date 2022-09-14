const numbers = ["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"] 
let nomor3 = (strs) => {
    let finalResult = []
  let result = {};
for (let word of strs) {
    let cleansed = word.split("").sort().join("");
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }
    Object.values(result).forEach((item)=>{
        finalResult.push(item)
    })
return finalResult;
}
console.log(nomor3(numbers))
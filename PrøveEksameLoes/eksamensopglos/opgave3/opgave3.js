//Lav en JSON tekststreng, der indeholder et array af objekter,
// hvor hvert objekt beskriver en person med navn(string), nuværende vaegtNu(number)
// og vægten for et år siden vaegtFoer(number).


const arrayS = '[{"navn":"ib","vagt":40,"vagtfor":50},{"navn":"anders","vagt":60,"vagtfor":50},{"navn":"niels","vagt":100,"vagtfor":120},{"navn":"irma","vagt":70,"vagtfor":60}]'


const array = JSON.parse(arrayS)


//1Lav et array med personernes navne.
console.log(array.map(a => a.navn))

//2. Lav et array med navnene på de personer, der har tabt sig.
console.log(array.filter(a => a.vagt < a.vagtfor).map(a => a.navn))
//3. Find den største vægt.
console.log(array.map(a => a.vagt).reduce((p, c) => c > p ? c : p))
console.log(array.map(a => a.vagt > a.vagtfor ? a.vagt : a.vagtfor).reduce((p, c) => c > p ? c : p))

//4. Find det gennemsnitlige vægttab for de personer, der har tabt sig.
const loss = array.filter(a => a.vagt < a.vagtfor)
console.log(loss.length === 0 ? 0 : loss.map(a => a.vagtfor - a.vagt).reduce((p, c) => c + p) / loss.length)

console.log(array)
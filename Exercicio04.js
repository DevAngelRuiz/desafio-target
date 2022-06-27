// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let SP = 67836.43
let RJ = 36678.66
let MG = 29299.88
let ES = 27165.48
let outros = 19849.53 

let total = SP + RJ + MG + ES + outros
console.log(total)

let percentual = (SP * 100) / total
console.log(`A representatividade é de ${percentual}%`)



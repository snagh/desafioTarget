const faturamento = {
    dias: [1000, 2000, 0, 3000, 4000, 5000, 0, 6000, 0, 7000]
};

// Filtra os dias com faturamento maior que 0
const diasComFaturamento = faturamento.dias.filter(dia => dia > 0);

// Calcular a média mensal
const media = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;

// Calcular o menor e maior valor de faturamento
const menor = Math.min(...diasComFaturamento);
const maior = Math.max(...diasComFaturamento);

// Contar os dias acima da média
const diasAcimaMedia = diasComFaturamento.filter(dia => dia > media).length;

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);
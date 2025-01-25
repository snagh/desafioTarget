function inverterString(s) {
    let invertida = '';
    for (let i = 0; i < s.length; i++) {
        invertida = s[i] + invertida;  // Adiciona cada caractere à frente da string invertida
    }
    return invertida;
}

// Teste
console.log(inverterString("exemplo"));  // Vai imprimir "olpmexe"
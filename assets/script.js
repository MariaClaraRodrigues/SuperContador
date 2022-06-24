function contar() {
    
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passos = document.getElementById('passo');
    let res = document.getElementById('res');

    if (inicio.value.length === 0 || fim.value.length === 0 || passos.value.length === 0) {
        // alert('Verifique os dados e tente novamente!');
        res.innerHTML = 'Impossivel contar!';
    } else {

        res.innerHTML = 'Contando: ';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0 || i <= 0 || f <= 0) {
            alert('Dados inválidos!');
        } else if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            };
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            };
        };
        res.innerHTML += `\u{1F3C1}`;
    };
}
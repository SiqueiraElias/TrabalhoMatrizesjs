function novaMatriz(linha, coluna) {
    var matriz = [];
    for (var x = 0; x < linha; x++) {
        matriz.push([]);
    }

    for (var x = 0; x < linha; x++) {
        for (var y = 0; y < coluna; y++) {
            matriz[x][y] = Math.ceil((Math.random() * 10) - (Math.random() * 10));
        }
    }
    return matriz;
}

function print(matriz, titulo) {
    document.write("<table border=1>");
    document.write("<tr><th colspan =" + matriz[0].length + ">" + titulo + "</th></tr>");
    for (var x = 0; x < matriz.length; x++) {
        document.write("<tr>");
        for (var y = 0; y < matriz[x].length; y++) {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

/*function possivel(matriz1, matriz2) {   //Função para checagem de possibilidade de multiplicação entre matrizes
    var possivel = true;                  //Não utilizada
    if (matriz1[0].length != matriz2.length) {
        possivel = false;
    }
    return possivel;
}*/

function soma(matriz1, matriz2) {
    var resultante = novaMatriz(matriz1.length, matriz1[0].length);
    for (var x = 0; x < matriz1.length; x++) {
        for (var y = 0; y < matriz1[0].length; y++) {
            resultante[x][y] = matriz1[x][y] + matriz2[x][y];
        }
    }
    return resultante;
}
//
function transposta(matriz1) {
    var transposta = novaMatriz(matriz1[0].length, matriz1.length);
    for (var x = 0; x < matriz1.length; x++) {
        for (var y = 0; y < matriz1[0].length; y++) {
            transposta[y][x] = matriz1[x][y];
        }
    }
    return transposta;
}

//
var linhas, colunas;
linhas = parseInt(prompt("Digite a quantidade de Linhas: "));
colunas = parseInt(prompt("Digite a quantidade de Colunas: "));

var matriz = [];
for (var x = 0; x < linhas; x++) {
    matriz.push([]);
}
for (var x = 0; x < linhas; x++) {
    for (var y = 0; y < colunas; y++) {
        matriz[x][y] = parseInt(prompt("Linha " + x + " Coluna: " + y));
    }
}
var caso = parseInt(prompt("O que você quer fazer? 1. Soma -- 2. Transposta"));
switch (caso) {
    case 1:
        var matrizA = novaMatriz(linhas, colunas);
        print(matriz, "Matriz 1");
        print(matrizA, "Matriz Aleatória");
        print(soma(matriz, matrizA), "Resultante");
        break;

    case 2:
        print(matriz, "Matriz 1");;
        print(transposta(matriz), "Matriz Transposta");
        break;
}

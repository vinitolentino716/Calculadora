alert(`Bem-vindo a calculadora do aluno, para calcular a média das suas notas clique no "Ok" para poder calcular`)
let mediaHtml = Number(prompt("Digite aqui a sua nota de html"));
let mediaCss = Number(prompt("Digite aqui a sua nota de Css"));
let mediaJavaScript = Number(prompt("Digite aqui a sua nota de JavaScript"));
let adição = (mediaHtml + mediaCss + mediaJavaScript);
let somas = mediaHtml + mediaCss + mediaJavaScript;
let media = Number(somas / 3)
alert (`A sua média é: ${media}`);

let data = new Date();
let hora = data.getHours();
let boasVindas = document.getElementById("teste");
let mensagens = ['Bom dia, seja bem-vindo(a)!', 'Boa tarde, seja bem-vindo(a)!', 'Boa noite, seja bem-vindo(a)!'];

if (hora > 6 && hora < 12) {
    boasVindas.innerHTML = "<h1>" + mensagens[0] + "<h1>";
} else if (hora > 12 && hora < 18) {
    boasVindas.innerHTML = "<h1>" + mensagens[1] + "<h1>";
} else {
    boasVindas.innerHTML = "<h1>" + mensagens[2] + "<h1>";
}
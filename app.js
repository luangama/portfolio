let data = new Date();
let hora = data.getHours();
let boasVindas = document.getElementById("teste");
let mensagens = ['Bom dia,', 'Bom tarde,', 'Boa noite,'];

if (hora > 6 && hora < 12) {
    boasVindas.innerHTML = "<h1>" + mensagens[0] + "<h1>" + "<h1>" + '&nbsp;seja bem-vindo(a)!' + "<h1>";
} else if (hora > 12 && hora < 18) {
    boasVindas.innerHTML = "<h1>" + mensagens[1] + "<h1>" + "<h1>" + '&nbsp;seja bem-vindo(a)!' + "<h1>";
} else {
    boasVindas.innerHTML = "<h1>" + mensagens[2] + "<h1>" + "<h1>" + '&nbsp;seja bem-vindo(a)!' + "<h1>";
}
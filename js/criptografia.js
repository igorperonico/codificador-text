
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function (event) {
	event.preventDefault();

	var inserirTexto = document.querySelector("#input-texto");
	
	var texto = inserirTexto.value;

	var erros = validaTexto(texto);
	
	if (erros.length > 0) {
		exibeMensagemDeErro(erros);
		return;
	}
	var textoCriptografado = codificador(texto);

	var mensagemCriptografada = document.querySelector("#msg");
	mensagemCriptografada.value = textoCriptografado;

	inserirTexto.value = "";

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
	
});

function validaTexto(texto) {
	var erros = [];
	/*var acentos = new RegExp("áàãâäéèêëíìîïóòõôöúùûüÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜ");*/
	if (/[A-Z]/.test(texto)) {
		erros.push("O texto não pode conter letras maiúsculas");
	}
	if (texto.length == 0) {
		erros.push("O texto não pode ficar em branco");
	}
	if (/[0-9]/.test(texto)) {
			erros.push("O texto não pode conter números");
	}
	if (/[áàãâäéèêëíìîïóòõôöúùûüÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜ]/.test(texto)) {
			erros.push("O texto não pode conter acentos");
	}
	return erros;	
}

function exibeMensagemDeErro(erros) {
		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML ="";

		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}
function codificador(texto) {
	
	texto = texto.split("");
	var textoCriptografado = "";

	for (var i = 0; i < texto.length; i++) {
		if(texto[i] == "e"){
			textoCriptografado += "enter";
		}else if (texto[i] == "i") {
			textoCriptografado += "imes";
		}else if (texto[i] == "a") {
			textoCriptografado += "ai";
		}else if (texto[i] == "o") {
			textoCriptografado += "ober";
		}else if (texto[i] == "u") {
			textoCriptografado += "ufat";
		}else {
			textoCriptografado += texto[i];
		}	
	}
	return textoCriptografado;	
}
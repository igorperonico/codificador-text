/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function (event) {
	event.preventDefault();
	
	var inserirTexto = document.querySelector("#input-texto");
	var texto = inserirTexto.value;

	var erros = validaTexto(texto);
	
	console.log(erros);

	if (erros.length > 0) {
		exibeMensagemDeErro(erros);
		return;
	}
	var textoDescriptografado = decodificador(texto);

	var mensagemDescriptografada = document.querySelector("#msg");
	mensagemDescriptografada.value = textoDescriptografado;

	inserirTexto.value = "";

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";	
});

function decodificador(texto) {
	
	var textoDescriptografado;
	
	textoDescriptografado = texto.replace(/enter/g, "e");
	textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
	textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
	textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
	textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");
	

	return textoDescriptografado;	
}

var botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.addEventListener('click', function(){
  navigator.clipboard.writeText(document.querySelector("#msg").value)
  
});
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/	
	//La siguiente funcion verifica que la tecla presionada sea una letra de la a hasta la z (minuscula), sea ñ o sea un espacio, de lo contrario rechazara la entrada
 	function validar_texto_al_escrbir(event) {            
        var regex = new RegExp("^[a-zñ ]+$");           
        var key = String.fromCharCode(event.charCode == event.which ? event.which : event.charCode);          
        if (!regex.test(key)) {                
            event.preventDefault();
            return false;
        }            
    }
    /*La siguiente funcion verifica una cadena de texto al momento de pegarla en el campo, esta verifica cada caracter uno por uno, si encuentra un caracter que no
    sea una letra de la a hasta la z (minuscula), sea ñ o sea un espacio entonces va a lanzar una advertencia y va a rechazar la entra "OJO" tambien va a limpiar el campo completo
    aunque este tenga valores validos*/ 
    function validar_texto_al_pegar(){
    	var texto_pegado = document.getElementById("txt_entrada").value
    	var regex = new RegExp("^[a-zñ ]+$"); 
    	for (let i = 0; i < texto_pegado.length; i++) {
		    if (!regex.test(texto_pegado.charAt(i))) {
            alert("Debes pegar un texto que solo contenga letras minúsculas, sin acento");
            document.getElementById("txt_entrada").value = ""
            break;
        	}
		}                   
	}
	//la siguiente funcion reemplaza los caracteres ingresados de acuerdo a una regla predefinida para cifrar el texto
	function cifrar(texto){
		texto = texto.replace(/e/gi, "enter");
		texto = texto.replace(/i/gi, "imes");
		texto = texto.replace(/a/gi, "ai");
		texto = texto.replace(/o/gi, "ober");
		texto = texto.replace(/u/gi, "ufat");
		return texto
	}
	//la siguiente funcion reemplaza los caracteres ingresados de acuerdo a una regla predefinida para descifrar el texto 
	function descifrar(texto){
		texto = texto.replace(/enter/gi, "e");
		texto = texto.replace(/imes/gi, "i");
		texto = texto.replace(/ai/gi, "a");
		texto = texto.replace(/ober/gi, "o");
		texto = texto.replace(/ufat/gi, "u");
		return texto
	}
	//El boton llama a la funcion cifrar entregandole los valores del campo de entrada y retornado el resultado en el campo de salida
	btn_cifrar.onclick = function(){
		document.getElementById("txt_salida").value = cifrar(document.getElementById("txt_entrada").value);
	}
	//El boton llama a la funcion descifrar entregandole los valores del campo de entrada y retornado el resultado en el campo de salida
	btn_descifrar.onclick = function(){
		document.getElementById("txt_salida").value = descifrar(document.getElementById("txt_entrada").value);
	}
	//El boton enfoca el campo de salida y todo el texto y copia el contenido del campo al portapapeles
	btn_copiartexto.onclick = function(){
		document.getElementById("txt_salida").select();
		document.execCommand('copy');
	}
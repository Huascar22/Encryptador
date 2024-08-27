
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}


function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputTextArea = document.getElementById('outputText');
    const text = outputTextArea.value;

    if (text.trim() === '') {
        alert('No hay texto que copiar en el text area');
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    }
});

document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputTextArea = document.getElementById('inputText');
    const text = inputTextArea.value;

    const hasUpperCase = /[A-Z]/.test(text);
    const hasAccent = /[áéíóúüÁÉÍÓÚÀÈÌÒÙàèìòùÂÊÎÔÛâêîôûÃÕãõÄËÏÖÜäëïöüÑñ]/.test(text);

    if (hasUpperCase || hasAccent) {
        alert('No se aceptan palabras con mayúsculas o acentos');
    } else if (text.trim() === '') {
        alert('No hay texto que encriptar en el textarea');
    } else {
        
        const outputImageContainer = document.getElementById('outputImageContainer');
        const outputTextArea = document.getElementById('outputText');
        const copyBtn = document.getElementById('copyBtn');

        outputImageContainer.style.display = 'none';
        outputTextArea.style.display = 'block';
        copyBtn.style.display = 'block';

     
        const encryptedText = encryptText(text);
        outputTextArea.value = encryptedText;
    }
});

function processText(action) {
    const inputText = document.getElementById('input-text').value;
    let outputText = '';

    if (action === 'encrypt') {
        outputText = encrypt(inputText);
    } else {
        outputText = decrypt(inputText);
    }

    document.getElementById('output-text').innerText = outputText;
}

//----------------------------------------------------------------
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

//----------------------------------------------------------------
function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

//----------------------------------------------------------------
function copyText() {
    const outputText = document.getElementById('output-text').innerText;
    const textArea = document.createElement('textarea');
    textArea.value = outputText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado al portapapeles');
}

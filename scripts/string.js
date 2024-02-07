function reverseString(string) {
    let reverse = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

export function showString() {
    let string = document.getElementById('inputString');

    document.getElementById('btnString').addEventListener('click', (e) => {
        e.preventDefault()

        const newString = reverseString(string.value);
     
        document.querySelector('.yourWord').innerHTML = `A palavra enviada: ${string.value}`;
        document.querySelector('.newWord').innerHTML = `A palavra invertida: ${newString}`;
    })
  
}


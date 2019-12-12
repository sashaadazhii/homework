let css = [
    { width: '300px', },
    { color: 'red', },
    { 'text-align': 'justify', },
    { 'font-style': 'italic', },
];

function printText(arr, text) {
    let style;
    let totalStyle = '';
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            style = key + ': ' + arr[i][key] + '; ';
            totalStyle += style;
        }
    }
    return document.write('<p style = "' + totalStyle + '">' + text + '</p>');
}
printText(css, 'Happy new year.');

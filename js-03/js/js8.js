var rez = 1;

for (var i = 2; i <= 9; i++) {
    document.write('<br>');

    for (var j = 1; j <= 10; j++) {
        rez = (i * j) + ' ';
        document.write(rez);
    }
}

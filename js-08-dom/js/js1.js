// Создать страницу, которая выводит нумерованный список песен:

var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];


function creatList(arr) {
    let ol = document.createElement('ol');
    document.body.append(ol);

    return arr.reduce(function (rez, item) {
        rez = `${item.author}: ${item.song}; `;
        let li = document.createElement('li');
        li.textContent = rez;
        li = ol.append(li);
        return li;
    }, '');
}
console.log(creatList(playList));
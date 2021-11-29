const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sveikasSkaicius(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (num) => {
            resolve(parseInt(num));
        });
    });
}

async function main() {
    var sk1 = await sveikasSkaicius("Ivesk 1-a skaiciu");
    var sk2 = await sveikasSkaicius("Ivesk 2-a skaiciu");
    var sk3 = await sveikasSkaicius("Ivesk 3-a skaiciu");
    console.log(sk1 + sk2 + sk3);

    if (sk1 + sk2 < sk3 || sk1 + sk3 < sk2 || sk3 + sk2 < sk1) {
        console.log('ne trikampis');
    }
    else {
        var prm = sk1+sk2+sk3;
        var plt = Math.sqrt(prm*(prm-sk1)*(prm-sk2)*(prm-sk3));
        console.log('Trikampio perimetras=', prm);
        console.log('Trikampio plotas=', plt);
    }

    // ivesti 3 trikampio krastines
    // patikrinti ar sustidaro trikampis
    // jei nesusidaro - atspausdinti "ne trikampis" ir viskas
    // jei susidaro:
    // atspausdinti trikampio perimetra
    // atspausdinti trikampio plota (Herono formule)
    // https://lt.wikibooks.org/wiki/Herono_formul%C4%97
    rl.close();
}

main();

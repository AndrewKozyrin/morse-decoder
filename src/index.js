const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let word = '';
    let letter = '';
    let morse = '';
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        word = expr.slice(i, i + 10);
        for (let j = 0; j < word.length; j += 2) {
            letter = word.slice(j, j + 2);
            switch (letter){
                case '00':
                    break;
                case '10':
                    morse = morse + '.';
                    break;
                case '11':
                    morse = morse + '-';
                    break;
                case '**':
                    morse = morse + '';
                    break;
            }
        }
        if (morse.length !== 0){
            result = result + MORSE_TABLE[morse];
        }else{
            result = result + ' ';
        }
        morse = '';
    }
    return result;
}

module.exports = {
    decode
}
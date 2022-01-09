module.exports = function toReadable (number) {
    let out = ''; // инициируем строку вывода числа
    const numBase = {  // иницируем массив строчных чисел
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (Math.trunc(number / 100) >= 1) {         //вычисляем количство сотен. Если 1 или больше добавляем соотвествующий элемент массива в строку вывода числа 
    out = `${out}${numBase[Math.trunc(number / 100)]} hundred`;
    };

    if ((number % 100) > 20 && (number % 100) < 100) {    // в сотнях выбираем диапазон от 21 до 99
    out = `${out} ${numBase[Math.trunc((number % 100)/10) * 10]}`   // определяем количество десятков и добавляем в строку соответсвующий элемент массива
      if (number % 10 > 0) {
        out = `${out} ${numBase[number % 10]}` // определяем количество единиц и добавляем в строку соответсвующий элемент массива
      }  
    };

    if (number % 100 <= 20 && number % 100 > 0) {   // в сотнях выбираем диапазон от 1 до 20
      out = `${out} ${numBase[number % 100]}` // добавляем в строку соответсвующий значению элемент массива 
    };

    if (number === 0) { // чтобы не добавлять ноль к сотням не перегружая код для ноля проверяется собственное условие, 
      out = `${numBase[0]}`
    };

    out = out.trim(); // обрезаем пробелы в начале строки

    return out // возвращаем полученную строку
}
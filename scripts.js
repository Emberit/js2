let name = prompt("Ваше имя?", "Сергей");

let age = prompt("Сколько вам лет?", "29");

let city = prompt("Из какого вы города?", "Минск");

let phone = prompt("Ваш номер телефона", "+375 00 000 00 00");

let email = prompt("Ваш email", "0000000@gmail.com");

let company = prompt("Компания, где вы работайте", "Моя айтишкола");

document.write('Меня зовут ' + name + '. ' + 'Мне ' + age + ' лет. ' + 'Я проживаю в городе ' + city + ', ' + 'и работаю в компании ' + company + '. ');

document.write('Мои контактные данные: ');
document.write('телефон: ' + phone + ' и ');
document.write('email: ' +  email + '. ');

let god_teper = 2020
let god = god_teper - age;

document.write(name + ' родился в ' +  god + ' году.');

/* Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */
console.log ('Задание №3');

let a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 2,
    f = 1,
    sumc1 = a + b + c,
    sumc2 = d + e + f;

if (sumc1 == sumc2) {
        console.log('Да');
} else {
        console.log('Неправильно');
}
    
/* Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. */

console.log ('Задание №4');

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.
 */

a = 10;
b = 2;

console.log ('Задание №5');
console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);

if (a + b > 1) {
    console.log((a + b)*(a + b));
} else {
    console.log('Сумма чисел меньше единицы');
}

/* Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
    5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
    'Неверно'. */

console.log('Задание №6');

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую). */

console.log('Задание №7');

let n = 20;

if (n > 0 && n < 15) {
    console.log('Первая четверть часа');
} else if (n > 15 && n < 30) {
    console.log('Вторая четверть часа');
} else if (n > 15 && n < 30) {
    console.log('Третья четверть часа');
} else {
    console.log('Четвертая четверть часа');
}

switch (n) {
    case n > 0 && n < 15:
        console.log('Первая четверть часа');
    break;
    case n > 15 && n < 30:    
        console.log('Вторая четверть часа');
    break;
    case n > 30 && n < 45:
        console.log('Третья четверть часа');
    break;
    case n > 45 && n < 60:
        console.log('Четвертая четверть часа');
    break;
}

/* В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).
 */

console.log('Задание №8');

let day = 20;

if (day > 0 && day < 10) {
    console.log('Первая декада');
} else if (day >= 10 && day < 20) {
    console.log('Вторая декада');
} else if (day >= 20 && day <= 30) {
    console.log('Третья декада');
} else {
    console.log('Неверное значение дня');
}

/* Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.
 */

console.log('Задание №9');

let m, 
    year,
    week,
    hour,
    sec;
 
day = 2100;

if (day == 365) {
    console.log('1 год');
} else if (day < 365) {
    console.log('Меньше года');
} else if (day >= 366 && day < 730) {
    console.log('2 года');
} else if (day >= 731 && day <= 1095) {
    console.log('3 года');
} else if (day >= 1096 && day <= 1460) {
    console.log('4 года');
} else if (day >= 1461 && day <= 1825) {
    console.log('5 лет');  
} else {
    console.log('Слишком много лет :)');
}


if (day == 31) {
    console.log('1 месяц');
} else if (day < 32) {
    console.log('Меньше месяца');
} else if (day >= 32 && day < 62) {
    console.log('2 месяца');
} else if (day >= 63 && day <= 93) {
    console.log('3 месяца');
} else if (day >= 94 && day <= 124) {
    console.log('4 месяца');
} else if (day >= 125 && day <= 155) {
    console.log('5 месяцев');
} else if (day >= 156 && day <= 186) {
    console.log('6 месяцев'); 
} else if (day >= 187 && day <= 217) {
    console.log('7 месяцев');
} else if (day >= 218 && day <= 248) {
    console.log('8 месяцев');
} else if (day >= 249 && day <= 279) {
    console.log('9 месяцев');
} else if (day >= 280 && day <= 310) {
    console.log('10 месяцев');  
} else if (day >= 311 && day <= 341) {
    console.log('11 месяцев');
} else if (day >= 342 && day <= 365) {
    console.log('12 месяцев');       
} else {
    console.log('Слишком много месяцев :)');
}


if (day == 7) {
    console.log('1 неделя');
} else if (day < 7) {
    console.log('меньше недели');   
} else if (day >= 8 && day <= 14) {
    console.log('2 недели');
} else if (day >= 15 && day <= 21) {
    console.log('3 недели');
} else if (day >= 22 && day <= 28) {
    console.log('4 недели');
} else if (day >= 29 && day <= 35) {
    console.log('5 недель');
} else if (day >= 36 && day <= 42) {
    console.log('6 недель'); 
} else if (day >= 43 && day <= 49) {
    console.log('7 недель');
} else if (day >= 50 && day <= 56) {
    console.log('8 недель');
} else if (day >= 57 && day <= 63) {
    console.log('9 недель');
} else if (day >= 64 && day <= 70) {
    console.log('10 недель');  
} else if (day >= 71 && day <= 77) {
    console.log('11 недель');
} else if (day >= 78 && day <= 84) {
    console.log('12 недель');       
} else {
    console.log('Слишком много недель :)');
}

hour = day * 24;

if (hour >= 1) {
    console.log(hour + ' час(ов)');
} else {
    console.log('Меньше часа');
}

sec = day * 86400;

if (sec >= 1) {
    console.log(sec + ' секунд');
} else {
    console.log('Меньше секунды');
}



/* Напишите скрипт, который по введенному дню (исп. значение переменной из 8
    задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
    т.д.). Скрипт определение поры года написать через switch.
*/
console.log('Задание №10');

day = 230;

if (day <= 31) {
    m = 1;
    console.log('первый месяц');
} else if (day >= 32 && day < 62) {
    m = 2;
    console.log('второй месяц');
} else if (day >= 63 && day <= 93) {
    m = 3;
    console.log('третий месяц');
} else if (day >= 94 && day <= 124) {
    m = 4;
    console.log('четвертый месяц');
} else if (day >= 125 && day <= 155) {
    m = 5;
    console.log('пятый месяц');
} else if (day >= 156 && day <= 186) {
    m = 6;
    console.log('шестой месяц'); 
} else if (day >= 187 && day <= 217) {
    m = 7;
    console.log('седьмой месяц');
} else if (day >= 218 && day <= 248) {
    m = 8;
    console.log('восьмой месяц');
} else if (day >= 249 && day <= 279) {
    m = 9;
    console.log('девятый месяц');
} else if (day >= 280 && day <= 310) {
    m = 10;
    console.log('десятый месяц');  
} else if (day >= 311 && day <= 341) {
    m = 11;
    console.log('одинадцатый месяц');
} else if (day >= 342 && day <= 365) {
    m = 12;
    console.log('двенадцатый месяц');       
} else {
    m = 0;
    console.log('Слишком много месяцев :)');
}

switch (m) {
    case 1:
    case 2:
    case 12:      
        console.log('Зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;  
    default:
        console.log('Неверное значение');
}
console.group('task 1');
console.log('Напишіть програму, яка перевіряє, чи є користувач повнолітнім, і виводить відповідне повідомлення.');
const userYearOld = prompt('Введіть ваш вік.');
const userResult = (userYearOld < 18) ? 'Ви ще неповнолітня людина.' : 'Ви вже повнолітня людина.';
alert(userResult);
console.groupEnd();
console.group('task 2');
console.log('Напишіть програму, яка визначає категорію віку користувача (дитина (0-12 не включно), підліток(12-18), дорослий(18-65), літня людина(65 і старше)) на основі введеного віку.');
const userAge = prompt('Введіть скільки вам років, щоб визначити категорію віку.');
if (userAge >= 0 && userAge < 12) {
    alert('Ваша категорія віку - дитина.');
} else if (userAge >= 12 && userAge < 18) {
    alert('Ваша категорія віку - підліток.');
} else if (userAge >= 18 && userAge < 65) {
    alert('Ваша категорія віку - доросла людина.');
} else {
    alert('Ваша категорія віку - літня людина.');
}
console.groupEnd();
console.group('task 3');
console.log('Напишіть програму, яка вітає користувача по-різному в залежності від часу доби (ранок(5-11), день(11-18), вечір(18-22), ніч(22-24,0-5)).');
const userTime = prompt('Введіть час доби.\n'
    + '1) Ранок(5-11)\n'
    + '2) День(11-18)\n'
    + '3) Вечір(18-22)\n'
    + '4) Ніч(22-24, 0-5)'
);
switch (userTime) {
    case '1':
    case 'Ранок':
    case '5-11':
        alert('Доброго ранку!');
        break;
    case '2':
    case 'День':
    case '11-18':
        alert('Доброго дня!');
        break;
    case '3':
    case 'Вечір':
    case '18-22':
        alert('Доброго вечора!');
        break;
    case '4':
    case 'Ніч':
    case '22-24, 0-5':
    case '22-24':
    case '0-5':
        alert('Доброї ночі!');
        break;
    default:
        alert('Ви ввели щось не так.');
        break;
}
console.groupEnd();
console.group('task 4');
console.log('Напишіть програму, яка приймає поточний час (година) і визначає, чи працює банк (припустимо, банк працює з 9 до 17 включно години).');
const workTime = prompt('Введіть час, щоб визначити чи працює банк.');
if (workTime < 9 || workTime > 17) {
    alert('Банк не працює.');
} else {
    alert('Банк працює.');
}
console.groupEnd();
console.group('task 5');
console.log('Напишіть програму, яка приймає від користувача число від 1 до 12 і виводить назву відповідного місяця.');
const userNumber = prompt('Введіть число від 1 до 12.');
switch (userNumber) {
    case '1':
        alert('Січень');
        break;
    case '2':
        alert('Лютий');
        break;
    case '3':
        alert('Березень');
        break;
    case '4':
        alert('Квітень');
        break;
    case '5':
        alert('Травень');
        break;
    case '6':
        alert('Червень');
        break;
    case '7':
        alert('Липень');
        break;
    case '8':
        alert('Серпень');
        break;
    case '9':
        alert('Вересень');
        break;
    case '10':
        alert('Жовтень');
        break;
    case '11':
        alert('Листопад');
        break;
    case '12':
        alert('Грудень');
        break;
    default:
        alert('Треба вводити число від 1 до 12!');
        break;
}
console.groupEnd();
console.group('task 6');
console.log('Напишіть програму, яка приймає від користувача число від 1 до 12 і виводить назву пори року, використовуючи switch');
const numberSeason = prompt('Введіть число від 1 до 12, щоб визначити пору року.');
switch (numberSeason) {
    case '1':
    case '2':
    case '12':
        alert('Зима')
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна')
        break;
    case '6':
    case '7':
    case '8':
        alert('Літо');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осінь');
        break;
    default:
        alert('Ви ввели щось не так!');
        break;
}
console.groupEnd();
console.group('task 7');
console.log('Напишіть програму, яка приймає довжини трьох сторін трикутника і визначає, чи є трикутник рівностороннім, рівнобедреним або різностороннім.');
const side1 = prompt('Введіть першу сторону трикутника.');
const side2 = prompt('Введіть другу сторону трикутника.');
const side3 = prompt('Введіть третю сторону трикутника.');
if (side1 === side2 && side2 === side3 && side1 === side3) {
    alert('Трикутник рівносторонній.');
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    alert('Трикутник різносторонній.');
} else {
    alert('Трикутник рівнобедрений.');
}
console.groupEnd();
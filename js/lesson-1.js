//Завдання 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function randomNumber() {
//     const min = Math.floor(Math.random() * (59 - 0) + 0);
//     const promptNumber = prompt(`Введіть число`)
//     const correctNumber = Number(promptNumber)
// if (correctNumber >=0 && correctNumber < 15) {
//     alert(`${correctNumber} входить у першу четверть`)
// } else if (correctNumber >= 15 && correctNumber < 30){
//     alert(`${correctNumber} входить у другу четверть`)
// } else if (correctNumber >= 30 && correctNumber < 45) {
//     alert(`${correctNumber} входить у третю четверть`)
// } else if (correctNumber >= 45 && correctNumber < 60) {
//     alert(`${correctNumber} входить у четверту четверть`)
// } else {
//     alert(`Ви ввели невірні дані`)
// }
// }
// randomNumber ()

// Завдання 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function randomSeason() {
//     const num = prompt(`Введіть число від 1 до 4`)
//     const userValue = Number(num)
//     switch (userValue) {
//         case 1:
//             alert(`Зима`)
//             break;
//          case 2:
//             alert(`Весна`)
//             break;
//         case 3:
//             alert(`Літо`)
//             break;
//         case 4:
//             alert(`Осінь`)
//             break;

//         default:
//             alert(`Ви ввели невірне значення`)
//     }
// }

// randomSeason ()

// Завдання 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function randomTime() {
//     let hours = Math.floor(totalMinutes / 60);
//     let minutes = totalMinutes % 60;

// }

// Завдання 5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// function checkTitle() {
//   const userValue = prompt(`Ведіть вашу посаду`);
//   if (userValue === 'Адмін') {
//     const userAdmin = prompt(`Введіть пароль`);
//     if (userAdmin === 'Я головний') {
//       alert(`Добрий день`);
//     } else if (userAdmin === null || userAdmin !== 'Я головний') {
//       alert(`Невірний Пароль`);
//     }
//   } else if (!userValue) {
//     alert(`Скасовано`);
//   } else {
//     alert(`Я вас не знаю`);
//   }
// }

// checkTitle();

// Завдання 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getNumbers(5, 20));

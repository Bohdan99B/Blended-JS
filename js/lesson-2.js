// Task 1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = [`jazz`, `blues`];
styles.push(`rock-n-roll`);
styles[1] = `classic`;

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1} - ${element}`);
  }
}

logItems(styles);

// Task 2

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const name = prompt(`Введіть ім'я користувача`);
  if (array.includes(name)) {
    return alert(`Welcome, ${name}`);
  }
  alert(`User not found`);
}

checkLogin(logins);

// Task 3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const element of args) {
    if (typeof element === `number`) {
      sum += element;
      count++;
    }
  }
  return sum / count;
}

console.log(caclculateAverage(10, 20, 30));

// Task 4

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function getSum(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i] + array[i + 1]);
  }
  return newArray;
}

console.log(getSum(someArr));

// Task 6

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  const arr = string.split(' ');
  let word = '';
  for (const element of arr) {
    if (element.length > word.length) {
      word = element;
    }
  }
  return word;
}

console.log(findLongestWord('London is the capital of Great Britain'));

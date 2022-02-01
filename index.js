// Задача 1

// Есть входной массив [0, 1, false, 2, undefined, '', 3, null]
// Решите эту задачу так , чтобы по итогу массив состоял только из числовых значений , пример
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const arr = [0, 1, false, 2, undefined, "", 3, null];

for (let i = 0; i < arr.length; i += 1) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}

// Задача 2

// Входной массив [true , false , true , true , true, false]
// Вывести каких элементов больше true или false

const bool = [true, false, true, true, true, false];
let tr = 0;
let fls = 0;

for (let i = 0; i < bool.length; i += 1) {
  if (bool[i] === true) {
    tr += 1;
  } else fls += 1;
}

tr > fls ? console.log("True:", tr) : console.log("False:", fls);

// if (tr > fls) {
//   console.log(tr);
// } else {
//   console.log(fls);
// }

// Задача 3

// Есть массив чисел [1, 5, 2,11,17,53]. Выведите лишнее число. Подумайте какое число может быть лишним.

const num = [1, 5, 2, 11, 17, 53];
for (i = 0; i < num.length; i += 1) {
  if (num[i] % 2 !== 0) {
    continue;
  }

  console.log(num[i]);
}

// Задача 4

// Создайте массив из любых чисел.
// В итоговом виде вы покажите новый массив с значениями умноженными на 2
// Пример - [2,1,3] ⇒ [4,2,6]

const num = [2, 3, 4, 5];

for (i = 0; i < num.length; i += 1) {
  console.log(num[i] * 2);
}

// Задача 5

// Реализовать калькулятор используя `prompt` и `alert`.
// 1. Последовательно спросить у пользователя два числа и желаемое действие.
// 2. Действия могут быть следующие: `+ - / *`
// 3. Выполнить математическую операцию с полученными значениями.

const num1 = Number(prompt("Введите первое число"));
const operator = prompt("Введите оператор вычесления");
const num2 = Number(prompt("Введите второе число"));
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  case "*":
    result = num1 * num2;
    break;
}

alert(`Результат вычисления: ${num1} ${operator} ${num2} = ${result}`);

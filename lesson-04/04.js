/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/



function doubleEachCharacter(array) {
const newArray = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(element, element)
    
console.log(i, newArray)
    
}
    
    
    return newArray.join('')

}


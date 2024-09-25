/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


function findUniqueElements(array) {
const newArray =[]

for(let i=0; i < array.length; i++){

  if (!includesElement(newArray, array[i])) {
    newArray.push(array[i])
  } 
    includesElement(newArray, array[i]) // нам нужно обратное от значения которое вернет функию


}




return newArray

}
console.log(findUniqueElements([1, 2, 3, 2, 1, 4]), "[1, 2, 3, 4]")



















//     const newArray = []
// for(let i=0; i<array.length; i++){
   
//     const isElementInArray = includesElement(newArray, array[i])
   
//     if(!isElementInArray){
// newArray.push(array[i])

//     }

// }
// return newArray
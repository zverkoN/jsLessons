/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/


function includesElement(array, element) {
    let result = false  
    for(let i = 0; i < array.length; i++){
        
if (array[i] === element) {
    result = true
}
    

    }   
    return result
}

console.log("1111",includesElement([1, 8, 2], 2));





function arrayPlusArray(arr1, arr2) {
  let sumArr = []  
  let sumNambers1 = 0
  let sumNambers2 = 0
  
for(let i=0; i < arr1.length; i++){
  sumNambers1 = arr1[i] + sumNambers1
  return sumNambers1
}
  for(let i=0; i < arr2.length; i++){
  sumNambers2 = arr2[i] + sumNambers2
  return sumNambers2
}
  sumArr = sumNambers1 + sumNambers2
   return sumArr; 
} 
 
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
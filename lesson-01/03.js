/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0
let iteration = 1
while ( iteration < 20) {


  if (iteration%2) {
 

    sum = sum + iteration 
  }

iteration = iteration + 1

  
}

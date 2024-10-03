/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(array) {
  
  let newStr = ''

  for (let i = 0; i < array.length; i++) {
  if(i===0){

newStr = `${array[i].toUpperCase()}`
  }
  
  if(array[i]===' '){

newStr = `${newStr}${array[i]}${array[i+1].toUpperCase()}`
  }

  if(i!==0&&array[i]!==' '&&array[i-1]!==' '){
newStr = `${newStr}${array[i]}`

  }
  }

return newStr
}




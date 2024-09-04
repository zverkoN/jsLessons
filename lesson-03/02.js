// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    if (a%2 === 0) {
        return true
    } else if (Math.abs(a%2) === 1) {
        return false
    }
}




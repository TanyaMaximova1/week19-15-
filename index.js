let task;
let listTasks;
task = document.getElementById('task').value;
listTasks = document.getElementById('listOfTasks__list').value;

//добавляет новую задачу
function creatTasks() {
    var divCheckTasks = document.getElementById('task');

    //Создаёт новый элемент с заданным тегом
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = document.getElementById('task').value;
    document.body.append(div);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox__check";
    checkbox.className = "checkbox__check";
    document.body.append(checkbox);

    task = document.getElementById('task').value = "";
}

//не работает 
if (document.getElementById('task').value == '') {
    document.getElementById("noTasks__id").innerHTML = `Нет задач!`;
} else if (document.getElementById('checkbox__check').value = true) {
    document.getElementById("noTasks__id").innerHTML = ``;
}


//удаляет все задачи
function removeTasks() {
    var divRemove = document.getElementsByClassName("alert");

    for (i = divRemove.length - 1; i >= 0; i--) {
        divRemove[i].remove()
    }

    var checkboxRemove = document.getElementsByClassName("checkbox__check");
    for (i = checkboxRemove.length - 1; i >= 0; i--) {
        checkboxRemove[i].remove();
    }

}


//ЗАДАНИЕ ПОД ***
let num1 = [];
num1 = Number(num1);
num1 = prompt("Введите число: ");
let sum = 0;

//метод выводит цифры, из которых состоит число
function showNumbers() {
    for (let numbers of num1) {
        console.log(numbers);
    }
}
showNumbers();

//Выводит сумму цифр числа
function getSumNumber() {
    let sum = 0;
    for (let numbers of num1) {
        sum += +numbers;
    }
    console.log("Сумма цифр фисла: " + sum);
}
getSumNumber();

//Выводит количество цифр числа
function getLengthNumber() {
    console.log("Количество цифр в числе: " + num1.length);
}
getLengthNumber();

//Выводит цифры в обратном порядке
function showNumbersBackToFront() {
    var rez = num1[num1.length - 1];
    for (var i = num1.length - 2; i >= 0; i--)
        rez += num1[i];
    console.log("Число перезаписано в обратном порядке: " + rez);
}
showNumbersBackToFront();
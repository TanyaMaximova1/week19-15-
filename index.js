// let i = 0;
// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// let i = 0;
// while (++i < 5) alert(i);

// и

// let i = 0;
// while (i++ < 5) alert(i);

////////////////////////////////////////////////////
// let task;
// let listTasks;
// function creatTasks() {
//     task = document.getElementById('task').value;
//     listTasks = document.getElementById('listOfTasks__list').value;
//     for (let i = 0; i < 3; i++) {
//         document.getElementById("listOfTasks__list").innerHTML = `<p>` + task + `</p>`;
//     }
//     creatTasks();
// }
////////////////////////////////////////////////////

// let paragraph = document.getElementById("p");
// function creatTasks() {
//     for (let task = 0; task < 3; task++) {
//         // document.getElementById("listOfTasks__list").innerHTML = `<p>` + task + `</p>`;
//         let text = document.createTextNode(task);
//         paragraph.appendChild(text);
//     }

// }

// let task = document.querySelector('#task');

// function creatTasks()
// task = document.getElementById('task').value; {
//     for (let i = 1; i <= 9; i++) {
//         let p = document.createElement('p');
//         p.innerHTML = i;
//         task.appendChild(p);
//     }
//     creatTasks();
// }

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = i;
//     parent.appendChild(li);
// }

// parg -- ссылка на элемент <p>

// if (parg.hasChildNodes()) {
//     // Таким образом, сначала мы проверяем, не пуст ли объект, есть ли у него дети
//     var children = parg.childNodes;

//     for (var i = 0; i < children.length; ++i) {
//         // сделать что-то с каждым внутренним элементом через children[i]
//         // ПРИМЕЧАНИЕ: Список является ссылкой, Добавление или удаление дочерних элементов изменит список
//     }
// }

// let nodeList = document.body.childNodes;
// let numb = document.getElementById("p").childNodes.length;
// console.log(numb);



// // Check
// document.getElementById("checkbox").checked = true;

// // Uncheck
// document.getElementById("checkbox").checked = false;

// let alertNoTasks = document.getElementById('noTasks__id');
// if ()

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

    // if (document.getElementById('task').value == '') {
    //     removeTasks();
    // }
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
let num1;
num1 = Number(num1);
num1 = prompt("Введите число: ");

function getLength() {
    for (let i = 1; i < num1.length + 1; i++) {
        console.log(i);
    }
}
getLength();

// function getLengthNumber() {
//     for (let i = 0; i < num1.length; i++) {
//         console.log(i.length);
//     }
// }
// getLengthNumber();

function getSumNumber() {
    let sum = 0;
    for (let i = 1; i < num1.length; i++) {
        sum += num1[i];
        console.log(sum);
    }
}
getSumNumber();









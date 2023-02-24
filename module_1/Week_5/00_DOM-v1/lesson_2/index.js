const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];


const taskItem = document.createElement('div')
        taskItem.className = 'task-item'
        taskItem.dataset.taskId = `${tasks.id}`
const taskItemMainContainer = document.createElement('div')
        taskItemMainContainer.className = 'task-item__main-container'
const taskItemMainContent = document.createElement('div')
        taskItemMainContent.className = 'task-item__main-content'
const checkboxForm = document.createElement('form')
        checkboxForm.className = 'checkbox-form'
const checkboxFormCheckbox = document.createElement('input')
        checkboxFormCheckbox.className = 'checkbox-form__checkbox'
        checkboxFormCheckbox.type = 'checkbox'
        checkboxFormCheckbox.id = `${tasks.id}` // из массива
const lab = document.createElement('lable')
        lab.htmlFor = `${tasks.id}`  // из массива for="task-1"
const taskItemText = document.createElement('span')
        taskItemText.className = 'task-item__text'
        taskItemText.textContent = `${tasks.text}`// из массива
const tdd = document.createElement('button')
        tdd.className = 'task-item__delete-button default-button delete-button'
        tdd.dataset.deleteTaskId = '5'
        tdd.textContent = 'Удалить'

taskItem.append(taskItemMainContainer)
taskItemMainContainer.append(taskItemMainContent, tdd)
taskItemMainContent.append(checkboxForm, taskItemText)
checkboxForm.append(checkboxFormCheckbox)
checkboxFormCheckbox.append(lab)

console.log(taskItemText)
console.log(lab)
console.log(taskItem)
console.log(checkboxFormCheckbox)

const body = document.querySelector('body')
body.insertAdjacentElement('afterbegin', taskItem)
// TODO: Не особо работает, все данные из массива undefined + lable не определяет атрибут for
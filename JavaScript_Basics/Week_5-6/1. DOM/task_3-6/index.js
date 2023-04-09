const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript'
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока'
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока'
    }
];
let deleteTaskId = null
function createTaskHTML(task) {
    return `
    <div class='task-item' data-task-id='${task.id}'>
      <div class='task-item__main-container'>
          <div class='task-item__main-content'>
              <form class='checkbox-form'>
                  <input class='checkbox-form__checkbox' type='checkbox' id='${task.id}'>
                  <label for='${task.id}'></label>
              </form>
              <span class='task-item__text'>
                  ${task.text}
              </span>
          </div>
          <button class='task-item__delete-button default-button delete-button' data-delete-task-id='${task.id}'>
              Удалить
          </button>
      </div>
    </div>
    `
}
function createModalWindow(){
    return `
            <div class='delete-modal'>
                <h3 class='delete-modal__question'>
                Вы действительно хотите удалить эту задачу?
                </h3>
                <div class='delete-modal__buttons'>
                    <button class='delete-modal__button delete-modal__cancel-button'>
                    Отмена
                    </button>
                    <button class='delete-modal__button delete-modal__confirm-button'>
                    Удалить
                    </button>
                </div>
            </div>
        `
}
function renderTasks(tasks) {
    const div = document.querySelector(".tasks-list");
    if (div) {
        div.remove();
    }
    const tasksList = document.createElement("div");
    tasksList.className = "tasks-list";

    document.body.insertAdjacentElement("beforeend", tasksList);

    for (const task of tasks) {
        const $task = createTaskHTML(task);
        tasksList.innerHTML += $task;
    }

    const modal = document.querySelector(".modal-overlay");

    tasksList.addEventListener("click", (eve) => {
        let deleteId = eve.target.closest("button");
        deleteTaskId = deleteId.dataset.deleteTaskId;

        if (deleteId) {
            modal.classList.toggle("modal-overlay_hidden");
        }
    });

    const cancelButton = document.querySelector(".delete-modal__cancel-button");
    cancelButton.addEventListener("click", () => {
        modal.classList.toggle("modal-overlay_hidden");
    });

    const delButton = document.querySelector('.delete-modal__confirm-button');
    delButton.addEventListener('click', () => {
            if (delButton) {
                const taskItem = document.querySelector(`.task-item[data-task-id="${deleteTaskId}"]`)
                let index = tasks.findIndex(e => e.id === deleteTaskId);
                tasks.splice(index, 1)
                taskItem.remove()
                modal.classList.toggle("modal-overlay_hidden");
            }
        })
}
function renderModal(){
    const modal = document.createElement('div')
    modal.className = 'modal-overlay modal-overlay_hidden'

    document.body.insertAdjacentElement('beforeend', modal);

    const create = createModalWindow();
    modal.innerHTML += create;
}

function validate(task) {
    const validateError = {idVal: true, textError: ''}

    const taskItemText = task.text

    const error_1 = taskItemText === '' // не должно быть пустым
    const error_2 = tasks.some((task) => task.text === taskItemText.trim() )// уже существует.
    const error_3 = taskItemText !== taskItemText.trim()

    if(error_1){
        validateError.idVal = false
        validateError.textError = 'Название задачи не должно быть пустым'
        return validateError
    }
    if(error_2){
        validateError.idVal = false
        validateError.textError = 'Задача с таким названием уже существует'
        return validateError
    }
    if(error_3){
        validateError.idVal = false
        validateError.textError = 'Начните текст без отступа'
        return validateError
    }
    return validateError
}
function createNewTask() {
    const form = document.createElement('form');
    form.className = 'create-task-block';
    const inputText = document.createElement('input');
    inputText.className = 'create-task-block__input';
    inputText.name = 'text';
    inputText.type = 'text';
    inputText.placeholder = 'Введите текст';
    const inputBtn = document.createElement('input');
    inputBtn.type = 'submit';
    inputBtn.className = 'create-task-block__button default-button'
    inputBtn.value = 'Создать';

    form.append(inputText, inputBtn);

    document.body.insertAdjacentElement('afterbegin', form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const textAdd = event.target.elements.text.value;
        const newPush = ({ id: Date.now(), completed: false, text: textAdd });
        const {idVal, textError} = validate(newPush)

        if(idVal){
            tasks.push(newPush)
            renderTasks(tasks)
            clearError()
            inputText.value = ''
        }else {
            clearError(textError)
        }
        renderTasks(tasks);
    });
}
function clearError(textError) {
    clear()
    const form = document.querySelector('form')
    const error = document.createElement('span');
    error.className = 'error-message-block';
    error.textContent = textError

    form.append(error)
}
function clear(){
    const error = document.querySelector('.error-message-block')
    if(error){
        error.remove()
    }
}
function getTheme(){
    document.addEventListener('keydown', (eve) => {

        if(eve.code === 'Tab'){
            eve.preventDefault();

            const bodyColor = document.querySelector('body')
            const taskItem = document.querySelectorAll('.task-item')
            const allButton = document.querySelectorAll('.default-button')

            const white = {
                background: 'initial',
                border: 'none',
                color: 'initial'
            }
            const dark = {
                background: '#24292E',
                border: '1px solid #ffffff',
                color: '#ffffff'
            }
            if(bodyColor.style.backgroundColor === 'rgb(36, 41, 46)'){
                bodyColor.style.backgroundColor = white.background
                taskItem.forEach(element => element.style.color = white.color)
                allButton.forEach(button => button.style.border = white.border)
            }else{
                bodyColor.style.backgroundColor = dark.background
                taskItem.forEach(element => element.style.color = dark.color)
                allButton.forEach(button => button.style.border = dark.border)
            }
        }
    })

}
function init() {
    renderModal()
    renderTasks(tasks)
    createModalWindow()
    createNewTask()
    getTheme()
}
init();
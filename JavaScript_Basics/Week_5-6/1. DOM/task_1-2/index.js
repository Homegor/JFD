// Через innerHTML

const inner = document.body.innerHTML = `<form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>`

console.log(inner)

// Через document.createElement()

const form = document.createElement("form")
        form.className = "create-user-form"
const label1 = document.createElement('label')
        label1.textContent = 'Имя'
const input1 = document.createElement('input')
        input1.type = 'text'
        input1.name = 'userName'
        input1.placeholder = 'Введите ваше имя'
const label2 = document.createElement('label')
        label2.textContent = 'Пароль'
const input2 = document.createElement('input')
        input2.type = 'password'
        input2.name = 'password'
        input2.placeholder = 'Придумайте Пароль'
const button = document.createElement('button')
        button.type = 'submit'
        button.textContent = 'Подтвердить'

form.append(label1, input1, label2, input2, button)
label1.append(input1)
label2.append(input2)

const body = document.querySelector('body')
body.insertAdjacentElement('beforeend', form)

console.log(body)

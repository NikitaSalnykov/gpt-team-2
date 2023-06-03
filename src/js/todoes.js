//TODO:====================02====================================TODOS============================================================================================
/**
  |============================
  | Список справ todos:
  | 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
  | 2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ. 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Пропиши три функції, які тобі допоможуть це реалізувати 
  | - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
  | про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
  | запускати функцію рендера сторінкі.
  | - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою 
  | "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми 
  | повинні відрендорити сторінку за допомогою функції "updateList".
  | - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не 
  | забувай чистити розмітку перед її вставкою.
  |============================
*/
import localstorageAPI from "./localstorageapi";
import { updateList } from "./updatelist";
import {formToDoEl, listEl} from "./refs"

const LOCAL_KEY = 'todos-items'

formToDoEl.addEventListener('submit', onClickSubmit)
listEl.addEventListener('click', onBtnDeleteClick)

let items = localstorageAPI.load(LOCAL_KEY) || [] 

function onClickSubmit(event) {
  event.preventDefault();

  const input = event.currentTarget.elements['user-todos']
  const todos = input.value.trim()
  
  if (!todos) {
    return alert('заповніть поле')
  }

  if (todos !== '') {
    const dublicate = items.find(el => el.text === todos)
    if (dublicate) {
      return alert('Dublicate!')
    }
  }

  const item = {
    id: Date.now(),
    text: todos,
  }

  items.push(item)

    input.value = ''
    
    localstorageAPI.save(LOCAL_KEY, items)

  updateList(items)

}

function onBtnDeleteClick(event) {
  
  if (event.target.nodeName !== 'BUTTON') {
  return
  }

  const todosId = Number(event.target.dataset.id)
  
    items = items.filter(el => el.id !== todosId)
    localstorageAPI.save(LOCAL_KEY, items)
  updateList(items)

}

updateList(items)
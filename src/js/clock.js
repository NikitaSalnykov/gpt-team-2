//TODO:====================clock==========================
/**
 * Напиши скрипт який при кліку на кнопку "Відобразити годинник", відобразить і запустить годинник. Використовуй Клас "is-hidden" для приховування або
 * відображення елементів, цей клас прописаний у стилях. Перед початком ознайомся з html розміткою і подумай як тобі почати логіку. Для початку зроби так,
 * щоб при кліці на кнопку у тебе відобразився інтерфейс годинника , а кнопка змінилась на " Приховати годинник". Далі створи функцію для запуску годиника startClock().
 * Для реалізація цього функціоналу тобі дається додаткові функції, для обчисленя годин, хвилин і секунд, які ти можешь отримати з мілісекунд за допомогою цієї фун-ії.
 * Фун-ція "addPad", буде добавляти 0, якщо годинник буде мати одне значення. Фун-ція "declensionNum", допоможе створити динамічне вираховування годин, хвилин і секунд.
 * Далі тобі знадобиться Фун-ія stopClock(), яка буде зупиняти годиник, коли користувач натисне кнопку "Приховати годинник". Тобі потрібно буде приховати і зупинити   * годинник. Тому що, коли годин приховається він не повинен далі рахувати час. Виконай це за допомогою clearInterval(). Також виконай збереження
 * відображення годинника після завантаження сторінки. Тобі в цьому допоможе локальне схожище, імпотруй і використай "localstorageAPI", там прописані фун-ії додавання,
 * видалення, та очищення локального сховища. Фун-ії взяті з конспекту. І на останок спробуй свій код зробити модульним.
 */

import { getTimeComponents } from "./getTimeComponents";
import { clockEl, showBtnEl, hideBtnEl, hoursEl, minutesEl, secondsEl } from "./refs";
import { addPad } from "./addPad";
import { declensionNum } from "./declensionNum";
import localstorageAPI from "./localstorageapi"

let intervalId;
const LOCAL_KEY = 'show-clock'

showBtnEl.addEventListener('click', onShowBtnClick);
hideBtnEl.addEventListener('click', onStopBtnClick);

function onShowBtnClick() {
 
  startClock()

  setTimeout(() => {
  clockEl.classList.remove('is-hidden');
  showBtnEl.classList.add('is-hidden');
  hideBtnEl.classList.remove('is-hidden');
  }, 1000);

  localstorageAPI.save(LOCAL_KEY, true);

}

function startClock() {

  intervalId = setInterval(() => {
  const currentTime = Date.now();
  const { hours, minutes, seconds } = getTimeComponents(currentTime);
  
  hoursEl.textContent = addPad(hours)
  minutesEl.textContent = addPad(minutes)
  secondsEl.textContent = addPad(seconds)
    
  hoursEl.dataset.title = declensionNum(hours, ['година', 'години', 'годин'])
  minutesEl.dataset.title = declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин'])
  secondsEl.dataset.title = declensionNum(seconds, ['секунда', 'секунди', 'секунд'])  
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  clockEl.classList.add('is-hidden');
  showBtnEl.classList.remove('is-hidden');
  hideBtnEl.classList.add('is-hidden');

  localstorageAPI.save(LOCAL_KEY, false);
}

if (localstorageAPI.load(LOCAL_KEY)) {
  onShowBtnClick()
} else {
  showBtnEl.classList.remove('is-hidden');
}
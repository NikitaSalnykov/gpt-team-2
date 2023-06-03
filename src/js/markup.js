export function createMarkup(arr) {
    return arr.map((item) => {
        return `
      <li>
      <span class="text${item.done ? ' done' : ''}">${item.text}</span>
      <div>
        <button type="button" data-id="${item.id
            }" class="delete">Видалити</button>
      </div>
      </li>
    `;
    })
        .join('');
}
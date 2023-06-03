import { createMarkup } from "./markup";
import { listEl } from "./refs";

export function updateList(arr) {
    listEl.innerHTML = createMarkup(arr);  
}
function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("2WGb6",(function(e,t){var r=o("5enCm"),n=o("3uJXs"),u=o("krGWQ");const s="todos-items";u.formToDoEl.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements["user-todos"],o=t.value.trim();if(!o)return alert("заповніть поле");if(""!==o){if(c.find((e=>e.text===o)))return alert("Dublicate!")}const u={id:Date.now(),text:o};c.push(u),t.value="",r.default.save(s,c),(0,n.updateList)(c)})),u.listEl.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=Number(e.target.dataset.id);c=c.filter((e=>e.id!==t)),r.default.save(s,c),(0,n.updateList)(c)}));let c=r.default.load(s)||[];(0,n.updateList)(c)})),o.register("5enCm",(function(t,r){e(t.exports,"default",(function(){return n}));var n={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}}})),o.register("3uJXs",(function(t,r){e(t.exports,"updateList",(function(){return s}));var n=o("3huUq"),u=o("krGWQ");function s(e){u.listEl.innerHTML=(0,n.createMarkup)(e)}})),o.register("3huUq",(function(t,r){function n(e){return e.map((e=>`\n      <li>\n      <span class="text${e.done?" done":""}">${e.text}</span>\n      <div>\n        <button type="button" data-id="${e.id}" class="delete">Видалити</button>\n      </div>\n      </li>\n    `)).join("")}e(t.exports,"createMarkup",(function(){return n}))})),o.register("krGWQ",(function(t,r){e(t.exports,"formToDoEl",(function(){return n})),e(t.exports,"listEl",(function(){return o})),e(t.exports,"clockEl",(function(){return u})),e(t.exports,"showBtnEl",(function(){return s})),e(t.exports,"hideBtnEl",(function(){return c})),e(t.exports,"hoursEl",(function(){return i})),e(t.exports,"minutesEl",(function(){return l})),e(t.exports,"secondsEl",(function(){return a}));const n=document.querySelector(".js-todos__form"),o=document.querySelector("ul"),u=document.querySelector(".clock"),s=document.querySelector(".js-show"),c=document.querySelector(".js-hide"),i=document.querySelector(".js-clock__hours"),l=document.querySelector(".js-clock__minutes"),a=document.querySelector(".js-clock__seconds")})),o("2WGb6");
//# sourceMappingURL=todosPage.f2fac96b.js.map

!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fl19L",(function(e,t){var r=o("f1RLC"),n=o("b6O1Q"),u=o("4Nugj"),i="todos-items";u.formToDoEl.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements["user-todos"],o=t.value.trim();if(!o)return alert("заповніть поле");if(""!==o){if(c.find((function(e){return e.text===o})))return alert("Dublicate!")}var u={id:Date.now(),text:o};c.push(u),t.value="",r.default.save(i,c),(0,n.updateList)(c)})),u.listEl.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=Number(e.target.dataset.id);c=c.filter((function(e){return e.id!==t})),r.default.save(i,c),(0,n.updateList)(c)}));var c=r.default.load(i)||[];(0,n.updateList)(c)})),o.register("f1RLC",(function(t,r){e(t.exports,"default",(function(){return n}));var n={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}}})),o.register("b6O1Q",(function(t,r){e(t.exports,"updateList",(function(){return i}));var n=o("1KhuP"),u=o("4Nugj");function i(e){u.listEl.innerHTML=(0,n.createMarkup)(e)}})),o.register("1KhuP",(function(t,r){function n(e){return e.map((function(e){return'\n      <li>\n      <span class="text'.concat(e.done?" done":"",'">').concat(e.text,'</span>\n      <div>\n        <button type="button" data-id="').concat(e.id,'" class="delete">Видалити</button>\n      </div>\n      </li>\n    ')})).join("")}e(t.exports,"createMarkup",(function(){return n}))})),o.register("4Nugj",(function(t,r){e(t.exports,"formToDoEl",(function(){return n})),e(t.exports,"listEl",(function(){return o})),e(t.exports,"clockEl",(function(){return u})),e(t.exports,"showBtnEl",(function(){return i})),e(t.exports,"hideBtnEl",(function(){return c})),e(t.exports,"hoursEl",(function(){return s})),e(t.exports,"minutesEl",(function(){return l})),e(t.exports,"secondsEl",(function(){return a}));var n=document.querySelector(".js-todos__form"),o=document.querySelector("ul"),u=document.querySelector(".clock"),i=document.querySelector(".js-show"),c=document.querySelector(".js-hide"),s=document.querySelector(".js-clock__hours"),l=document.querySelector(".js-clock__minutes"),a=document.querySelector(".js-clock__seconds")})),o("fl19L")}();
//# sourceMappingURL=todosPage.da573713.js.map

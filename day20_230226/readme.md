
# JavaScript Events – Mouse, Keyboard & Pointer Events Notes

---

# 1. mousemove()

## What is mousemove?

The `mousemove` event triggers **whenever the mouse pointer moves over an element**.

---

## Syntax

```
element.addEventListener("mousemove",function(event) {
console.log(event.clientX,event.clientY);
});
```

---

## Example

```
document.addEventListener("mousemove",function(e) {
console.log("X:",e.clientX,"Y:",e.clientY);
});
```

### Useful Properties

- `event.clientX` → X position
- `event.clientY` → Y position
- `event.target` → Element being hovered

---

## Use Cases

- Custom cursor
- Drawing apps
- Hover animations
- Parallax effects

---

# 2. keydown()

## What is keydown?

Triggered when a key is pressed down.

---

## Syntax

```
document.addEventListener("keydown",function(event) {
console.log(event.key);
});
```

---

## Example

```
document.addEventListener("keydown",function(e) {
if (e.key==="Enter") {
console.log("Enter pressed");
  }
});
```

---

## Useful Properties

- `event.key`
- `event.code`
- `event.ctrlKey`
- `event.shiftKey`

---

## Difference

| Event | When Triggered |
| --- | --- |
| keydown | When key pressed |
| keyup | When key released |

---

# 3. wheel()

## What is wheel event?

Triggered when mouse wheel scrolls.

---

## Example

```
window.addEventListener("wheel",function(e) {
console.log("Scroll direction:",e.deltaY);
});
```

---

## Properties

- `deltaY > 0` → scroll down
- `deltaY < 0` → scroll up

---

## Use Cases

- Custom scroll effects
- Zoom in/out
- Scroll animations

---

# 4. mouseenter

Triggered when mouse enters an element.

```
element.addEventListener("mouseenter",function() {
console.log("Mouse entered");
});
```

✔ Does NOT bubble.

---

# 5. mouseout

Triggered when mouse leaves element.

```
element.addEventListener("mouseout",function() {
console.log("Mouse left");
});
```

Bubbles to parent.

---

# 6. mouseenter vs mouseover

| mouseenter | mouseover |
| --- | --- |
| Does NOT bubble | Bubbles |
| Only triggers once per entry | Triggers multiple times on child elements |

---

# 7. Pointer Events

Pointer events are modern events that handle:

- Mouse
- Touch
- Pen
- Stylus

They unify all input types.

---

## Common Pointer Events

```
element.addEventListener("pointerdown",function() {});
element.addEventListener("pointerup",function() {});
element.addEventListener("pointermove",function() {});
```

---

## Why Use Pointer Events?

Works on touch devices

 Works on stylus

 Works on mouse

 Single unified system

---

# 8. Cursor Events

Cursor behavior can be controlled using CSS.

---

## Change Cursor

```
button {
  cursor:pointer;
}
```

---

## Common Cursor Types

| Value | Behavior |
| --- | --- |
| pointer | Hand icon |
| default | Arrow |
| crosshair | Cross |
| not-allowed | Disabled sign |
| grab | Draggable look |

---

# 9. Click Events

## click

Triggered when element is clicked.

```
button.addEventListener("click",function() {
console.log("Clicked");
});
```

---

## dblclick

Triggered on double click.

```
button.addEventListener("dblclick",function() {
console.log("Double clicked");
});
```

---

## mousedown vs mouseup

| Event | When Triggered |
| --- | --- |
| mousedown | When button pressed |
| mouseup | When button released |

---

# 10. Real Example – Mouse Position Tracker

```
letbox=document.getElementById("box");

box.addEventListener("mousemove",function(e) {
box.textContent="X: "+e.clientX+" Y: "+e.clientY;
});
```

---

# 11. Real Example – Keyboard Movement

```
letposition=0;
letbox=document.getElementById("box");

document.addEventListener("keydown",function(e) {
if (e.key==="ArrowRight") {
position+=10;
box.style.transform="translateX("+position+"px)";
  }
});
```

Theek hai, seedha example se samajh.

## 🔥 Basic Difference

* **mouseenter** → Sirf tab trigger hota hai jab mouse *directly us element ke andar enter kare*.
* **mouseover** → Har baar trigger hota hai jab mouse element **ya uske kisi child element** ke upar aaye.

Ye subtle lagta hai, but real projects me ye bahut important hota hai.

---

## 🎯 Example 1: Parent + Child Box

### HTML

```html
<div class="parent">
    Parent
    <div class="child">Child</div>
</div>
```

### CSS

```css
.parent {
    width: 300px;
    height: 200px;
    background: lightblue;
    padding: 20px;
}

.child {
    width: 100px;
    height: 100px;
    background: coral;
}
```

### JS

```javascript
const parent = document.querySelector(".parent");

parent.addEventListener("mouseenter", () => {
    console.log("mouseenter fired");
});

parent.addEventListener("mouseover", () => {
    console.log("mouseover fired");
});
```

---

## 🧠 Ab kya hoga?

1. Mouse parent ke bahar hai.

2. Mouse parent ke andar aaya →
   👉 **mouseenter fired**
   👉 **mouseover fired**

3. Ab mouse parent ke andar se child pe gaya →
   👉 ❌ `mouseenter` dobara fire nahi hoga
   👉 ✅ `mouseover` fir se fire hoga

4. Child se wapas parent ke blank area me aaye →
   👉 ❌ `mouseenter` nahi
   👉 ✅ `mouseover` fir se

---

## 💣 Real Meaning

### mouseenter

* Clean event hai
* Event bubbling nahi karta
* Mostly hover effects ke liye safe

### mouseover

* Event bubbling karta hai
* Har child interaction pe fire hota hai
* Agar parent me 10 children hain, toh 10 baar trigger ho sakta hai

---

## ⚠️ Practical Scenario

Maan le tu ek card bana raha hai jisme image + text + button hai.

Agar tu:

```js
card.addEventListener("mouseover", ...)
```

Toh button pe jaate hi event fir se fire hoga.

Agar tu:

```js
card.addEventListener("mouseenter", ...)
```

Toh sirf ek baar fire hoga — clean behavior.

---

## 🧨 Brutally Simple Rule

* **Nested elements? → Use `mouseenter`**
* **Event delegation ya child tracking chahiye? → Use `mouseover`**

---

Agar chahe toh main ek visual diagram type explanation bhi bana sakta hoon jisse aur crystal clear ho jaaye.
### 🖱️ `mousemove` kya karta hai?

`mousemove` event **har baar fire hota hai jab mouse move karta hai** — even 1 pixel bhi hile toh.

Matlab:

* Mouse screen pe move karo → event fire
* 1 second me 100 baar move karo → 100+ baar fire
* Continuous movement = continuous firing

Ye heavy event hai. Galat jagah use kiya toh performance gira deta hai.

---

## 🔥 Basic Example

```html
<div id="box" style="height:200px; background:lightblue;"></div>
```

```js
const box = document.querySelector("#box");

box.addEventListener("mousemove", (e) => {
    console.log("X:", e.clientX, "Y:", e.clientY);
});
```

### 🧠 Kya hoga?

Jab mouse box ke andar move karega:

* Har movement pe X aur Y position print hogi.
* Mouse ruk gaya → event ruk gaya.

---

## 🎯 Real Use Cases

### 1️⃣ Custom Cursor

Tu pehle bana chuka hai:

```js
document.addEventListener("mousemove", function(e){
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});
```

Yaha `mousemove` hi cursor ko follow karwa raha hai.

---

### 2️⃣ Drawing App

Canvas pe pencil move karne ke liye.

---

### 3️⃣ Parallax Effect

Background elements mouse position ke hisaab se move karte hain.

---

## ⚠️ Important Difference

| Event      | Kab fire hota hai          |
| ---------- | -------------------------- |
| mouseenter | Ek baar jab enter kare     |
| mouseover  | Enter kare + child pe jaye |
| mousemove  | Har movement pe            |

---

## 💣 Brutal Truth

Agar tu har jagah `mousemove` laga dega:

* CPU load badhega
* Animations lag karenge
* Website slow hogi

Professional log:

* `throttle`
* `debounce`
* ya `requestAnimationFrame`

use karte hain performance ke liye.

---

Agar tu chahe toh main tujhe bata sakta hoon ki `mousemove` ko optimize kaise karte hain production level pe.
const box = document.querySelector("#box");

box.addEventListener("pointerdown", () => {

  const moveHandler = (e) => {
      console.log("X:", e.clientX, "Y:", e.clientY);
  };

  box.addEventListener("mousemove", moveHandler);

  box.addEventListener("pointerup", () => {
      box.removeEventListener("mousemove", moveHandler);
  }, { once: true });

});
document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector("#button-1");
    const btn2 = document.querySelector("#button-2");
    const btn3 = document.querySelector("#button-3");
    const shoppingList = document.querySelector("#shopping-list");

    btn1.addEventListener('click', function () {
        const li = document.createElement('li');
        li.innerHTML = 'chleb';
        shoppingList.appendChild(li);
    })

    btn2.addEventListener('click', function () {
        shoppingList.removeChild(shoppingList.children[shoppingList.children.length-1]);
    })

    btn3.addEventListener('click', function() {
        shoppingList.appendChild(shoppingList.children[1].cloneNode(true));
    })
})

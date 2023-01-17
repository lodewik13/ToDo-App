const list = document.getElementById('todo-list');

list.addEventListener('DOMNodeInserted', (e) => {
    if (e.target.tagName === 'LI') {
        const text = e.target.innerText;
        e.target.innerText = text.toUpperCase();
    }
});

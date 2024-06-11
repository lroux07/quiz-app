import './style.css';
const body = document.querySelector('body');
const htmlButton = document.querySelector('#htmlButton');
const cssButton = document.querySelector('#cssButton');
const jsButton = document.querySelector('#jsButton');
const accessButton = document.querySelector('#accessButton');

const htmlFunction = () => {
    htmlButton.addEventListener('click', () => {
        body.innerHTML = `
            <header>
                <img src="/public/assets/sun.svg" alt="light-mod" class="sun-icon">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <img src="/public/assets/moon.svg" alt="dark-mod" class="moon-icon">
            </header>

            <section class="container">
            </section>
        `;
        body.removeChild();
    });
}
htmlFunction();

const cssFunction = () => {
    cssButton.addEventListener('click', () => {
        alert('CSS');
    });
}
cssFunction();

const jsFunction = () => {
    jsButton.addEventListener('click', () => {
        alert('JS');
    });
}
jsFunction();

const accessFunction = () => {
    accessButton.addEventListener('click', () => {
        alert('Accessibility');
    });
}
accessFunction();
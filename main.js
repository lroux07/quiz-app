import './style.css';
const body = document.querySelector('body');
const htmlButton = document.querySelector('#htmlButton');
const cssButton = document.querySelector('#cssButton');
const jsButton = document.querySelector('#jsButton');
const accessButton = document.querySelector('#accessButton');
const counter = 0;

// const reponse = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
// const questions = await reponse.json();
// console.log(questions);

const questions = [
    {
        number: 1,
        question: "Question sur le HTML",
        letter: [
            "A",
            "B",
            "C",
            "D"
        ],
        responses: [
            "Reponse 1",
            "Reponse 2",
            "Reponse 3",
            "Reponse 4"
        ],
    },
    {
        number: 2,
        question: "Question 2",
        letter: [
            "A",
            "B",
            "C",
            "D"
        ],
        responses: [
            "Reponse 1",
            "Reponse 2",
            "Reponse 3",
            "Reponse 4"
        ],
    },
    {
        number: 3,
        question: "Question 3",
        letter: [
            "A",
            "B",
            "C",
            "D"
        ],
        responses: [
            "Reponse 1", true,
            "Reponse 2",
            "Reponse 3",
            "Reponse 4"
        ],
    },
    {
        number: 4,
        question: "Question 4",
        letter: [
            "A",
            "B",
            "C",
            "D"
        ],
        responses: [
            "Reponse 1", true,
            "Reponse 2",
            "Reponse 3",
            "Reponse 4"
        ],
    },
    {
        number: 5,
        question: "Question 5",
        letter: [
            "A",
            "B",
            "C",
            "D"
        ],
        responses: [
            "Reponse 1",
            "Reponse 2",
            "Reponse 3",
            "Reponse 4"
        ],
    }
];

const htmlFunction = (e) => {
    htmlButton.addEventListener('click', () => {
        body.innerHTML = `
            <header class="header-game">
                <div>
                    <img src="/public/assets/icon-html.png" class="icons" alt="Icon HTML">
                    <h2 class="title-game">HTML</h2>
                </div>

                <div>
                    <img src="/public/assets/sun.svg" alt="light-mod" class="sun-icon">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <img src="/public/assets/moon.svg" alt="dark-mod" class="moon-icon">
                </div>
            </header>

            <main>
                <article class="aricle-question">
                    <p>Question ${questions[0].number} sur 5</p>
                    <h2 class="question">${questions[0].question}</h2>

                    <div class="line">
                        <div class="line2"></div>
                    </div>
                </article>

                <form action="">
                    <div class="inputs">
                        <input type="radio" id="response_1" class="responses" name="fav_language" value="response_1">
                        <label for="response_1"><h3>${questions[0].letter[0]}</h3> ${questions[0].responses[0]}</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_2" class="responses" name="fav_language" value="response_2">
                        <label for="response_2"><h3>${questions[0].letter[1]}</h3> ${questions[0].responses[1]}</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_3" class="responses" name="fav_language" value="response_3">
                        <label for="response_3"><h3>${questions[0].letter[2]}</h3> ${questions[0].responses[2]}</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_4" class="responses" name="fav_language" value="response_4">
                        <label for="response_4"><h3>${questions[0].letter[3]}</h3> ${questions[0].responses[3]}</label>
                    </div>
                    <button class="submit">Envoyer</button>
                </form>
            </main>
        `;

        const inputs = document.querySelectorAll('.inputs input');
        inputs.forEach(input => {
            input.addEventListener('click', (event) => {
                document.querySelectorAll('.inputs').forEach(div => {
                    div.classList.remove('selected');
                });

                if (event.target.checked) {
                    event.target.parentElement.classList.add('selected');
                }
            });
        });
    });
}
htmlFunction();

const cssFunction = () => {
    cssButton.addEventListener('click', () => {
        body.innerHTML = `
            <header class="header-game">
                <div>
                    <img src="/public/assets/icon-css.png" class="icons" alt="Icon CSS">
                    <h2 class="title-game">CSS</h2>
                </div>

                <div>
                    <img src="/public/assets/sun.svg" alt="light-mod" class="sun-icon">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <img src="/public/assets/moon.svg" alt="dark-mod" class="moon-icon">
                </div>
            </header>

            <main>
                <article class="aricle-question">
                    <p>Question 1 sur 10</p>
                    <h2 class="question">Question sur le CSS</h2>

                    <div class="line">
                        <div class="line2"></div>
                    </div>
                </article>

                <form action="">
                    <div class="inputs">
                        <input type="radio" id="response_1" class="responses" name="fav_language" value="response_1">
                        <label for="response_1"><h3>A</h3> Reponse 1</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_2" class="responses" name="fav_language" value="response_2">
                        <label for="response_2"><h3>B</h3> Reponse 2</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_3" class="responses" name="fav_language" value="response_3">
                        <label for="response_3"><h3>C</h3> Reponse 3</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_4" class="responses" name="fav_language" value="response_4">
                        <label for="response_4"><h3>D</h3> Reponse 4</label>
                    </div>
                    <button class="submit">Envoyer</button>
                </form>
            </main>
        `;

        const inputs = document.querySelectorAll('.inputs input');
        inputs.forEach(input => {
            input.addEventListener('click', (event) => {
                document.querySelectorAll('.inputs').forEach(div => {
                    div.classList.remove('selected');
                });

                if (event.target.checked) {
                    event.target.parentElement.classList.add('selected');
                }
            });
        });

        body.removeChild();
    });
}
cssFunction();

const jsFunction = () => {
    jsButton.addEventListener('click', () => {
        body.innerHTML = `
            <header class="header-game">
                <div>
                    <img src="/public/assets/icon-js.png" class="icons" alt="Icon JavaScript">
                    <h2 class="title-game">JavaScript</h2>
                </div>

                <div>
                    <img src="/public/assets/sun.svg" alt="light-mod" class="sun-icon">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <img src="/public/assets/moon.svg" alt="dark-mod" class="moon-icon">
                </div>
            </header>

            <main>
                <article class="aricle-question">
                    <p>Question 1 sur 10</p>
                    <h2 class="question">Question sur le JavaScript</h2>

                    <div class="line">
                        <div class="line2"></div>
                    </div>
                </article>

                <form action="">
                    <div class="inputs">
                        <input type="radio" id="response_1" class="responses" name="fav_language" value="response_1">
                        <label for="response_1"><h3>A</h3> Reponse 1</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_2" class="responses" name="fav_language" value="response_2">
                        <label for="response_2"><h3>B</h3> Reponse 2</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_3" class="responses" name="fav_language" value="response_3">
                        <label for="response_3"><h3>C</h3> Reponse 3</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_4" class="responses" name="fav_language" value="response_4">
                        <label for="response_4"><h3>D</h3> Reponse 4</label>
                    </div>
                    <button class="submit">Envoyer</button>
                </form>
            </main>
        `;

        const inputs = document.querySelectorAll('.inputs input');
        inputs.forEach(input => {
            input.addEventListener('click', (event) => {
                document.querySelectorAll('.inputs').forEach(div => {
                    div.classList.remove('selected');
                });

                if (event.target.checked) {
                    event.target.parentElement.classList.add('selected');
                }
            });
        });

        body.removeChild();
    });
}
jsFunction();

const accessFunction = () => {
    accessButton.addEventListener('click', () => {
        body.innerHTML = `
            <header class="header-game">
                <div>
                    <img src="/public/assets/icon-accessibility.png" class="icons" alt="Icon Accessibility">
                    <h2 class="title-game">Accessibility</h2>
                </div>

                <div>
                    <img src="/public/assets/sun.svg" alt="light-mod" class="sun-icon">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <img src="/public/assets/moon.svg" alt="dark-mod" class="moon-icon">
                </div>
            </header>

            <main>
                <article class="aricle-question">
                    <p>Question 1 sur 10</p>
                    <h2 class="question">Question sur l'accessibilité</h2>

                    <div class="line">
                        <div class="line2"></div>
                    </div>
                </article>

                <form action="">
                    <div class="inputs">
                        <input type="radio" id="response_1" class="responses" name="fav_language" value="response_1">
                        <label for="response_1"><h3>A</h3> Reponse 1</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_2" class="responses" name="fav_language" value="response_2">
                        <label for="response_2"><h3>B</h3> Reponse 2</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_3" class="responses" name="fav_language" value="response_3">
                        <label for="response_3"><h3>C</h3> Reponse 3</label>
                    </div>

                    <div class="inputs">
                        <input type="radio" id="response_4" class="responses" name="fav_language" value="response_4">
                        <label for="response_4"><h3>D</h3> Reponse 4</label>
                    </div>
                    <button class="submit">Envoyer</button>
                </form>
            </main>
        `;

        const inputs = document.querySelectorAll('.inputs input');
        inputs.forEach(input => {
            input.addEventListener('click', (event) => {
                document.querySelectorAll('.inputs').forEach(div => {
                    div.classList.remove('selected');
                });

                if (event.target.checked) {
                    event.target.parentElement.classList.add('selected');
                }
            });
        });

        body.removeChild();
    });
}
accessFunction();
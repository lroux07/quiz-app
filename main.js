import './style.css';
const body = document.querySelector('body');
const htmlButton = document.querySelector('#htmlButton');
const cssButton = document.querySelector('#cssButton');
const jsButton = document.querySelector('#jsButton');
const accessButton = document.querySelector('#accessButton');
const counter = 0;

const reponse = await fetch("https://quizapi.io/api/v1/questions?apiKey=tOUOvZ1zuMC0Uo6RXZ0opRicHdpg4siBS6n5INyg&category=code&difficulty=Easy&limit=10&tags=HTML");
const questions = await reponse.json();
console.log(questions);

const htmlFunction = (questionIndex) => {
    htmlButton.addEventListener('click', () => {
        const question = questions[questionIndex];
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
                    <p>Question 1 sur 10</p>
                    <h2 class="question">${question.question}</h2>

                    <div class="line">
                        <div class="line2"></div>
                    </div>
                </article>

                <form action="">
                    ${Object.keys(question.answers).map((key, index) => {
                        if (question.answers[key] !== null) {
                            return `
                            <div class="inputs">
                                <input type="radio" id="response_${index + 1}" class="responses" name="fav_language" value="response_${index + 1}">
                                <label for="response_${index + 1}"><h3>${String.fromCharCode(65 + index)}</h3> ${question.answers[key]}</label>
                            </div>
                            `;
                        } else {
                            return '';
                        }
                    }).join('')}
                    <input type="submit" value="Envoyer" class="submit" />
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
};

for (let i = 0; i < questions.length; i++) {
    htmlFunction(i);
}

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
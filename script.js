const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

const startButton = document.getElementById("startButton");

const impactButton = document.getElementById("impactButton");
const impactBox = document.getElementById("impactBox");
const impactText = document.getElementById("impactText");

const quizButton = document.getElementById("quizButton");



/* MENU */

menuButton.addEventListener("click", function () {

    const menuAberto = menu.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuAberto
    );

    if (menuAberto) {
        menuButton.textContent = "FECHAR";
    } else {
        menuButton.textContent = "MENU";
    }

});



/* FECHAR MENU AO CLICAR EM UMA OPCAO */

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "MENU";

    });

});



/* EFEITO DO HEADER AO ROLAR */

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        document.body.classList.add("scrolled");

    } else {

        document.body.classList.remove("scrolled");

    }

});



/* BOTAO COMEÇAR */

startButton.addEventListener("click", function () {

    document.getElementById("ods14").scrollIntoView({
        behavior: "smooth"
    });

});



/* CARDS DOS AMBIENTES */

const cards = document.querySelectorAll("[data-card]");

cards.forEach(function (card) {

    const button = card.querySelector(".card-button");

    button.addEventListener("click", function () {

        cards.forEach(function (otherCard) {

            if (otherCard !== card) {
                otherCard.classList.remove("selected");
            }

        });

        card.classList.toggle("selected");

        if (card.classList.contains("selected")) {

            button.textContent = "OCULTAR";

        } else {

            button.textContent = "SAIBA MAIS";

        }

    });

});



/* EXPLICACAO SOBRE O CAMINHO DO LIXO */

impactButton.addEventListener("click", function () {

    impactBox.classList.toggle("active");

    if (impactBox.classList.contains("active")) {

        impactText.textContent =
            "Quando chove, a água pode carregar resíduos das ruas para os bueiros. Esses resíduos podem chegar aos córregos e rios e contribuir para a poluição dos ambientes aquáticos.";

        impactButton.textContent =
            "OCULTAR EXPLICAÇÃO";

    } else {

        impactText.textContent =
            "O lixo jogado longe de um rio também pode chegar até ele.";

        impactButton.textContent =
            "ENTENDER O IMPACTO";

    }

});



/* CAMINHO DO LIXO */

const pathSteps = document.querySelectorAll(".path-step");
const pathInfo = document.getElementById("pathInfo");

const pathData = [

    {
        title: "Pessoa",
        text: "Tudo começa quando uma pessoa descarta um resíduo de maneira incorreta."
    },

    {
        title: "Rua",
        text: "O resíduo permanece na rua e pode ser transportado pela água da chuva."
    },

    {
        title: "Bueiro",
        text: "A água da chuva pode levar o resíduo para os sistemas de drenagem."
    },

    {
        title: "Rio",
        text: "O resíduo pode alcançar córregos e rios e contribuir para a poluição da água."
    },

    {
        title: "Mar",
        text: "Os rios podem transportar resíduos até regiões costeiras e ambientes marinhos."
    },

    {
        title: "Ecossistema",
        text: "Animais, plantas e outros organismos podem ser afetados pela presença desses resíduos."
    }

];


pathSteps.forEach(function (step) {

    step.addEventListener("click", function () {

        const index = Number(
            step.dataset.step
        );

        pathSteps.forEach(function (item) {

            item.classList.remove("active");

        });

        step.classList.add("active");

        pathInfo.innerHTML = `
            <span>
                ETAPA ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
                ${pathData[index].title}
            </h3>

            <p>
                ${pathData[index].text}
            </p>
        `;

    });

});



/* BOTAO DO QUIZ */

quizButton.addEventListener("click", function () {

    const quizSection = document.getElementById("quiz");

    quizSection.classList.add("quiz-active");

    quizButton.textContent =
        "QR CODE PRONTO";

});



/* ANIMACAO DAS SECOES */

const sections = document.querySelectorAll(".section");

sections.forEach(function (section) {

    section.classList.add("reveal");

});


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});

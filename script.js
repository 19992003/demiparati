const startBtn = document.getElementById("startBtn");

const intro = document.getElementById("intro");

const chapter1 = document.getElementById("chapter1");

const music = document.getElementById("bgMusic");

const text = `

Dicen que algunos encuentros llegan cuando menos los esperamos.

Nosotros no nos conocimos en una fiesta.

No nos conocimos en una cafetería.

Nos conocimos trabajando.

Y sin saberlo...

ese trabajo estaba cambiando mi vida para siempre.

Porque allí te encontré a ti.

`;

startBtn.addEventListener("click", () => {

music.play();

intro.style.display = "none";

chapter1.classList.remove("hidden");

typeWriter();

setTimeout(() => {

document
.getElementById("gallery")
.classList.remove("hidden");

}, 12000);

});

function typeWriter(){

let i = 0;

const target = document.getElementById("typingText");

function write(){

if(i < text.length){

target.innerHTML += text.charAt(i);

i++;

setTimeout(write,35);

}

}

write();

}

const memories = {

1: {
title: "Todo comenzó contigo ❤️",
text: "Quizás ese día parecía normal, pero terminó convirtiéndose en uno de los momentos más importantes de mi vida."
},

2: {
title: "Mi lugar favorito 🌼",
text: "Con el tiempo entendí que mi lugar favorito no era un sitio, sino cualquier momento en el que estuviera contigo."
},

3: {
title: "Nuestro futuro 💍",
text: "Cada día que pasa me acerca más al momento en que podremos construir juntos la vida que tanto soñamos."
}

};

function showMemory(id){

    const modal = document.getElementById("memoryModal");

    document.getElementById("memoryTitle").innerText =
    memories[id].title;

    document.getElementById("memoryText").innerText =
    memories[id].text;

    modal.style.display = "flex";

}

function closeMemory(){

    document.getElementById("memoryModal")
    .style.display = "none";

}
function showDistance(){

    const distance = document.getElementById("distance");

    distance.style.display = "flex";

    distance.scrollIntoView({
        behavior: "smooth"
    });

}
const admirationTexts = {

1: {
title: "🌼 Tu paciencia",
text: "Aunque muchas veces dices que no eres paciente, yo veo algo diferente. Veo a una mujer que ha sabido esperar, luchar y seguir adelante. Tu paciencia conmigo, con nuestras metas y con nuestro futuro es una de las cosas que más admiro."
},

2: {
title: "❤️ Tu forma de amar",
text: "Me siento amado cuando me consientes, cuando me abrazas y cuando me demuestras que nunca te cansas de elegirnos. Amo que te esfuerces cada día por ser mejor y que tu amor se vea en los pequeños detalles."
},

3: {
title: "🚀 Tu fortaleza",
text: "Me llena de orgullo ver en la mujer en la que te has convertido. Más fuerte, más segura y más feliz que antes. Verte crecer también me inspira a crecer contigo."
},

4: {
title: "💍 Nuestro futuro",
text: "Supe que quería casarme contigo cuando entendí que nuestros sueños caminaban en la misma dirección. Porque para nosotros amar significa luchar juntos, construir juntos y nunca rendirnos."
}

};

function showAdmirationCard(id){

document.getElementById("memoryTitle").innerText =
admirationTexts[id].title;

document.getElementById("memoryText").innerText =
admirationTexts[id].text;

document.getElementById("memoryModal")
.style.display = "flex";

}
function showAdmiration(){

    const admiration =
    document.getElementById("admiration");

    admiration.style.display = "flex";

    admiration.scrollIntoView({
        behavior:"smooth"
    });

}
function showPromise(){

    const promise =
    document.getElementById("promise");

    promise.style.display = "flex";

    promise.scrollIntoView({
        behavior:"smooth"
    });

}
function showCountdown(){

    const countdown =
    document.getElementById("countdown");

    countdown.style.display = "flex";

    countdown.scrollIntoView({
        behavior:"smooth"
    });

}


const weddingDate =
new Date("March 15, 2027 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const difference =
weddingDate - now;

const days =
Math.floor(difference / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(difference % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(difference % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(difference % (1000 * 60))
/
1000
);

document.getElementById("days").innerText =
days;

document.getElementById("hours").innerText =
hours;

document.getElementById("minutes").innerText =
minutes;

document.getElementById("seconds").innerText =
seconds;

},1000);

function showFlower(){

    const flower =
    document.getElementById("flower");

    flower.style.display = "flex";

    flower.scrollIntoView({
        behavior:"smooth"
    });

}

let openedPetals = 0;

function openPetal(element){

    if(
        element.classList.contains("opened")
    ){
        return;
    }

    element.classList.add("opened");

    openedPetals++;

    if(openedPetals >= 7){

        document
        .getElementById("secretMessage")
        .style.display = "block";

    }

}

function showFinal(){

    const final =
    document.getElementById("final");

    final.style.display = "flex";

    final.scrollIntoView({
        behavior:"smooth"
    });

}
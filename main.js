// SPINNIG WHEEL

function spinWheel() {
  const box = document.querySelector("#box");
  const mainbox = document.querySelector("#mainbox");
  const message = document.querySelector("#message");
  const fireworks = document.querySelector(".fireworks");
  const forma = document.querySelector(".forma");

  const x = 1024;
  const y = 5000;

  const deg = Math.floor(Math.random() * (x - y) + y);

  box.style.transform = "rotate(9270deg)";

  mainbox.classList.add("animate");
  setTimeout(function () {
    message.classList.add("message-animation");
    fireworks.classList.add("display");
    mainbox.classList.remove("animate");
    forma.style.display = "block";
  }, 8100);

  setTimeout(function () {
    fireworks.classList.remove("display");

    forma.style.transform = "translate(0) rotate(360deg)";
  }, 11200);
}

//Komentari

const komentari = document.querySelector(".komentari");

const comments = [
  {
    slika: "./img/avatar1.jpg",
    ime: "Samir Fejzic",
    text: "Rezultati su fantasticni, problem sa hemoroidima imao sam preko 11 godina, od kako sam se doselio u Ameriku, sada sam sretan covjek!!! HVALA!",
    datum: "20.03.2021",
  },
  {
    slika: "./img/avatar3.jpg",
    ime: "Idriz Ćosić",
    text: "Nevjerovatno, na prvu nisam vjerovao da ce mi pomoci, ali kroz samo 15 dana prestao je svrbez i bol koji sam imao. Krvarenje se povuklo nakon nekih 40 dana koristenja....PREZADOVOLJAN",
    datum: "15.01.2021",
  },
  {
    slika: "./img/avatar2.jpg",
    ime: "Ivan Sekulic",
    text: "Ja se od srca zahvaljujem, odgodio sam operaciju hemoroida kako sam poceo koristi vase pilule",
    datum: "09.06.2021",
  },
  {
    slika: "./img/avatar4.jpg",
    ime: "Bahro Joldic",
    text: "Doktor mi je rekao da moram perisati suljeve i odma sam trazio prirodan lijek jer sam uvidio da je doktor odustao od mene, naisao sam na Natura Active od prijatelja iz Njemacke, kroz nekih 20 dana vidjeo sam rezultate, nakon 2 mjeseca problem sam rijesio u potpunosti.",
    datum: "11.05.2021",
  },
  {
    slika: "./img/avatar5.jpg",
    ime: "Azra Subasic",
    text: "Moj prijatelj Drazen je koristio Natura Active kapsule i rijesio je svoj problem kroz nekoliko mjeseci, naime u zadnjih pola godine i ja sam dobila hemoroide zbog posla kojim se bavim i narucila sam kapsule i za samo 30 dana uspjela sam rijesiti problem sa hemoroidima",
    datum: "16.07.2021",
  },
  {
    slika: "./img/avatar6.jpg",
    ime: "Senad Poturak",
    text: "Bolovi koje sam imao su bili nepodnosljiiv, isao sam specijalisti ali nista od toga, vidjeo sam reklamu za Natura Active i narucio sam da probam (pa sta bude) stvar da bude najbolja kroz 7 dana prestalo je krvarenje a vec nakon otprilike 2 mjeseca vise nisam imao suljeve",
    datum: "20.07.2021",
  },
  {
    slika: "./img/avatar7.jpg",
    ime: "Fadila Ibric",
    text: "Hemoroidi me prate unazad 20. godina, posjetila sam nekoliko lijecnika i svi su mi propisivali tablete od kojih sam privremeno imala olaksanje a kasnije se hemoroidi vracali, prijatelj mi je preporucio Natura Active, kroz mjesece i pol dana hemoroidi su se totalno povukli, sada mogu u miru da setam sa svojom unukom bez problema",
    datum: "02.03.2021",
  },
  {
    slika: "./img/avatar9.jpg",
    ime: "Milica Teovanovic",
    text: "Stvarno mi je neprijatno govoriti o problemu sa hemoroidima ali zelim ovim putem da pomognem svima koji imaju isti problem, narucite natura kapsule i verujte da ce problem sa hemoroidima postati proslost ja sam imala 4 stepen i bila sam upucena na operaciju Sarajevo, ali sam hvala Bogu izlijecila",
    datum: "29.06.2021",
  },
  {
    slika: "./img/avatar8.jpg",
    ime: "Petrovic Bojan",
    text: "Posao vozaca kamiona je izuzetno tezak i svi vozaci ako nemaju dobice hemoroide, ja sam dobio 2 stepen hemoroida i odma sam potazio lijek, preporukom prijatelja Samira iz Banja Luke narucio sam kapsule, koristio sam 3 dnevno, i veoma mi je pomoglo, hvala vam",
    datum: "17.04.2021",
  },
];

for (let index = 0; index < comments.length; index++) {
  komentari.innerHTML += `
          <div class="comment-mobile">
            <div class="comment-avatar">
              <img src=${comments[index].slika} alt="" />
            </div>
            <div class="comment-name">${comments[index].ime}</div>
            <div class="comment-text">
              ${comments[index].text}
            </div>
            <div class="comment-date">
              <p>${comments[index].datum}</p>
            </div>
          </div>
          `;
}

const h1 = document.querySelector("h1");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const h2 = document.querySelector("h2");
const buttons = document.querySelector(".buttons");

const noImages = [
  "memes/girl.jpg",
  "memes/kalbo.jpg",
  "memes/cat1.jpg",
  "memes/cat2.jpg",
  "memes/cat3.jpg",
  "memes/disappearing.gif",
];

h1.addEventListener("click", () => {
  div1.style.display = "block";
  h1.style.display = "none";
});

const no = document.querySelector("#no");
const kiss = document.querySelector("#kiss");

let noCount = 0;

no.addEventListener("click", () => {
  const image = div1.querySelector("img");
  const message = div1.querySelector("p");

  if (noCount === 0) {
    image.src = noImages[0];
    message.textContent = "Luh";
    noCount++;
  } else if (noCount === 1) {
    image.src = noImages[1];
    message.textContent = "Hmmmmmm";
    noCount++;
  } else if (noCount === 2) {
    image.src = noImages[2];
    message.textContent = "😢";
    noCount++;
  } else if (noCount === 3) {
    image.src = noImages[3];
    message.textContent = "😭";
    noCount++;
  } else if (noCount === 4) {
    image.src = noImages[4];
    message.textContent = "Ayaw mo talaga";
    noCount++;
  } else if (noCount === 5) {
    image.src = noImages[5];
    message.textContent = "Ok bye!";
    h2.style.display = "none";
    buttons.style.display = "none";
    noCount = 0;
  }
});

kiss.addEventListener("click", () => {
  const image = div1.querySelector("img");
  image.src = "memes/smiley.png";
  div1.style.display = "none";
  div2.style.display = "block";
});

document.querySelector(".div2 img").addEventListener("click", () => {
  div2.style.display = "none";
  div3.style.display = "block";

  const img = document.querySelector(".div3 img");

  setTimeout(() => {
    img.src = "memes/thinking.gif";
  }, 3000);
  setTimeout(() => {
    img.src = "memes/arrow-heart.gif";
  }, 7000);
  setTimeout(() => {
    div3.style.display = "none";
    div4.style.display = "block";
  }, 8800);
});

document.querySelector(".div4 img").addEventListener("click", () => {
div4.style.display = "none";
div5.style.display = "block";
document.querySelector(".audio").style.display = "block";
document.querySelector("#music").play();

  let htmlContent = "";
  for (let i = 1; i <= 74; i++) {

    if (i === 13) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Crush moko?</p>
    `;
      continue;
    }
    if (i === 14) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Awkward momints 🤣</p>
    `;
      continue;
    }

    if (i === 16) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Yiee ing kilig</p>
    `;
      continue;
    }

    if (i === 19) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Yiee happy na sya 😁</p>
    `;
      continue;
    }

    if (i === 23) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Book_bind.jpeg 🤣</p>
    `;
      continue;
    }

    if (i === 28) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>First Date 💜</p>
    `;
      continue;
    }

    if (i === 46) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>💜💜💜</p>
    `;
      continue;
    }

    if (i === 55) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>😎😎</p>
    `;
      continue;
    }

    if (i === 66) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Binni Gemma, nag bad finger 🤣</p>
    `;
      continue;
    }

    if (i === 70) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>CUTE MO</p>
    `;
      continue;
    }

    if (i === 74) {
      htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p>Best night of my life, may pa back hug 🤗🥰</p>
    `;
      continue;
    }

    htmlContent += `
        <img src="image/img${i}.jpg" alt="">
        <p></p>
    `;
  }

  div5.innerHTML = htmlContent;

});


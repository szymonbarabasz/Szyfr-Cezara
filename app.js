document.addEventListener("DOMContentLoaded", () => {
  const codebtn = document.querySelector(".codebtn");
  const all = document.querySelector(".all");
  let rnd;
  let src;

  function CesarCode(msg) {
    src =
      "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUWVXYZŹŻaąbcćdeęfghijklłmnńoópqrsśtuwvxyzźż1234567890 ";
    src = src.split("");
    rnd = Math.floor(Math.random() * (10 - 2 + 1) + 1);
    console.log(rnd);

    msg.forEach((el, i, msg) => {
      if (src.indexOf(el) + rnd <= src.length - 1) {
        msg.splice(i, 1, src[src.indexOf(el) + rnd]);
      } else {
        msg.splice(i, 1, src[src.indexOf(el) + rnd - src.length]);
      }
    });
  }

  function Decrypt(msg) {
    msg.forEach((el, i, msg) => {
      if (src.indexOf(el) - rnd >= 0) {
        msg.splice(i, 1, src[src.indexOf(el) - rnd]);
      } else {
        msg.splice(i, 1, src[src.indexOf(el) - rnd + src.length]);
      }
    });
  }

  function AddCoded(msg) {
    const codedText = document.createElement("h2");
    codedText.innerHTML = `<p>${msg}</p>`;
    codedText.classList.add("content");
    codedText.classList.add("coded");
    all.appendChild(codedText);
    codedText.style.fontSize = "250%";
    codedText.firstElementChild.style.margin = "15px 25px";

    const decodeBtn = document.createElement("button");
    decodeBtn.innerHTML = "<p>Kliknij aby dekodować ostatnią wiadomość</p>";
    decodeBtn.classList.add("decodeBtn")
    all.appendChild(decodeBtn);
    decodeBtn.style.fontSize = "120%";
    decodeBtn.style.margin = "5px 10px";
    decodeBtn.style.borderRadius = "40px";
    decodeBtn.style.fontFamily = "'Staatliches', cursive";
    decodeBtn.firstElementChild.style.margin = "5px 10px";
  }

  function AddDecoded(msg) {
    const codedText = document.createElement("h2");
    codedText.innerHTML = `<p>${msg}</p>`;
    codedText.classList.add("content");
    codedText.classList.add("decoded");
    all.appendChild(codedText);
    codedText.style.fontSize = "250%";
    codedText.firstElementChild.style.margin = "15px 25px";
  }

  function replaceCoded(msg) {
    const codedText = document.querySelector(".coded");
    codedText.innerHTML = `<p>${msg}</p>`;
  }

  function replaceDecoded(msg) {
    const codedText = document.querySelector(".decoded");
    codedText.innerHTML = `<p>${msg}</p>`;
  }

  codebtn.addEventListener("click", () => {
    let coded = prompt("Wpisz co chcesz zaszyfrować");

    coded = coded.split("");
    CesarCode(coded);
    coded = coded.join("");

    if (all.lastElementChild.tagName === "H2") {
      replaceCoded(coded);
    } else {
      AddCoded(coded);
    }

    const decodeBtn = document.querySelector(".decodeBtn");

    decodeBtn.addEventListener("click", () => {
      coded = coded.split("");
      Decrypt(coded);
      coded = coded.join("");
      
      if (all.lastElementChild.tagName === "H2") {
        replaceDecoded(coded);
      } else {
        AddDecoded(coded);
      }
    });
  });
});

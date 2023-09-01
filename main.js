const baslikValue = document.getElementById("note-title");
const notValue = document.getElementById("note-content");
const inputImg = document.getElementById("file-input");
const notBaslik = document.querySelector(".card_title");
const btn = document.getElementById("submit");
const ul = document.querySelector(".cards");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  notEkle();
});

function notEkle() {
  const baslikNot = baslikValue.value;
  const notIcerik = notValue.value;
  const imgValue = inputImg.files[0];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const currentMonthName = months[month];
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  if (imgValue) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgDataURL = e.target.result;

      const li = document.createElement("li");
      li.className = "cards_item";

      li.innerHTML = `
      
        <div class="card">
          <div class="card_image">
            <img src="${imgDataURL}" alt="Uploaded Image" />
          </div>
          <div class="card_content">
            <h2 class="card_title">${baslikNot}</h2>
            <div class="card_text">
              <p>${notIcerik}</p>
            </div>
            <hr>
            <div class="card_text">
            <table>
            <tr>
              <th colspan="2">Not Alınan Tarih</th>
            </tr>
            <tr>
              <td>Gün</td>
              <td>${day}</td>
            </tr>
            <tr>
              <td>Ay</td>
              <td>${currentMonthName}</td>
            </tr>
            <tr>
              <td>Yıl</td>
              <td>${year}</td>
            </tr>
            <tr>
              <td>Saat</td>
              <td>${hours}:${minutes}:${seconds}</td>
            </tr>
          </table>            <hr>

            <button id="delete-button">Notu sil</button>

          </div> 
          </div>
        </div>
      `;
      ul.appendChild(li);

      // Yeni not ekledikten sonra input alanlarını temizle
      baslikValue.value = "";
      notValue.value = "";
      inputImg.value = "";
    };

    reader.readAsDataURL(imgValue); // Dosyanın veri URL'sini oku
  } else {
    alert("Lütfen bir fotoğraf seçin.");
  }
}

const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  container.style.transform = `translateY(${scrollPosition}px)`;
});

ul.addEventListener("click", function (event) {
  if (event.target && event.target.id === "delete-button") {
    const kart = event.target.closest(".cards_item");

    if (kart) {
      kart.remove();
    }
  }
});

// Mendapatkan elemen-elemen yang dibutuhkan
const texts = document.querySelectorAll(".text-container .text");
const cards = document.querySelectorAll(".content-container .card");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");

let currentIndex = 0; // Indeks teks dan proyek yang sedang ditampilkan

// Fungsi untuk memperbarui tampilan
function updateDisplay() {
  // Menyembunyikan semua teks dan kartu proyek
  texts.forEach((text, index) => {
    text.style.transform =
      index === currentIndex ? "translateX(0%)" : "translateX(-200%)";
  });
  cards.forEach((card, index) => {
    card.style.transform =
      index === currentIndex ? "translateX(0%)" : "translateX(150%)";
  });
}

// Menangani klik tombol kanan
buttonRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % texts.length; // Mengatur indeks ke item berikutnya
  updateDisplay();
});

// Menangani klik tombol kiri
buttonLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length; // Mengatur indeks ke item sebelumnya
  updateDisplay();
});

// Memperbarui tampilan awal
updateDisplay();

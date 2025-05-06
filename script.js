const btnNo = document.querySelector('.no');

function gerak() {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

function jawabYes() {
  document.getElementById('popup').style.display = 'block';
}

// Generate hearts
function buatLove() {
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${0 + Math.random() * 0}s`;
    heartsContainer.appendChild(heart);
  }
}

buatLove();

    function jawabYes() {
  const nomor = '+6285755672948'; // ← Ganti dengan nomor kamu (awali pakai kode negara tanpa +)
  const pesan = encodeURIComponent('Waktu udah ngajarin aku banyak hal, termasuk betapa berharganya kamu, kalau masih ada ruang buat aku, aku pengen belajar jadi versi yang lebih baik buat kita berdua 💞🥰');
  
 
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank');
}
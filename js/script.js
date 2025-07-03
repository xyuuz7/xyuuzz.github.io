// JavaScript untuk fungsionalitas website

// Fungsi untuk smooth scroll (akan diimplementasikan nanti)
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM sepenuhnya dimuat dan di-parse. Siap untuk beraksi seperti Sung Jinwoo!');

    // Implementasi smooth scroll untuk link navigasi
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Sesuaikan offset jika ada header fixed
                    behavior: 'smooth'
                });
                // Candaan kecil saat navigasi
                console.log(`Navigasi ke ${targetId}. Cepat seperti Shadow Monarch!`);
            }
        });
    });

    // Tombol "Contact Me" di hero section
    const contactMeButtonHero = document.querySelector('.hero-buttons .btn-secondary');
    if (contactMeButtonHero) {
        contactMeButtonHero.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                // Menggunakan fungsi scroll yang sudah ada atau langsung scrollIntoView
                window.scrollTo({
                    top: contactSection.offsetTop - 70, // Sesuaikan offset
                    behavior: 'smooth'
                });
                console.log("Mencoba menghubungi... Semoga pesannya sampai, tidak seperti surat cinta yang tak terkirim ke Alya-san!");
            }
        });
    }

    // Update tahun di footer secara dinamis
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// Fungsi lain akan ditambahkan di sini jika diperlukan
// Misalnya, untuk validasi form, animasi, dll.

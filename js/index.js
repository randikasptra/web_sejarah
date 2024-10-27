window.onscroll = () => {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;


    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


const navbar = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu')
navbar.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

function submitQuiz() {
    // Jawaban benar
    const correctAnswers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'c',
        q5: 'b'
    };

    let score = 0;
    const maxScore = 100; // Skor maksimum 100 poin
    const pointsPerQuestion = 20; // Poin per pertanyaan
    let title = '';
    let text = '';
    let icon = '';

    // Cek jawaban
    for (let i = 1; i <= 5; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (answer) {
            if (answer.value === correctAnswers[`q${i}`]) {
                score += pointsPerQuestion; // Tambah poin jika benar
            }
        }
    }

    // Menggunakan switch untuk menentukan pesan berdasarkan skor
    switch (score) {
        case 100:
            title = 'Sempurna!';
            text = 'Skor: 100/100 - Semua jawaban benar!';
            icon = 'success';
            break;
        case 80:
            title = 'Bagus!';
            text = 'Skor: 80/100 - Hanya satu jawaban yang salah.';
            icon = 'success';
            break;
        case 60:
            title = 'Cukup Baik';
            text = 'Skor: 60/100 - Anda menjawab 3 soal dengan benar.';
            icon = 'info';
            break;
        case 40:
            title = 'Perlu Ditingkatkan';
            text = 'Skor: 40/100 - Hanya 2 soal yang benar.';
            icon = 'warning';
            break;
        case 20:
            title = 'Belajar Lagi';
            text = 'Skor: 20/100 - Anda hanya menjawab 1 soal dengan benar.';
            icon = 'warning';
            break;
        default:
            title = 'Coba Lagi!';
            text = 'Skor: 0/100 - Belum ada jawaban yang benar.';
            icon = 'error';
    }

    // Tampilkan feedback dengan SweetAlert
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'OK'
    });
}



function showAlert() {
    Swal.fire({
        title: 'Mohon Maaf',
        text: 'Masih dalam pengembangan Sistem',
        icon: 'warning',
        confirmButtonText: 'OK'
    });
}
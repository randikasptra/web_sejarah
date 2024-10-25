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
    let feedback = '';

    // Cek jawaban
    for (let i = 1; i <= 5; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        const resultDiv = document.getElementById('result');

        if (answer) {
            if (answer.value === correctAnswers[`q${i}`]) {
                score += pointsPerQuestion; // Tambah poin jika benar
                feedback += `Soal ${i}: Benar<br>`;
            } else {
                feedback += `Soal ${i}: Salah, jawaban yang benar adalah ${correctAnswers[`q${i}`].toUpperCase()}<br>`;
            }
        } else {
            feedback += `Soal ${i}: Anda belum memilih jawaban<br>`;
        }
    }

    // Tampilkan skor akhir dan feedback
    feedback += `<br>Skor akhir Anda: ${score}/${maxScore}`;
    document.getElementById('result').innerHTML = feedback;
}

 


function showAlert() {
    Swal.fire({
        title: 'Mohon Maaf',
        text: 'Masih dalam pengembangan Sistem',
        icon: 'warning',
        confirmButtonText: 'OK'
    });
}
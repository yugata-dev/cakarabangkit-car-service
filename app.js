const hamburger = document.querySelector('.hamburger-menu')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active')
})


document.querySelector(".feedback-form").addEventListener("submit", function (e) {
    e.preventDefault(); // cegah reload default
    const form = this;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    }).then(response => response.json())
        .then(result => {
            alert("Pesan berhasil dikirim!");
            form.reset(); // reset semua input jadi kosong
        })
        .catch(error => {
            alert("Terjadi kesalahan, coba lagi.");
        });
});
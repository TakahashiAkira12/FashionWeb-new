document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng cuộn mượt
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form liên hệ
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
        this.reset();
    });
});

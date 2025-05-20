document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector('.intro');
    // Only select visible logo (desktop or mobile)
    const logoSpans = [...document.querySelectorAll('.logo')].filter(img => {
        return window.getComputedStyle(img).display !== 'none';
    });
    const content = document.getElementById('content');  

    // Show logo image (or images if you want)
    logoSpans.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('show');
        }, idx * 400);
    });

    // Fade out logo after delay
    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('show');
                span.classList.add('fade');
            }, idx * 200);
        });
    }, 2000);

    // Remove splash and reveal content
    setTimeout(() => {
        intro.classList.add('hide-intro');
        document.body.style.overflow = "auto";
        content.style.display = 'block';
    }, 2500);
});

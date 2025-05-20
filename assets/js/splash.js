document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector('.intro');
    const logoSpans = document.querySelectorAll('.logo');
    const content = document.getElementById('content');  // Get the content div

    // Show letters one by one for intro animation
    logoSpans.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('show');
        }, idx * 400);
    });

    // Fade out letters after delay
    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('show');
                span.classList.add('fade');
            }, idx * 200);
        });
    }, 2000);

    // Remove splash screen and display content
    setTimeout(() => {
        intro.classList.add('hide-intro');
        document.body.style.overflow = "auto";  // Enable scrolling
        content.style.display = 'block';  // Show the main content
    }, 2500);  // Wait 3 seconds before showing the content
});
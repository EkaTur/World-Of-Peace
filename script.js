const toBook = document.querySelectorAll('.cta');

toBook.forEach((button, index) => {
    button.addEventListener('click', () => {
        Swal.fire({
            title: 'You can call or text us for reservation',
            icon: 'info',
            html:
                '<a href="tel:+31686158639">CALL</a> ' +
                'OR ' + 
                ' <a href="mailto:savosya23@gmail.com">TEXT</a>',
        })
    })
});

gsap.from('.navbar', {y: -100, opacity: 0, duration: 1.5, delay: 1})

gsap.registerPlugin(ScrollTrigger);

const animElements = document.querySelectorAll('.anim');

animElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top center",
        },
        x: -300,
        opacity: 0,
        duration: 1
    });
});

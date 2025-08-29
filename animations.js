gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.7,
});

gsap.from('.animate-moduvo', {
    scrollTrigger: '.animate-moduvo',
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.3,
});

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2,
});

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.5,
});

gsap.from('.animate-navbar', {
    duration: 0.3,
    opacity: 0,
    x: -150,
    stagger: 0.2,
    delay: 0.4,
});

gsap.from('.animate-brons', {
    scrollTrigger: '.animate-brons',
    duration: 2.5,
    opacity: 0.4,
    x: -2000,
    stagger: 0.6,
    delay: 0.6,
});

gsap.from('.animate-brons-kort', {
    scrollTrigger: '.animate-brons-kort',
    duration: 2.6,
    opacity: 0.4,
    y: -2000,
    stagger: 0.6,
    delay: 0.9,
});

gsap.from('.animate-silver', {
    scrollTrigger: '.animate-silver',
    duration: 2.5,
    opacity: 0.4,
    x: -2000,
    stagger: 0.6,
    delay: 0.6,
});

gsap.from('.animate-silver-kort', {
    scrollTrigger: '.animate-silver-kort',
    duration: 2.6,
    opacity: 0.4,
    y: -2000,
    stagger: 0.6,
    delay: 0.9,
});

gsap.from('.animate-guld', {
    scrollTrigger: '.animate-guld',
    duration: 2.5,
    opacity: 0.4,
    x: -2000,
    stagger: 0.6,
    delay: 0.6,
});

gsap.from('.animate-guld-kort', {
    scrollTrigger: '.animate-guld-kort',
    duration: 2.6,
    opacity: 0.4,
    y: -2000,
    stagger: 0.6,
    delay: 0.9,
});


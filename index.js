
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you for your message! I will get back to you soon.');
});



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const profileImage = document.querySelector('.hero img');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s ease-in-out';
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});


document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = `Proficient in ${skill.innerHTML}`;
        tooltip.style.position = 'absolute';
        tooltip.style.padding = '5px';
        tooltip.style.background = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.top = `${skill.getBoundingClientRect().top - 30}px`;
        tooltip.style.left = `${skill.getBoundingClientRect().left}px`;
        document.body.appendChild(tooltip);

        skill.addEventListener('mouseout', () => {
            document.body.removeChild(tooltip);
        });
    });
});



const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('animate-section');
        }
    });
});


const buttons = document.querySelectorAll('.btn-custom');

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'translateY(-5px)';
        button.style.transition = 'transform 0.3s ease';
        button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseout', function() {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});


const title = document.querySelector('.hero h1');
const text = "ALVIN LO";
let index = 0;

function typeText() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150); 
    }
}

window.onload = typeText;



document.querySelectorAll('.btn-custom').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);

        
        const x = e.clientX - button.getBoundingClientRect().left;
        const y = e.clientY - button.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600); 
    });
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseout', function() {
        card.style.transform = 'rotateY(0)';
    });
});

particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        shape: { type: 'circle' },
        size: { value: 5 },
        move: { speed: 3 }
    }
});



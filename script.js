// ==========================================
// GYMMY FOODS - Main Website JavaScript
// ==========================================


// --------------------------
// Mobile Navigation
// --------------------------

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {

  const open = nav?.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(Boolean(open))
  );

});

nav?.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuToggle?.setAttribute(
      'aria-expanded',
      'false'
    );

  });

});


// --------------------------
// Current Year
// --------------------------

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// --------------------------
// Reveal Animations
// --------------------------

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add('visible');
  });

}


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {

  contactForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    const name =
      String(formData.get('name') || '').trim();

    const company =
      String(formData.get('company') || '').trim();

    const email =
      String(formData.get('email') || '').trim();

    const topic =
      String(formData.get('topic') || 'General enquiry').trim();

    const message =
      String(formData.get('message') || '').trim();


    // Validation
    if (!name || !email || !message) {

      alert(
        'Please complete your name, email address and message.'
      );

      return;
    }


    const recipient =
      'hello.gymmyfoods@gmail.com';


    const subject =
      `GYMMY FOODS Website Enquiry - ${topic}`;


    const body = `
GYMMY FOODS WEBSITE ENQUIRY

Name: ${name}
Company: ${company || 'Not provided'}
Email: ${email}
Enquiry Type: ${topic}

Message:
${message}

----------------------------------------
Submitted through the official
GYMMY FOODS website.

CLEAN FOOD. STRONG YOU.
`.trim();


    // Gmail compose link
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(recipient) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);


    // Open Gmail in the SAME TAB.
    // This avoids popup blockers.
    window.location.href = gmailUrl;

  });

}


// --------------------------
// Smooth Scrolling
// --------------------------

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener('click', event => {

      const targetId =
        link.getAttribute('href');

      if (
        !targetId ||
        targetId === '#'
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });

  });

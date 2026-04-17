const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
  if (started) return;
  started = true;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounters();
    }
  });
}, {
  threshold: 0.5
});

observer.observe(document.getElementById('stats'));

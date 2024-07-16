const translations = {
  ru: {
    greetings__title: "Привет, я Алексей Несин.",
    greetings__text: "Middle+ разработчик с более чем 4 годами реального опыта.",
    greetings__text2: "Я серьезно подхожу к своей работе, и всегда готов обучаться.",
    greetings__text3: "Вливаюсь в любой коллектив, люблю и готов общаться.",
    greetings__text4: "Готов поделиться своим опытом с новыми специалистами.",
    greetings__text5: "И я буду идеальным дополнением вашей компании :)",
  },
  en: {
    greetings__title: "Hello, I am Alexey Nesin.",
    greetings__text: "Middle+ developer with more than 4 years of real experience.",
    greetings__text2: "I am serious about my work, and always ready to learn.",
    greetings__text3: "I'm friendly to any team, love to talk and listen.",
    greetings__text4: "Would love to share my experience with new specialists.",
    greetings__text5: "I'll be an ideal addition to your company :)",
  }
}

let isArrowRemoved = false;
const events = [];
const thrasholdPageScroll = 0.3;

window.addEventListener('scroll', (event) => {
  const next = document.querySelector('.next');
  const scrollPercent = window.scrollY / window.innerHeight;
  if (scrollPercent  > thrasholdPageScroll) {
    next.classList.add('hidden');
    isArrowRemoved = true;
  } else if (isArrowRemoved) {
    next.classList.remove('hidden');
    isArrowRemoved = false;
  }
})
function changeLanguage() {
  const lang = document.querySelector('.lang__active').id;
  const title = document.querySelector('.greetings__title');
  const text1 = document.querySelector('.greetings__text1');
  const text2 = document.querySelector('.greetings__text2');
  const text3 = document.querySelector('.greetings__text3');
  const text4 = document.querySelector('.greetings__text4');
  const text5 = document.querySelector('.greetings__text5');
  title.textContent = translations[lang].greetings__title;
  text1.textContent = translations[lang].greetings__text;
  text2.textContent = translations[lang].greetings__text2;
  text3.textContent = translations[lang].greetings__text3;
  text4.textContent = translations[lang].greetings__text4;
  text5.textContent = translations[lang].greetings__text5;
}

const ru = document.querySelector('#ru');
const en = document.querySelector('#en');
ru.addEventListener('click', () => {
  if(ru.classList.contains('lang__active')) return;
  ru.classList.add('lang__active');
  en.classList.remove('lang__active');
  changeLanguage()
});

en.addEventListener('click', () => {
  if(en.classList.contains('lang__active')) return;
  en.classList.add('lang__active');
  ru.classList.remove('lang__active');
  changeLanguage()
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    effect: 'cards',
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    }
  })
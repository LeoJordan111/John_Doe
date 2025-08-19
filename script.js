
  // Gestion du mode clair/sombre
  const buttonlight = document.getElementById('buttonlight');
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  buttonlight.innerText = 'Lightmode';

  buttonlight.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      buttonlight.innerText = 'Retour au darkmode';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      buttonlight.innerText = 'Lightmode';
    }
  });

  // Gestion de la galerie d'images
const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const img = item.querySelector('.img');
    item.addEventListener('click', () => {
      if (img.id === 'image-paysage') {
        item.style.backgroundColor = 'blue';
      } else {
        if (img.classList.contains('img-active')) {
          img.classList.remove('img-active');
        } else {
          galleryItems.forEach(otherItem => {
            otherItem.querySelector('.img').classList.remove('img-active');
          });
          img.classList.add('img-active');
        }
      }
    });
  });

  const nature = document.querySelector('#nature');
  nature.addEventListener('click', () => {
    const existingParagraphe = document.querySelector('#paragraphe');

    if (existingParagraphe) {
      existingParagraphe.remove();
    } else {
      const paragraphe = document.createElement('p');
      const text = 'Coucou tu as trouvé Charlie !!';
      paragraphe.innerText = text;
      paragraphe.id = 'paragraphe';
      nature.appendChild(paragraphe);
    }
  });

  const buttonjeu = document.getElementById('buttonjeu');
  buttonjeu.addEventListener('click', () => {
    alert('Où est Charlie !!?');
  });

  // Gestion du carrousel d'images
  const slider = document.getElementById('homepage-slider');
  const imagesInner = slider.querySelector('.images-inner');
  const slides = slider.querySelectorAll('.image-slide');
  const prevButton = document.getElementById('button-prev');
  const nextButton = document.getElementById('button-next');
  const radios = slider.querySelectorAll('input[name="slider"]');
  let currentIndex = 0;

  function updateSlider(index) {
    imagesInner.style.transform = `translateX(-${index * 0.001}%)`;
    radios[index].checked = true;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  setInterval(nextSlide, 3000);


buttonlight.addEventListener('click', () => {

       if  (document.body.style.backgroundColor=='black') {
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
            document.getElementById('buttonlight').innerText = 'Retour au darkmode';
    } else {
            document.body.style.backgroundColor='black';
            document.body.style.color='white';
            document.getElementById('buttonlight').innerText = 'Lightmode';
}
}
)

const galleryItem = document.querySelectorAll('.gallery-item');

galleryItem.forEach(galleryItem => {
    galleryItem.addEventListener('click', () => {
        if  (galleryItem.style.width == '45%') {
        galleryItem.style.width = '100%';
        galleryItem.style.position = 'absolute';
    } else {
        galleryItem.style.width = '45%';
        galleryItem.style.position = 'relative';
    }
    });
  });

     // avec l'ID
     const nature = document.querySelector('#nature')     

     nature.addEventListener('click', () => {
        const paragraphe = document.querySelector('#paragraphe')

        if  (paragraphe) {
            paragraphe.remove()
        } else {
            const paragraphe = document.createElement('p')
        
        const text = 'Coucou tu as trouvé Charlie !!'
        //innertext remplace et textcontent ajoute à la suite
        paragraphe.innerText = text
        paragraphe.id = 'paragraphe'
        // console.log(paragraphe)

        // à quelle élèment je vais le mettre en enfant
        nature.appendChild(paragraphe)
        }
     }
    )

    buttonjeu.addEventListener('click', () => {
        alert('Où est Charlie !!?')
    })
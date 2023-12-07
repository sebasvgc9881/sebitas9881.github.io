// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://previews.123rf.com/images/mirawonderland/mirawonderland1606/mirawonderland160600030/59794518-retrato-vertical-de-un-perro-pastor-de-shetland-bonita-en-un-fondo-blanco-frente-a-la-c%C3%A1mara.jpg',
  'https://png.pngtree.com/thumb_back/fw800/background/20230414/pngtree-vertical-portrait-of-a-lovely-border-collie-dog-in-the-nature-photo-image_2422487.jpg',
  'https://previews.123rf.com/images/noemosu/noemosu1510/noemosu151000070/47059204-una-vista-vertical-de-un-bello-ejemplo-de-un-perro-mast%C3%ADn-sentado-en-un-jard%C3%ADn.jpg',
  'https://www.xtrafondos.com/descargar.php?id=5797&vertical=1',
  'https://www.shutterstock.com/image-photo/vertical-portrait-adorable-dog-field-600nw-2197924517.jpg',
  'https://i1.sndcdn.com/artworks-2GaRR9CLAlKlvYzQ-ac22Dg-t500x500.jpg',
  'https://phantom-marca-mx.unidadeditorial.es/e4ab45333ea4e4a6dee6114223ce69b5/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/09/28/16959377868202.jpg',
  'https://estag.fimagenes.com/img/1/6/l/S/6lS_900.jpg'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 8],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}
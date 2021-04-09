import MargheritaImg from '../images/pizza/margherita.jpg';
import RomaImg from '../images/pizza/roma.jpg';
import PepperoniImg from '../images/pizza/pepperoni.jpg';
import AmericanSpicyImg from '../images/pizza/americanSpicy.jpg';
import QuattroStagioniImg from '../images/pizza/quattroStagioni.jpg';
import HamBaconImg from '../images/pizza/hamBacon.jpg';
import MeatLoversImg from '../images/pizza/meatLovers.jpg';

const FoodData = [
  {
    categoryName: 'pizza',
    data: [
      {
        img: MargheritaImg,
        alt: 'pizza',
        summary: 'Margherita',
        details: 'Sos de roșii și Mozzarella.',
        price: '17.50',
      },
      {
        img: RomaImg,
        alt: 'pizza',
        summary: 'Roma',
        details: 'Sos de roșii, Mozzarella, șuncă, ciuperci, măsline negre.',
        price: '22.00',
      },
      {
        img: PepperoniImg,
        alt: 'pizza',
        summary: 'Pepperoni',
        details: 'Sos de roșii, Mozzarella, dublu salam Pepperoni.',
        price: '24.50',
      },
      {
        img: AmericanSpicyImg,
        alt: 'pizza',
        summary: 'American Spicy',
        details:
          'Sos de roșii, Mozzarella, salam Pepperoni, roșii cubulețe, ardei capia, ceapă roșie, jalapeños, sos Samourai (produs picant).',
        price: '24.50',
      },
      {
        img: QuattroStagioniImg,
        alt: 'pizza',
        summary: 'Quattro Stagioni',
        details: 'Sos de roșii, Mozzarella, șuncă, salam Pepperoni, ciuperci, ardei gras. ',
        price: '24.50',
      },
      {
        img: HamBaconImg,
        alt: 'pizza',
        summary: 'Ham & Bacon',
        details: 'Sos de roșii, Mozzarella, bacon, șuncă, ciuperci, roșii cubulețe, porumb.',
        price: '24.50',
      },
      {
        img: MeatLoversImg,
        alt: 'pizza',
        summary: 'Meat Lovers',
        details: 'Sos de roșii, Mozzarella, piept de pui, cubulețe cu carne de vită, salam Pepperoni, bacon.',
        price: '24.50',
      },
    ],
  },
];

export default FoodData;

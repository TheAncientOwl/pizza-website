import MargheritaImg from '../images/pizza/margherita.jpg';
import RomaImg from '../images/pizza/roma.jpg';
import PepperoniImg from '../images/pizza/pepperoni.jpg';
import AmericanSpicyImg from '../images/pizza/americanSpicy.jpg';
import QuattroStagioniImg from '../images/pizza/quattroStagioni.jpg';
import HamBaconImg from '../images/pizza/hamBacon.jpg';
import MeatLoversImg from '../images/pizza/meatLovers.jpg';

import CartofiCoptiImg from '../images/antreuri/cartofiCopti.jpg';
import CartofiCoptiMozzarellaImg from '../images/antreuri/cartofiCoptiMozzarella.jpg';
import GarlicBreadImg from '../images/antreuri/garlicBread.jpg';
import QuesadillaImg from '../images/antreuri/quesadilla.jpg';
import ChickenWingsImg from '../images/antreuri/chickenWings.jpg';

import BologneseImg from '../images/paste/bolognese.jpg';
import CarbonaraImg from '../images/paste/carbonara.jpg';
import TomatoVeggieImg from '../images/paste/tomatoVeggie.jpg';
import ChickenPastaImg from '../images/paste/chickenPasta.jpg';

import TunaImg from '../images/salate/tuna.jpg';
import GreceascaImg from '../images/salate/greceasca.jpg';
import CaesarImg from '../images/salate/caesar.jpg';

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
  {
    categoryName: 'antreuri',
    data: [
      {
        img: CartofiCoptiImg,
        alt: 'antreu',
        summary: 'Cartofi copți',
        details: 'Cartofi copţi, serviți cu unul dintre sosurile noastre.',
        price: '9.50',
      },
      {
        img: CartofiCoptiMozzarellaImg,
        alt: 'antreu',
        summary: 'Cartofi copți cu Mozzarella',
        details: 'Cartofi copţi cu Mozzarella, serviți cu unul dintre sosurile noastre.',
        price: '11.50',
      },
      {
        img: GarlicBreadImg,
        alt: 'antreu',
        summary: 'Garlic bread cu Mozzarella',
        details: '3 felii de pâine rumenite în cuptor, asezonate cu aromă de usturoi și acoperite cu Mozzarella.',
        price: '7.50',
      },
      {
        img: QuesadillaImg,
        alt: 'antreu',
        summary: 'Quesadilla pui',
        details:
          'Piept de pui, Cheddar, ardei capia, ceapă roșie, tortilla. Se servește cu unul dintre sosurile noastre.',
        price: '20.50',
      },
      {
        img: ChickenWingsImg,
        alt: 'antreu',
        summary: 'Barbeque Chicken Wings',
        details: 'Aripioare de pui trecute prin sos Barbeque.',
        price: '16.50',
      },
    ],
  },
  {
    categoryName: 'paste',
    data: [
      {
        img: BologneseImg,
        alt: 'paste',
        summary: 'Penne Bolognese',
        details: 'Penne în sos ragù, cubulețe cu carne de vită,  Mozzarella.',
        price: '27.50',
      },
      {
        img: CarbonaraImg,
        alt: 'paste',
        summary: 'Carbonara',
        details: 'Penne în sos alb de smântână și usturoi, bacon, Mozzarella, Parmezan, jalapeños (la cerere).',
        price: '27.50',
      },
      {
        img: TomatoVeggieImg,
        alt: 'paste',
        summary: 'Penne Tomato Veggie',
        details: 'Penne în sos de roșii, ciuperci, roșii Cherry, Parmezan.',
        price: '27.50',
      },
      {
        img: ChickenPastaImg,
        alt: 'paste',
        summary: 'Chicken Pasta',
        details: 'Penne în sos alb de smântână, piept de pui, pesto verde, Parmezan.',
        price: '31.50',
      },
    ],
  },
  {
    categoryName: 'salate',
    data: [
      {
        img: TunaImg,
        alt: 'salata',
        summary: 'Salată Tuna',
        details:
          'Ton, măsline verzi, porumb, ardei capia, ceapă roșie, mix de salată endivia, frisée, sfeclă roşie și un sos la alegere.',
        price: '19.50',
      },
      {
        img: GreceascaImg,
        alt: 'salata',
        summary: 'Salată Grecească',
        details:
          'Feta, măsline verzi, roşii Cherry, castraveţi, ceapă roșie, ardei capia, oregano, mix de salată endivia, frisée, sfeclă roşie și un sos la alegere.',
        price: '19.50',
      },
      {
        img: CaesarImg,
        alt: 'salata',
        summary: 'Salată Caesar',
        details:
          'Piept de pui, bacon, Parmezan, roșii Cherry, crutoane, mix de salată endivia, frisée, sfeclă roşie și un sos la alegere.',
        price: '20.50',
      },
    ],
  },
];

export default FoodData;

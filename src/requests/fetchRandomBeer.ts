import axios from 'axios';
import uniqBy from 'lodash.uniqby'
import { BeerData } from './interfaces';

const fetchRandomBeer = async () => {
  const response = await axios.get('https://api.punkapi.com/v2/beers/random');

  const { data }: { data: BeerData[] } = response;

  const {
    name,
    image_url: imageUrl,
    tagline,
    description,
    abv,
    ibu,
    ingredients: { malt: malts, hops },
    food_pairing: foodPairing,
    brewers_tips: tipText,
    contributed_by
  } = data[0];

  const tipAuthor = contributed_by.split(' ').slice(0, 2).join(' ');

  const formattedData = {
    name,
    imageUrl,
    tagline,
    description,
    abv,
    ibu,
    malts: malts?.map((item) => item.name),
    hops: uniqBy(hops, 'name').map((item) => item.name),
    foodPairing,
    tipText,
    tipAuthor,
  }

  return formattedData;
}

export { fetchRandomBeer }

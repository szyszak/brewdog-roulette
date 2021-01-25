import axios from 'axios';
import uniqBy from 'lodash.uniqby'

export interface BeerData {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string | null;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: TempOrAmountOrVolumeOrBoilVolume;
  boil_volume: TempOrAmountOrVolumeOrBoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing?: string[] | null;
  brewers_tips: string;
  contributed_by: string;
}

interface TempOrAmountOrVolumeOrBoilVolume {
  value: number;
  unit: string;
}

interface Method {
  mash_temp?: MashTempEntity[] | null;
  fermentation: Fermentation;
  twist: string;
}

interface MashTempEntity {
  temp: TempOrAmountOrVolumeOrBoilVolume;
  duration: number;
}

interface Fermentation {
  temp: TempOrAmountOrVolumeOrBoilVolume;
}

interface Ingredients {
  malt?: MaltEntity[] | null;
  hops?: HopsEntity[] | null;
  yeast: string;
}

interface MaltEntity {
  name: string;
  amount: TempOrAmountOrVolumeOrBoilVolume;
}

interface HopsEntity {
  name: string;
  amount: TempOrAmountOrVolumeOrBoilVolume;
  add: string;
  attribute: string;
}


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
    contributed_by: tipAuthor
  } = data[0];

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
    tipAuthor
  }

  return formattedData;
}

export { fetchRandomBeer }

import { v4 as uuidv4 } from 'uuid';

// Import images
import HeritageImage from '../../public/images/brands/heritage.jpeg';
import NownowImage from '../../public/images/brands/nownow.jpeg';
import StandbicImage from '../../public/images/brands/standbic.png';
import WayaImage from '../../public/images/brands/waya.jpeg';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Heritage',
		img: HeritageImage,
	},
	{
		id: uuidv4(),
		title: 'Waya Multilinks',
		img: WayaImage,
	},
	{
		id: uuidv4(),
		title: 'Stanbic',
		img: StandbicImage,
	},
	{
		id: uuidv4(),
		title: 'NowNow',
		img: NownowImage,
	},
];

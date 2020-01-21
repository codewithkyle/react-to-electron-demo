interface Product {
	name: string;
	description: string;
	slug: string;
	image: string;
	dairyFree: boolean;
	calories: number;
	protein: number;
	seasonal: boolean;
	uuid: string;
	primaryColor: string;
	secondaryColor: string;
	type: 'pint' | 'pops';
}

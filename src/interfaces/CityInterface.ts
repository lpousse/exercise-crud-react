interface CityInterface {
	id: number,
	nom: string,
	region: {
		code: string,
		nom: string
	},
	departement: {
		code: string,
		nom: string
	}
	centre: {
		type: string,
		coordinates: number[];
	}
}

export default CityInterface;
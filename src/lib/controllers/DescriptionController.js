export class DescriptionController {

	constructor(Knekt) {
		this.knekt = Knekt;
	}

	plugins(_, res) {
		res({success: true, err_code: null, plugins: this.knekt.plugins});
	}
}
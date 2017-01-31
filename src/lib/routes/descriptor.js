import { DescriptionController } from '../controllers/DescriptionController';

export default (knekt) => {

	let descriptionController = new DescriptionController(knekt);
	knekt.bindServer(descriptionController);
	
	return [
		{
    		method: 'GET',
    		path: '/core/descriptor',
    		handler: descriptionController.plugins
		}
	]
}
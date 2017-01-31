import { AuthController  } from '../controllers/AuthController';

export default (knekt) => {

	let authController = new AuthController();
	knekt.bindServer(authController);

	return {
    	method: 'POST',
    	path: '/core/login',
    	handler: authController.login
	}
}
import jwt from 'jsonwebtoken';
import Config from '../../config.js';

export class AuthController {

	constructor() {}

	login(req, reply) {
		if (req.payload.username !== Config.user.username || req.payload.password !== Config.user.password) {
			return reply({err_code: 'invalid_credentials', token: null}).code(401);
		}
		return reply({err_code: null, token: jwt.sign({ username: req.payload.username }, Config.secret)});
	}

}
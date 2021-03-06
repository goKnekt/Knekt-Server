/**
 * Created by Alex on 29/01/2017.
 */
 import Hapi from 'hapi';

 //core routes
 import Descriptor from './routes/Descriptor';
 import Authenticator from './routes/Auth';

 export class Knekt {
 	constructor() {
 		this._server = new Hapi.Server();
 		this.plugins = [];
 	}

 	setConnection(host, port) {
 		this._server.connection({host: host, port: port});
 	}

 	bindServer(item) {
 		this._server.bind(item);
 	}

 	listen() {
 		this._server.start((err) => {
 			if (err) {
 				throw err;
 			}
 			this._registerCoreRoutes();
 			console.log(`Knekt running at ${this._server.info.uri} !`);
 		});
 	}

 	register(plugins) {
 		plugins.forEach((plugin) => {
 			this.plugins.push(new plugin(this).properties);
 		});
 	}

 	addRoute(parameters) {
 		this._server.route(parameters);
 	}

 	_registerCoreRoutes() {
 		this._server.route(Descriptor(this).map((route) => {return route}));
 		this._server.route(Authenticator(this));
 	}
 }
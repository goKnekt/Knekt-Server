export class Plugin {

	constructor(Knekt) {
		this.registerRoutes(Knekt);
	}

	properties = {
		name: "My Plugin",
		description: "A demo plugin",
		website: "http://Knekt.co",
		author: "Alex Catchpole"
	};

	registerRoutes(Knekt) {
		//Namespace your routes!
		Knekt.addRoute({
    		method: 'GET',
    		path: '/my-plugin/test',
    		handler: function (request, reply) {
        		reply('Hello, world!');
    		}
		});
	}
}
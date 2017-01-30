export class Plugin {

	constructor(Knekt) {
		this.registerRoutes(Knekt);
	}

	//properties is how you provide information to the client.
	properties = {
		name: "My Plugin",
		description: "A demo plugin",
		website: "http://Knekt.co",
		author: "Alex Catchpole",
		routes: [
			{
				route: '/my-plugin/test',
				method: 'GET'
			},
			{
				route: '/my-plugin/test',
				method: 'POST',
				parameters: [
					{
						demo: "string"
					}
				]
			}
		]
	};

	//Namespace your routes!
	registerRoutes(Knekt) {
		Knekt.addRoute({
    		method: 'GET',
    		path: '/my-plugin/test',
    		handler: function (request, reply) {
        		reply('Hello, world!');
    		}
		});
		Knekt.addRoute({
    		method: 'POST',
    		path: '/my-plugin/test',
    		handler: function (request, reply) {
        		reply(request.payload);
    		}
		});
	}
}
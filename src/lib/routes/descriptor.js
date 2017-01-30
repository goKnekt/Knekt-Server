export default (knekt) => {
	return {
    	method: 'GET',
    	path: '/core/descriptor',
    	handler: function (request, reply) {
        	reply(knekt.plugins);
    	}
	}
}
Router.configure({
	layoutTemplate: "main"
});

Router.map(function(){
	// HomePage will dispay all tickets of the client
	this.route('home',{
		path: "/",
		template: 'my_tickets',
	});
});
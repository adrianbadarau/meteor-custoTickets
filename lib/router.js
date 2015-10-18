Router.configure({
	layoutTemplate: "main"
});

Router.map(function(){
	// HomePage will dispay all tickets of the client
	this.route('home',{
		path: "/",
		template: 'my_tickets',
		data: function(){
			templateData = {
				tickets: Tickets.find({customer: Meteor.userId()}),
			}

			return templateData;
		}
	});

	this.route('show_ticket',{
		path: 'tickets/:_id',
		template: 'show_ticket',
		data: function(){
			return Tickets.findOne({_id: this.params._id});;
		}
	})
});
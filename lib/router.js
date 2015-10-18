Router.configure({
	layoutTemplate: "main"
});

var onBeforeActions = {
	isStaff: function(){
		// Check if the user is logged in
		if(Meteor.user()){
			// Now we check to see if the user is a staff memeber
			if(Meteor.user().profile.userType === 'staff'){
				Router.go('/staff');
			}else{
				this.next();
			}
		}else{
			this.next();
		}
	}
}

Router.onBeforeAction(onBeforeActions.isStaff, {
	only: ["home"],
});

Router.map(function(){
	// HomePage will dispay all tickets of the client
	this.route('home',{
		path: "/",
		template: 'my_tickets',
		data: function(){
			templateData = {
				tickets: Tickets.find({customer: Meteor.userId()}),
				departments: Departments.find()
			}

			return templateData;
		}
	});
	// This will show the ticket info and be able to leave replies on the ticket
	this.route('show_ticket',{
		path: 'tickets/:_id',
		template: 'show_ticket',
		data: function(){
			return Tickets.findOne({_id: this.params._id});;
		}
	});
	// Route for staff members
	this.route('staff',{
		path:"/staff",
		template: "staff_tickets",
		data: function(){
			templateData = {
				tickets: Tickets.find()
			};
			return templateData;
		}
	});
	// Route for managing all departments
	this.route('departments',{
		path:'staff/departments',
		template: "departments",
		data: function (){
			templateData = {
				departments: Departments.find()
			}

			return templateData;
		}
	});
	// Route for creating departments
	this.route('create_department',{
		path:"staff/departments/create",
		template: "create_department"
	})
});







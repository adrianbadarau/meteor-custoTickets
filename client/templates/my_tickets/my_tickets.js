Template.my_tickets.events({
	'submit #open_ticket_form': function (event) {
		event.preventDefault();

		var ticket = {
			name: event.target.name_field.value,
			email: event.target.email_field.value,
			subject: event.target.subject_field.value,
			department: event.target.department_select.value,
			priority: event.target.priority_select.value,
			message: event.target.message_t_area.value,
			status: "new",
			customer: Meteor.userId(),
			createdAt: new Date(),
		}

		var ticketId = Tickets.insert(ticket);

		$('#open_ticket').modal('hide');

		FlashMessages.sendSuccess("Your ticket "+ticketId+" has been succesfuly created");
	},
	'click #close_ticket': function (event) {
		event.preventDefault();
		if(confirm("Are you sure?")){
			Tickets.remove(this._id);
			flashMessages.sendSuccess("Ticket closed !");
		}
	},
});
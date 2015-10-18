Template.show_ticket.events({
	'submit #send_reply': function (event) {
		event.preventDefault();

		var reply = event.target.reply_message_t_area.value;
		var userType = 'customer'
		if(Meteor.user().profile.userType == "staff"){
			userType = staff;
		}

		Tickets.update({
			_id: this._id
		}, {
			$push:{
				replies:{
					reply: reply,
					userType: userType,
					user: Meteor.userId(),
					replyDate: new Date(),
				}
			}
		});

		event.target.reply_message_t_area.value = "";
		FlashMessages.sendSuccess("Reply Added");
	}
});
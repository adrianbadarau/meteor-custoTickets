Template.login.helpers({
	userEmail: function () {
		return Meteor.user().emails[0].address;
	}
});

Template.login.events({
	'click #register_link': function (event) {
		event.preventDefault();
		$('#sign-in').hide();
		$("#register").show();
	},
	"click #signin_link": function(event){
		event.preventDefault();
		$("#sign-in").show();
		$("#register").hide();
	},
	"click #sign_out":function(event){
		event.preventDefault();

		Meteor.logout(function(err){
			if(err){
				FlashMessages.sendError(err.reason);
			}else{
				FlashMessages.sendSuccess("you are now looged out");
				Router.go("/");
			}
		})
	},
	"submit .form-signin": function(event){
		event.preventDefault();

		var email = trimInput(event.target.email.value);
		var pass = trimInput(event.target.password.value);

		Meteor.loginWithPassword(email, pass, function(err){
			if(err){
				event.target.email.value = email;
				FlashMessages.sendError(err.reason);
			}else{
				FlashMessages.sendSuccess("you are now logged in");
				Router.go("/");
			}
		})
	},
	"submit .form-register": function(event){
		event.preventDefault();

		var email = trimInput(event.target.email.value);
		var pass = trimInput(event.target.password.value);
		var pass2 = trimInput(event.target.password2.value);

		if(pass === pass2){
			Accounts.createUser({
				password: pass,
				email: email,
				profile: {
					userType: 'customer'
				}
			}, function (err) {
				if(err){
					FlashMessages.sendError(err.reason)
				}else{
					FlashMessages.sendSuccess("Account created you are now logged in");
					Router.go("/");
				}
			});
		}else{
			FlashMessages.sendError("Passwords do not match");
		}
	},
});

var trimInput = function(val){
	return val.replace(/^\s*|\s$/g, "");
}
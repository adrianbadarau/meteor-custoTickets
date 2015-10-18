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
	"submit .form-signin": function(event){
		event.preventDefault();

		var email = trimInput(event.target.email.value);
		var pass = trimInput(event.target.password.value);

		
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
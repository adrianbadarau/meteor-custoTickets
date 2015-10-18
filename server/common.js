Meteor.startup(function(){
	if(Meteor.users.find({profile:{userType: 'admin'}}).count() === 0){
		Accounts.createUser({
			password: 'admin',
			email: 'admin@admin',
			profile: {
				userType: 'admin'
			}
		});
		Accounts.createUser({
			password: 'admin',
			email: 'staff@staff',
			profile: {
				userType: 'staff'
			}
		});
	}
});
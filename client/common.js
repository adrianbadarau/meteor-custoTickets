Template.registerHelper('formatDate',function(date){
	return moment(date).format("MMMM Do YYYY");
});

Template.registerHelper('capFirst', function(text){
	return text.charAt(0).toUpperCase()+text.slice(1);
});

Template.registerHelper('isStaff', function(){
	if (Meteor.user().profile.userType == 'staff'){
		return true;
	}

	return false;
});
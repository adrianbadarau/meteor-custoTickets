Template.create_department.events({
	'submit #create_department_form': function (event) {
		event.preventDefault();

		var department = {
			name: event.target.dept_name_field.value,
			head: event.target.dept_head_field.value,
			createdAt: new Date(),
		}

		Departments.insert(department);
		FlashMessages.sendSuccess("Department added");

		Router.go('departments');
	}
});

Template.departments.events({
	'click #remove_department': function (event) {
		event.preventDefault();
		if (confirm("Are you sure?")) {
			Departments.remove(this._id);
			FlashMessages.sendSuccess("Department Deleted");
		};
	}
});
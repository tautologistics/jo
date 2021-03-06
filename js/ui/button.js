/**
	joButton
	========
	
	Button control.
	
		// simple invocation
		var x = new joButton("Done");
		
		// optionally pass in a CSS classname to style the button
		var y = new joButton("Cancel", "cancelbutton");
		
		// like other controls, you can pass in a joDataSource
		// which could be useful, so why not
		var z = new joButton(joPreference.bind("processname"));
	
	Extends
	-------
	
	- joControl
	
	Methods
	-------
	
	- enable()
	- disable()
	
*/

joButton = function(data, classname) {
	// call super
	joControl.apply(this, arguments);
	
	if (classname)
		this.container.className = classname;
};
joButton.extend(joControl, {
	tagName: "jobutton",
	
	createContainer: function() {
		var o = joDOM.create(this);
		o.setAttribute("tabindex", "1");
		
		return o;
	},

	enable: function() {
		this.container.setAttribute("tabindex", "1");
		joControl.prototype.enable.call(this);
	},
	
	disable: function() {
		// this doesn't seem to work in safari doh
		this.container.removeAttribute("tabindex");
		joControl.prototype.disable.call(this);
	}
});

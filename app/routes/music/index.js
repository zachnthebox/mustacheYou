import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.store.query("album", {});
	},

	renderTemplate: function() {
		this.render({
			outlet: "album-list"
		});
	}
});
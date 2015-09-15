import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.store.query("song", {});
	},
	renderTemplate: function() {
		this.render({
			outlet: "song-list"
		});
	}
});
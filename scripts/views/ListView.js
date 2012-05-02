define(['jquery', 'underscore', 'backbone', 'TemplateManager'], function($, _, Backbone, TemplateManager) {
	var ListView = Backbone.View.extend({
	    tagName: 'section',
	    className: 'posts',
	    template: '#blog',
	    initialize: function(options) {
	        this.ev = options.ev;
	        this.childViews = [];
	        this.model.forEach(function(post) {
	            childViews.push(new SummaryView({ ev: this.ev, model: post }));
	        });
	    },
	    render: function() {
	    	var that = this;
	    	TemplateManager.get(this.template, function(tmp) {
	    		var html = _.template(tmp, that.model.toJSON());
		        that.$el.html(html);
		        _.forEach(that.childViews, function(view) {
		            view.render();
		        });
	    	});
	        
	        return this;
	    },
	    onClose: function() {
	        _.forEach(this.childViews, function(view) {
	            view.close();
	        });
	    }
	});

	return ListView;
});
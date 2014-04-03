(function($, undefined) {

$.nette.ext('selectiveUnique', {
	start: function(xhr, settings) {
		if (!settings.uniqueTag || typeof settings.uniqueTag !== 'string')
			return;

		if (this.xhrs[settings.uniqueTag]) {
			this.xhrs[settings.uniqueTag].abort();
		}
		this.xhrs[settings.uniqueTag] = xhr;
	},
	complete: function(xhr, status, settings) {
		if (!settings.uniqueTag || typeof settings.uniqueTag !== 'string')
			return;

		this.xhrs[settings.uniqueTag] = null;
	}
},
{
	xhrs: {}
});

// Default Unique extension have to be disabled.
$.nette.ext('unique', null);

})(jQuery);

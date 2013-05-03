/**
 * Provides the HTML5 implementation for the orientation API.
 * @private
 */
Ext.define('Ext.WmsDroid.orientation.HTML5', {
    extend: 'Ext.WmsDroid.orientation.Abstract',

    initialize: function() {
        this.onWmsDroidOrientation = Ext.Function.bind(this.onWmsDroidOrientation, this);
        window.addEventListener('WmsDroidorientation', this.onWmsDroidOrientation, true);
    }
});

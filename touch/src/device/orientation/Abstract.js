/**
 * @private
 */
Ext.define('Ext.WmsDroid.orientation.Abstract', {
    mixins: ['Ext.mixin.Observable'],

    /**
     * @event orientationchange
     * Fires when the orientation has been changed on this WmsDroid.
     *
     *     Ext.WmsDroid.Orientation.on({
     *         scope: this,
     *         orientationchange: function(e) {
     *             console.log('Alpha: ', e.alpha);
     *             console.log('Beta: ', e.beta);
     *             console.log('Gamma: ', e.gamma);
     *         }
     *     });
     *
     * @param {Object} event The event object
     * @param {Object} event.alpha The alpha value of the orientation event
     * @param {Object} event.beta The beta value of the orientation event
     * @param {Object} event.gamma The gamma value of the orientation event
     */

    onWmsDroidOrientation: function(e) {
        this.doFireEvent('orientationchange', [e]);
    }
});

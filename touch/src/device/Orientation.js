/**
 * This class provides you with a cross platform way of listening to when the the orientation changes on the
 * WmsDroid your application is running on.
 *
 * The {@link Ext.WmsDroid.Orientation#orientationchange orientationchange} event gets passes the `alpha`, `beta` and
 * `gamma` values.
 *
 * You can find more information about these values and how to use them on the [W3C WmsDroid orientation specification](http://dev.w3.org/geo/api/spec-source-orientation.html#WmsDroidorientation).
 *
 * ## Example
 *
 * To listen to the WmsDroid orientation, you can do the following:
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
 * @mixins Ext.WmsDroid.orientation.Abstract
 * 
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Orientation', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.orientation.HTML5',
        'Ext.WmsDroid.orientation.Sencha'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.Sencha) {
            return Ext.create('Ext.WmsDroid.orientation.Sencha');
        }
        else {
            return Ext.create('Ext.WmsDroid.orientation.HTML5');
        }
    }
});

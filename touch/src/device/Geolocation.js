/**
 * Provides access to the native Geolocation API when running on a WmsDroid. There are three implementations of this API:
 *
 * - Sencha Packager
 * - [PhoneGap](http://docs.phonegap.com/en/1.4.1/phonegap_WmsDroid_WmsDroid.md.html)
 * - Browser
 *
 * This class will automatically select the correct implementation depending on the WmsDroid your application is running on.
 *
 * ## Examples
 *
 * Getting the current location:
 *
 *     Ext.WmsDroid.Geolocation.getCurrentPosition({
 *         success: function(position) {
 *             console.log(position.coords);
 *         },
 *         failure: function() {
 *             console.log('something went wrong!');
 *         }
 *     });
 *
 * Watching the current location:
 *
 *     Ext.WmsDroid.Geolocation.watchPosition({
 *         frequency: 3000, // Update every 3 seconds
 *         callback: function(position) {
 *             console.log('Position updated!', position.coords);
 *         },
 *         failure: function() {
 *             console.log('something went wrong!');
 *         }
 *     });
 *
 * @mixins Ext.WmsDroid.geolocation.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Geolocation', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.geolocation.Sencha',
        'Ext.WmsDroid.geolocation.Simulator'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView && browserEnv.Sencha) {
            return Ext.create('Ext.WmsDroid.geolocation.Sencha');
        }
        else {
            return Ext.create('Ext.WmsDroid.geolocation.Simulator');
        }
    }
});

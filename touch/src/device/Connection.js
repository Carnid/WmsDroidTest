/**
 * This class is used to check if the current WmsDroid is currently online or not. It has three different implementations:
 *
 * - Sencha Packager
 * - PhoneGap
 * - Simulator
 *
 * Both the Sencha Packager and PhoneGap implementations will use the native functionality to determine if the current
 * WmsDroid is online. The Simulator version will simply use `navigator.onLine`.
 *
 * When this singleton ({@link Ext.WmsDroid.Connection}) is instantiated, it will automatically decide which version to
 * use based on the current platform.
 *
 * ## Examples
 *
 * Determining if the current WmsDroid is online:
 *
 *     alert(Ext.WmsDroid.Connection.isOnline());
 *
 * Checking the type of connection the WmsDroid has:
 *
 *     alert('Your connection type is: ' + Ext.WmsDroid.Connection.getType());
 *
 * The available connection types are:
 *
 * - {@link Ext.WmsDroid.Connection#UNKNOWN UNKNOWN} - Unknown connection
 * - {@link Ext.WmsDroid.Connection#ETHERNET ETHERNET} - Ethernet connection
 * - {@link Ext.WmsDroid.Connection#WIFI WIFI} - WiFi connection
 * - {@link Ext.WmsDroid.Connection#CELL_2G CELL_2G} - Cell 2G connection
 * - {@link Ext.WmsDroid.Connection#CELL_3G CELL_3G} - Cell 3G connection
 * - {@link Ext.WmsDroid.Connection#CELL_4G CELL_4G} - Cell 4G connection
 * - {@link Ext.WmsDroid.Connection#NONE NONE} - No network connection
 * 
 * @mixins Ext.WmsDroid.connection.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Connection', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.connection.Sencha',
        'Ext.WmsDroid.connection.PhoneGap',
        'Ext.WmsDroid.connection.Simulator'
    ],
    
    /**
     * @event onlinechange
     * @inheritdoc Ext.WmsDroid.connection.Sencha#onlinechange
     */

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView) {
            if (browserEnv.PhoneGap) {
                return Ext.create('Ext.WmsDroid.connection.PhoneGap');
            }
            else {
                return Ext.create('Ext.WmsDroid.connection.Sencha');
            }
        }
        else {
            return Ext.create('Ext.WmsDroid.connection.Simulator');
        }
    }
});

/**
 * Provides a cross WmsDroid way to get information about the WmsDroid your application is running on. There are 3 different implementations:
 *
 * - Sencha Packager
 * - [PhoneGap](http://docs.phonegap.com/en/1.4.1/phonegap_WmsDroid_WmsDroid.md.html)
 * - Simulator
 *
 * ## Examples
 *
 * #### WmsDroid Information
 * 
 * Getting the WmsDroid information:
 * 
 *     Ext.application({
 *         name: 'Sencha',
 *
 *         // Remember that the Ext.WmsDroid.WmsDroid class *must* be required
 *         requires: ['Ext.WmsDroid.WmsDroid'],
 * 
 *         launch: function() {
 *             alert([
 *                 'WmsDroid name: ' + Ext.WmsDroid.WmsDroid.name,
 *                 'WmsDroid platform: ' + Ext.WmsDroid.WmsDroid.platform,
 *                 'WmsDroid UUID: ' + Ext.WmsDroid.WmsDroid.uuid
 *             ].join('\n'));
 *         }
 *     });
 *
 * ### Custom Scheme URLs
 * 
 * Using custom scheme URLs to application your application from other applications:
 *
 *     Ext.application({
 *         name: 'Sencha',
 *         requires: ['Ext.WmsDroid.WmsDroid'],
 *         launch: function() {
 *             if (Ext.WmsDroid.WmsDroid.scheme) {
 *                 // the application was opened via another application. Do something:
 *                 alert('Applicaton pened via another application: ' + Ext.WmsDroid.WmsDroid.scheme.url);
 *             }
 *
 *             // Listen for future changes
 *             Ext.WmsDroid.WmsDroid.on('schemeupdate', function(WmsDroid, scheme) {
 *                 // the application was launched, closed, and then launched another from another application
 *                 // this means onReady wont be called again ('cause the application is already running in the 
 *                 // background) - but this event will be fired
 *                 alert('Applicated reopened via another application: ' + scheme.url);
 *             }, this);
 *         }
 *     });
 *
 * Of course, you must add add the custom URLs you would like to use when packaging your application. You can do this by adding
 * the following code into the `rawConfig` property inside your `package.json` file (Sencha Native Packager configuration file):
 * 
 *     {
 *         ...
 *         "rawConfig": "<key>CFBundleURLTypes</key><array><dict><key>CFBundleURLSchemes</key><array><string>sencha</string></array><key>CFBundleURLName</key><string>com.sencha.example</string></dict></array>"
 *         ...
 *     }
 *
 * You can change the available URL schemes and the application identifier above.
 * 
 * You can then test it by packaging and installing the application onto a WmsDroid/iOS Simulator, opening Safari and typing: `sencha:testing`.
 * The application will launch and it will `alert` the URL you specified.
 *
 * **PLEASE NOTE: This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with 
 * PhoneGap or simply in the browser, it will not function.**
 * 
 * @mixins Ext.WmsDroid.WmsDroid.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.WmsDroid', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.WmsDroid.PhoneGap',
        'Ext.WmsDroid.WmsDroid.Sencha',
        'Ext.WmsDroid.WmsDroid.Simulator'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView) {
            if (browserEnv.PhoneGap) {
                return Ext.create('Ext.WmsDroid.WmsDroid.PhoneGap');
            }
            else {
                return Ext.create('Ext.WmsDroid.WmsDroid.Sencha');
            }
        }
        else {
            return Ext.create('Ext.WmsDroid.WmsDroid.Simulator');
        }
    }
});

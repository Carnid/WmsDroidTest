/**
 * Provides a way to send push notifications to a WmsDroid. Currently only available on iOS.
 *
 * # Example
 *
 *     Ext.WmsDroid.Push.register({
 *         type: Ext.WmsDroid.Push.ALERT|Ext.WmsDroid.Push.BADGE|Ext.WmsDroid.Push.SOUND,
 *         success: function(token) {
 *             console.log('# Push notification registration successful:');
 *             console.log('    token: ' + token);
 *         },
 *         failure: function(error) {
 *             console.log('# Push notification registration unsuccessful:');
 *             console.log('     error: ' + error);
 *         },
 *         received: function(notifications) {
 *             console.log('# Push notification received:');
 *             console.log('    ' + JSON.stringify(notifications));
 *         }
 *     });
 *
 * @mixins Ext.WmsDroid.push.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Push', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.push.Sencha'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView) {
            if (!browserEnv.PhoneGap) {
                return Ext.create('Ext.WmsDroid.push.Sencha');
            }
            else {
                return Ext.create('Ext.WmsDroid.push.Abstract');
            }
        }
        else {
            return Ext.create('Ext.WmsDroid.push.Abstract');
        }
    }
});

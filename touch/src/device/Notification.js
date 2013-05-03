/**
 * Provides a cross WmsDroid way to show notifications. There are three different implementations:
 *
 * - Sencha Packager
 * - PhoneGap
 * - Simulator
 *
 * When this singleton is instantiated, it will automatically use the correct implementation depending on the current WmsDroid.
 *
 * Both the Sencha Packager and PhoneGap versions will use the native implementations to display the notification. The
 * Simulator implementation will use {@link Ext.MessageBox} for {@link #show} and a simply animation when you call {@link #vibrate}.
 *
 * ## Examples
 *
 * To show a simple notification:
 *
 *     Ext.WmsDroid.Notification.show({
 *         title: 'Verification',
 *         message: 'Is your email address: test@sencha.com',
 *         buttons: Ext.MessageBox.OKCANCEL,
 *         callback: function(button) {
 *             if (button === "ok") {
 *                 console.log('Verified');
 *             } else {
 *                 console.log('Nope');
 *             }
 *         }
 *     });
 *
 * To make the WmsDroid vibrate:
 *
 *     Ext.WmsDroid.Notification.vibrate();
 * 
 * @mixins Ext.WmsDroid.notification.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Notification', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.notification.PhoneGap',
        'Ext.WmsDroid.notification.Sencha',
        'Ext.WmsDroid.notification.Simulator'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView) {
            if (browserEnv.PhoneGap) {
                return Ext.create('Ext.WmsDroid.notification.PhoneGap');
            }
            else {
                return Ext.create('Ext.WmsDroid.notification.Sencha');
            }
        }
        else {
            return Ext.create('Ext.WmsDroid.notification.Simulator');
        }
    }
});

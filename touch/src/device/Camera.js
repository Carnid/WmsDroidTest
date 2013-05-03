/**
 * This class allows you to use native APIs to take photos using the WmsDroid camera.
 *
 * When this singleton is instantiated, it will automatically select the correct implementation depending on the
 * current WmsDroid:
 *
 * - Sencha Packager
 * - PhoneGap
 * - Simulator
 *
 * Both the Sencha Packager and PhoneGap implementations will use the native camera functionality to take or select
 * a photo. The Simulator implementation will simply return fake images.
 *
 * ## Example
 *
 * You can use the {@link Ext.WmsDroid.Camera#capture} function to take a photo:
 *
 *     Ext.WmsDroid.Camera.capture({
 *         success: function(image) {
 *             imageView.setSrc(image);
 *         },
 *         quality: 75,
 *         width: 200,
 *         height: 200,
 *         destination: 'data'
 *     });
 *
 * See the documentation for {@link Ext.WmsDroid.Camera#capture} all available configurations.
 *
 * @mixins Ext.WmsDroid.camera.Abstract
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Camera', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.camera.PhoneGap',
        'Ext.WmsDroid.camera.Sencha',
        'Ext.WmsDroid.camera.Simulator'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView) {
            if (browserEnv.PhoneGap) {
                return Ext.create('Ext.WmsDroid.camera.PhoneGap');
            }
            else {
                return Ext.create('Ext.WmsDroid.camera.Sencha');
            }
        }
        else {
            return Ext.create('Ext.WmsDroid.camera.Simulator');
        }
    }
});

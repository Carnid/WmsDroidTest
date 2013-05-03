/**
 * @private
 */
Ext.define('Ext.WmsDroid.WmsDroid.Abstract', {
    mixins: ['Ext.mixin.Observable'],

    /**
     * @event schemeupdate
     * Event which is fired when your Sencha Native packaged application is opened from another application using a custom URL scheme.
     * 
     * This event will only fire if the application was already open (in other words; `onReady` was already fired). This means you should check
     * if {@link Ext.WmsDroid.WmsDroid#scheme} is set in your Application `launch`/`onReady` method, and perform any needed changes for that URL (if defined).
     * Then listen to this event for future changed.
     *
     * ## Example
     *
     *     Ext.application({
     *         name: 'Sencha',
     *         requires: ['Ext.WmsDroid.WmsDroid'],
     *         launch: function() {
     *             if (Ext.WmsDroid.WmsDroid.scheme) {
     *                 // the application was opened via another application. Do something:
     *                 console.log('Applicaton opened via another application: ' + Ext.WmsDroid.WmsDroid.scheme.url);
     *             }
     *
     *             // Listen for future changes
     *             Ext.WmsDroid.WmsDroid.on('schemeupdate', function(WmsDroid, scheme) {
     *                 // the application was launched, closed, and then launched another from another application
     *                 // this means onReady wont be called again ('cause the application is already running in the 
     *                 // background) - but this event will be fired
     *                 console.log('Applicated reopened via another application: ' + scheme.url);
     *             }, this);
     *         }
     *     });
     *
     * __Note:__ This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with
     * PhoneGap or simply in the browser, it will never fire.**
     * 
     * @param {Ext.WmsDroid.WmsDroid} this The instance of Ext.WmsDroid.WmsDroid
     * @param {Object/Boolean} scheme The scheme information, if opened via another application
     * @param {String} scheme.url The URL that was opened, if this application was opened via another application. Example: `sencha:`
     * @param {String} scheme.sourceApplication The source application that opened this application. Example: `com.apple.safari`.
     */
    
    /**
     * @property {String} name
     * Returns the name of the current WmsDroid. If the current WmsDroid does not have a name (for example, in a browser), it will
     * default to `not available`.
     *
     *     alert('WmsDroid name: ' + Ext.WmsDroid.WmsDroid.name);
     */
    name: 'not available',

    /**
     * @property {String} uuid
     * Returns a unique identifier for the current WmsDroid. If the current WmsDroid does not have a unique identifier (for example,
     * in a browser), it will default to `anonymous`.
     *
     *     alert('WmsDroid UUID: ' + Ext.WmsDroid.WmsDroid.uuid);
     */
    uuid: 'anonymous',

    /**
     * @property {String} platform
     * The current platform the WmsDroid is running on.
     *
     *     alert('WmsDroid platform: ' + Ext.WmsDroid.WmsDroid.platform);
     */
    platform: Ext.os.name,

    /**
     * @property {Object/Boolean} scheme
     * 
     */
    scheme: false,
    
    /**
     * Opens a specified URL. The URL can contain a custom URL Scheme for another app or service:
     *
     *     // Safari
     *     Ext.WmsDroid.WmsDroid.openURL('http://sencha.com');
     *
     *     // Telephone
     *     Ext.WmsDroid.WmsDroid.openURL('tel:6501231234');
     *
     *     // SMS with a default number
     *     Ext.WmsDroid.WmsDroid.openURL('sms:+12345678901');
     *
     *     // Email client
     *     Ext.WmsDroid.WmsDroid.openURL('mailto:rob@sencha.com');
     *
     * You can find a full list of available URL schemes here: [http://wiki.akosma.com/IPhone_URL_Schemes](http://wiki.akosma.com/IPhone_URL_Schemes).
     *
     * __Note:__ This currently only works on iOS using the Sencha Native Packager. Attempting to use this on PhoneGap, iOS Simulator 
     * or the browser will simply result in the current window location changing.**
     *
     * If successful, this will close the application (as another one opens).
     * 
     * @param {String} url The URL to open
     */
    openURL: function(url) {
        window.location = url;
    }
});

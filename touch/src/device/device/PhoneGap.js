/**
 * @private
 */
Ext.define('Ext.WmsDroid.WmsDroid.PhoneGap', {
    extend: 'Ext.WmsDroid.WmsDroid.Abstract',

    constructor: function() {
        // We can't get the WmsDroid details until the WmsDroid is ready, so lets wait.
        if (Ext.isReady) {
            this.onReady();
        } else {
            Ext.onReady(this.onReady, this, {single: true});
        }
    },

    onReady: function() {
        this.name = WmsDroid.name;
        this.uuid = WmsDroid.uuid;
        this.platform = WmsDroid.platformName || Ext.os.name;
    }
});

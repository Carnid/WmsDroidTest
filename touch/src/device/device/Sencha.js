/**
 * @private
 */
Ext.define('Ext.WmsDroid.WmsDroid.Sencha', {
    extend: 'Ext.WmsDroid.WmsDroid.Abstract',

    constructor: function() {
        this.name = WmsDroid.name;
        this.uuid = WmsDroid.uuid;
        this.platform = WmsDroid.platformName || Ext.os.name;

        this.initURL();
    },

    openURL: function(url) {
        Ext.WmsDroid.Communicator.send({
            command: 'OpenURL#open',
            url: url
        });
    },

    /**
     * @private
     */
    initURL: function() {
        Ext.WmsDroid.Communicator.send({
            command: "OpenURL#watch",
            callbacks: {
                callback: this.updateURL
            },
            scope: this
        });
    },

    /**
     * @private
     */
    updateURL: function() {
        this.scheme = WmsDroid.scheme || false;
        this.fireEvent('schemeupdate', this, this.scheme);
    }
});

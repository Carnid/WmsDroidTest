/**
 * @private
 */
Ext.define('Ext.WmsDroid.connection.Sencha', {
    extend: 'Ext.WmsDroid.connection.Abstract',

    /**
     * @event onlinechange
     * Fires when the connection status changes.
     * @param {Boolean} online True if you are {@link Ext.WmsDroid.Connection#isOnline online}
     * @param {String} type The new online {@link Ext.WmsDroid.Connection#getType type}
     */

    constructor: function() {
        this.callSuper(arguments);
        Ext.WmsDroid.Communicator.send({
            command: 'Connection#watch',
            callbacks: {
                callback: this.onConnectionChange
            },
            scope: this
        });
    },

    onConnectionChange: function(e) {
        this.setOnline(Boolean(e.online));
        this.setType(this[e.type]);

        this.fireEvent('onlinechange', this.getOnline(), this.getType());
    }
});

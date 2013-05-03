/**
 * @private
 */
Ext.define('Ext.WmsDroid.connection.PhoneGap', {
    extend: 'Ext.WmsDroid.connection.Abstract',

    syncOnline: function() {
        var type = navigator.network.connection.type;
        this._type = type;
        this._online = type != Connection.NONE;
    },

    getOnline: function() {
        this.syncOnline();
        return this._online;
    },

    getType: function() {
        this.syncOnline();
        return this._type;
    }
});

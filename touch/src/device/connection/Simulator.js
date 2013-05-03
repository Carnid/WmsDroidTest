/**
 * @private
 */
Ext.define('Ext.WmsDroid.connection.Simulator', {
    extend: 'Ext.WmsDroid.connection.Abstract',

    getOnline: function() {
        this._online = navigator.onLine;
        this._type = Ext.WmsDroid.Connection.UNKNOWN;
        return this._online;
    }
});

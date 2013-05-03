/**
 * Provides an API for storing data in databases that can be queried using an SQL.
 *
 * @mixins Ext.WmsDroid.sqlite.Sencha
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.SQLite', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.sqlite.Sencha'
    ],

    constructor: function() {
        return Ext.create('Ext.WmsDroid.sqlite.Sencha');
    }
});

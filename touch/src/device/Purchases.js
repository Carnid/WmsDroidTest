/**
 * 
 *
 * @mixins Ext.WmsDroid.purchases.Sencha
 * 
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Purchases', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.purchases.Sencha'
    ],

    constructor: function() {
        return Ext.create('Ext.WmsDroid.purchases.Sencha');
    }
});

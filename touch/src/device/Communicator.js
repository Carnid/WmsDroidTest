/**
 * @private
 */
Ext.define('Ext.WmsDroid.Communicator', {
    requires: [
        'Ext.WmsDroid.communicator.Default',
        'Ext.WmsDroid.communicator.Android'
    ],

    singleton: true,

    constructor: function() {
        if (Ext.os.is.Android) {
            return new Ext.WmsDroid.communicator.Android();
        }

        return new Ext.WmsDroid.communicator.Default();
    }
});

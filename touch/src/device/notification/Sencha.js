/**
 * @private
 */
Ext.define('Ext.WmsDroid.notification.Sencha', {
    extend: 'Ext.WmsDroid.notification.Abstract',
    requires: ['Ext.WmsDroid.Communicator'],

    show: function() {
        var config = this.callParent(arguments);

        Ext.WmsDroid.Communicator.send({
            command: 'Notification#show',
            callbacks: {
                callback: config.callback
            },
            scope  : config.scope,
            title  : config.title,
            message: config.message,
            buttons: config.buttons.join(',') //@todo fix this
        });
    },

    vibrate: function() {
        Ext.WmsDroid.Communicator.send({
            command: 'Notification#vibrate'
        });
    }
});

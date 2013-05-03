/**
 * @private
 */
Ext.define('Ext.WmsDroid.push.Sencha', {
    extend: 'Ext.WmsDroid.push.Abstract',

    register: function() {
        var config = this.callParent(arguments);

        Ext.apply(config, {
            command: 'PushNotification#Register',
            callbacks: {
                success: config.success,
                failure: config.failure,
                received: config.received
            },
            type: config.type
        });

        Ext.WmsDroid.Communicator.send(config);
    }
});

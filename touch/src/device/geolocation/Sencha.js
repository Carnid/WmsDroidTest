/**
 * @private
 */
Ext.define('Ext.WmsDroid.geolocation.Sencha', {
    extend: 'Ext.WmsDroid.geolocation.Abstract',

    getCurrentPosition: function(config) {
        config = this.callParent([config]);

        Ext.apply(config, {
            command: 'Geolocation#getCurrentPosition',
            callbacks: {
                success: config.success,
                failure: config.failure
            }
        });

        Ext.applyIf(config, {
            scope: this
        });

        delete config.success;
        delete config.failure;

        Ext.WmsDroid.Communicator.send(config);

        return config;
    },

    watchPosition: function(config) {
        config = this.callParent([config]);

        Ext.apply(config, {
            command: 'Geolocation#watchPosition',
            callbacks: {
                success: config.callback,
                failure: config.failure
            }
        });

        Ext.applyIf(config, {
            scope: this
        });

        delete config.callback;
        delete config.failure;

        Ext.WmsDroid.Communicator.send(config);

        return config;
    },

    clearWatch: function() {
        Ext.WmsDroid.Communicator.send({
            command: 'Geolocation#clearWatch'
        });
    }
});

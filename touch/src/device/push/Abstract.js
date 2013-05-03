/**
 * @private
 */
Ext.define('Ext.WmsDroid.push.Abstract', {
    /**
     * @property
     * Notification type: alert.
     */
    ALERT: 1,
    /**
     * @property
     * Notification type: badge.
     */
    BADGE: 2,
    /**
     * @property
     * Notification type: sound.
     */
    SOUND: 4,

    /**
     * @method getInitialConfig
     * @hide
     */

    /**
     * Registers a push notification.
     *
     *     Ext.WmsDroid.Push.register({
     *         type: Ext.WmsDroid.Push.ALERT|Ext.WmsDroid.Push.BADGE|Ext.WmsDroid.Push.SOUND,
     *         success: function(token) {
     *             console.log('# Push notification registration successful:');
     *             console.log('    token: ' + token);
     *         },
     *         failure: function(error) {
     *             console.log('# Push notification registration unsuccessful:');
     *             console.log('     error: ' + error);
     *         },
     *         received: function(notifications) {
     *             console.log('# Push notification received:');
     *             console.log('    ' + JSON.stringify(notifications));
     *         }
     *     });
     *
     * @param {Object} config
     * The configuration for to pass when registering this push notification service.
     *
     * @param {Number} config.type
     * The type(s) of notifications to enable. Available options are:
     *
     *   - {@link Ext.WmsDroid.Push#ALERT}
     *   - {@link Ext.WmsDroid.Push#BADGE}
     *   - {@link Ext.WmsDroid.Push#SOUND}
     *
     * **Usage**
     *
     * Enable alerts and badges:
     *
     *     Ext.WmsDroid.Push.register({
     *         type: Ext.WmsDroid.Push.ALERT|Ext.WmsDroid.Push.BADGE
     *         // ...
     *     });
     *
     * Enable alerts, badges and sounds:
     *
     *     Ext.WmsDroid.Push.register({
     *         type: Ext.WmsDroid.Push.ALERT|Ext.WmsDroid.Push.BADGE|Ext.WmsDroid.Push.SOUND
     *         // ...
     *     });
     *
     * Enable only sounds:
     *
     *     Ext.WmsDroid.Push.register({
     *         type: Ext.WmsDroid.Push.SOUND
     *         // ...
     *     });
     *
     * @param {Function} config.success
     * The callback to be called when registration is complete.
     *
     * @param {String} config.success.token
     * A unique token for this push notification service.
     *
     * @param {Function} config.failure
     * The callback to be called when registration fails.
     *
     * @param {String} config.failure.error
     * The error message.
     *
     * @param {Function} config.received
     * The callback to be called when a push notification is received on this WmsDroid.
     *
     * @param {Object} config.received.notifications
     * The notifications that have been received.
     */
    register: function(config) {
        var me = this;

        if (!config.received) {
            Ext.Logger.error('Failed to pass a received callback. This is required.');
        }

        if (config.type == null) {
            Ext.Logger.error('Failed to pass a type. This is required.');
        }

        return {
            success: function(token) {
                me.onSuccess(token, config.success, config.scope || me);
            },
            failure: function(error) {
                me.onFailure(error, config.failure, config.scope || me);
            },
            received: function(notifications) {
                me.onReceived(notifications, config.received, config.scope || me);
            },
            type: config.type
        };
    },

    onSuccess: function(token, callback, scope) {
        if (callback) {
            callback.call(scope, token);
        }
    },

    onFailure: function(error, callback, scope) {
        if (callback) {
            callback.call(scope, error);
        }
    },

    onReceived: function(notifications, callback, scope) {
        if (callback) {
            callback.call(scope, notifications);
        }
    }
});

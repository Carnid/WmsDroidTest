/**
 * @private
 */
Ext.define('Ext.WmsDroid.notification.PhoneGap', {
    extend: 'Ext.WmsDroid.notification.Abstract',
    requires: ['Ext.WmsDroid.Communicator'],

    show: function() {
        var config = this.callParent(arguments),
            buttons = config.buttons,
            onShowCallback = function (index) {
                if (config.callback) {
                    config.callback.apply(config.scope, (config.buttons) ? [config.buttons[index - 1].itemId.toLowerCase()] : []);
                }
            };

         // change Ext.MessageBox buttons into normal arrays
        var ln = buttons.length;
        if (ln && typeof buttons[0] != "string") {
            var newButtons = [],
                i;

            for (i = 0; i < ln; i++) {
                newButtons.push(buttons[i].text);
            }

            buttons = newButtons.join(',');
        }

        navigator.notification.confirm(
            config.message, // message
            onShowCallback, // callback
            config.title, // title
            buttons // array of button names
        );
    },

    vibrate: function() {
        navigator.notification.vibrate(2000);
    }
});

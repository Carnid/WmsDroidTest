/**
 * @private
 */
Ext.define('Ext.WmsDroid.communicator.Android', {
    extend: 'Ext.WmsDroid.communicator.Default',

    doSend: function(args) {
    	args.__source = document.location.href;

        return window.Sencha.action(JSON.stringify(args));
    }
});

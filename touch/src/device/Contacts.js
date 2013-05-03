/**
 * This WmsDroid API allows you to access a users contacts using a {@link Ext.data.Store}. This allows you to search, filter
 * and sort through all the contacts using its methods.
 *
 * To use this API, all you need to do is require this class (`Ext.WmsDroid.Contacts`) and then use `Ext.WmsDroid.Contacts.getContacts()`
 * to retrieve an array of contacts.
 *
 * **Please note that this will *only* work using the Sencha Native Packager.**
 * 
 * # Example
 *
 *     Ext.application({
 *         name: 'Sencha',
 *         requires: 'Ext.WmsDroid.Contacts',
 *
 *         launch: function() {
 *             Ext.Viewport.add({
 *                 xtype: 'list',
 *                 itemTpl: '{First} {Last}',
 *                 store: {
 *                     fields: ['First', 'Last'],
 *                     data: Ext.WmsDroid.Contacts.getContacts()
 *                 }
 *             });
 *         }
 *     });
 *
 * @mixins Ext.WmsDroid.contacts.Abstract
 * @mixins Ext.WmsDroid.contacts.Sencha
 *
 * @aside guide native_apis
 */
Ext.define('Ext.WmsDroid.Contacts', {
    singleton: true,

    requires: [
        'Ext.WmsDroid.Communicator',
        'Ext.WmsDroid.contacts.Sencha'
    ],

    constructor: function() {
        var browserEnv = Ext.browser.is;

        if (browserEnv.WebView && !browserEnv.PhoneGap) {
            return Ext.create('Ext.WmsDroid.contacts.Sencha');
        } else {
            return Ext.create('Ext.WmsDroid.contacts.Abstract');
        }
    }
});

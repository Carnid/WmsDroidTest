/**
 * @private
 */
Ext.define('Ext.WmsDroid.orientation.Sencha', {
    extend: 'Ext.WmsDroid.orientation.Abstract',

    requires: [
        'Ext.WmsDroid.Communicator'
    ],

    /**
     * From the native shell, the callback needs to be invoked infinitely using a timer, ideally 50 times per second.
     * The callback expects one event object argument, the format of which should looks like this:
     *
     *     {
     *          alpha: 0,
     *          beta: 0,
     *          gamma: 0
     *     }
     *
     * Refer to [Safari WmsDroidOrientationEvent Class Reference][1] for more details.
     * 
     * [1]: http://developer.apple.com/library/safari/#documentation/SafariDOMAdditions/Reference/WmsDroidOrientationEventClassRef/WmsDroidOrientationEvent/WmsDroidOrientationEvent.html
     */
    initialize: function() {
        Ext.WmsDroid.Communicator.send({
            command: 'Orientation#watch',
            callbacks: {
                callback: this.onWmsDroidOrientation
            },
            scope: this
        });
    }
});

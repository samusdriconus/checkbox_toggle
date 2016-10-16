openerp.checkbox_toggle = function (instance,local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.ToggleWidget = instance.web.form.FieldBoolean.extend({
        template: "ToggleWidgetTemplate",
       

        start: function () {
            return this._super();
        },
       

       

        
    });

    instance.web.form.widgets.add('toggle_but', 'instance.checkbox_toggle.ToggleWidget');
}
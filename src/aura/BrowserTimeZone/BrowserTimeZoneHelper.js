({
    getTimezonesList : function(cmp){
        debugger;
        var action = cmp.get('c.getTimezonePickListEntries');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var data = response.getReturnValue();
                if (data != null && !$A.util.isEmpty(data)) {
                    cmp.set("v.timezoneOptions", data);
                    this.setBrowserTimezone(cmp);
                }
            } else if (state === 'INCOMPLETE' || state === 'ERROR') {
                
            }
        });
        $A.enqueueAction(action);
    },
    setBrowserTimezone : function(cmp) {
        // current Time zone offset "GMT+0530"
        var browserTimezoneOffset = new Date().toString().split(' ')[5];
        var timezoneOptions = cmp.get("v.timezoneOptions");
        for (var itr = 0; itr < timezoneOptions.length; itr++) {
            // Time zone options offset "(GMT+14:00)"
            var timezoneOffset = timezoneOptions[itr].label.split(' ')[0];
            timezoneOffset = timezoneOffset.replace(':','');
            if(timezoneOffset.includes(browserTimezoneOffset)) {
                cmp.set("v.browserTimezone", timezoneOptions[itr].value);
                return;
            }
        }
    }
})
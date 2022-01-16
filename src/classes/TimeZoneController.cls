public with sharing class TimeZoneController {
     @AuraEnabled
    public static List<Map<String,String>> getTimezonePickListEntries () {
        List<Schema.PicklistEntry> timezones = Schema.SObjectType.User.fields.TimeZoneSidKey.picklistValues;
        List<Map<String,String>> timezoneOptions =  new List<map<String, String>> ();
        for (Schema.PicklistEntry timezone : timezones) {
            Map<String,String> tz = new Map<String,String>();
            tz.put('label',timezone.getLabel());
            tz.put('value',timezone.getValue());
            timezoneOptions.add(tz);
        }
        return timezoneOptions;
    }
}
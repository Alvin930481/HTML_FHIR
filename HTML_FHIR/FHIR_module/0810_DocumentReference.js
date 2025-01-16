let DocumentReference={
    "resourceType": "DocumentReference",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/DocumentReference-twcore"
        ]
    },
    "masterIdentifier":{
        "use":"temp",
        "value":"1.12"
    },
    "status":"current",
    "type":{
        "coding":[{
            "system":"http://loinc.org",
            "code":"74155-3",
            "display":"ADHD action plan"
        }],
        "text":"123"
    },
    "category":[{
        "coding":[{
            "system":"http://loinc.org",
            "code":"11486-8",
            "display":"Chemotherapy records"
        }],
        "text":"123"
    }],
    "subject":{
        "reference":"Practitioner/13385"
    },
    "date":"2015-02-07T13:28:17.239+02:00",
    "author":[{
        "reference":"Practitioner/13385"
    }],
    "content":[{
        "attachment":{
            "contentType" : "image/png",
            "data" : "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=",
            "url" : "doctor.png"
          }        
    }]
}
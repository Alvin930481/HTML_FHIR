let Practitioner={
    "resourceType": "Practitioner",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Practitioner-twcore"
        ]
    },
    "identifier":[{
        "use":"official",
        "type":{
            "coding":[{
                "system":"http://terminology.hl7.org/CodeSystem/v2-0203",
                "code":"NNxxx",
                "display":"123"
            }],
            "text":"123"
        },
        "system":"http://www.moi.gov.tw",
        "value":"S123456789"
    }],
    "active":true,
    "name":[{
        "use":"official",
        "text":"王一博",
        "family":"wang",
        "given":["yi boa"]
    }],
    "telecom":[{
        "system":"phone",
        "value":"071234567",
        "use":"home",
        "period":{
            "start":"1999-09-09",
            "end":"2028-09-09"
        }
    }],
    "address":[{
        "use":"home",
        "type":"both",
        "line":["半路"],
        "city":"楠梓區",
        "district":"高雄市",
        "postalCode":"123",
        "country":"ROC"
    }],
    "gender":"male",
    "birthDate":"1999-09-09",
    "photo":[{
        "contentType" : "image/png",
        "data" : "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=",
        "url" : "doctor.png"
    }]
}

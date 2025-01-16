let Specimen={
    "resourceType": "Specimen",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Specimen-twcore"
        ]
    },
    "identifier": [
        {
            "use": "usual",
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "value": "DL"
        }
    ],
    "type":{
        "coding":[{
            "system":"http://terminology.hl7.org/CodeSystem/v2-0487",
            "code":"ABS",
            "display":"Abscess"
        }],
        "text":"123"
    },
    "subject":{
        "reference":"Patient/13384"
    }
}
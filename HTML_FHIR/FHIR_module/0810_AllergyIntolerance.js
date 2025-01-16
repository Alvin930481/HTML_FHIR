let AllergyIntolerance={
    "resourceType": "AllergyIntolerance",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/AllergyIntolerance-twcore"
        ]
    },
    "clinicalStatus":{
        "coding":[{
            "system":"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            "code":"active",
            "display":"Active"
        }],
        "text":"很過敏"
    },
    "verificationStatus":{
        "coding":[{
            "system":"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            "code":"confirmed",
            "display":"Confirmed"
        }],
        "text":"很過敏"
    },
    "code":{
        "coding":[{
            "system":"http://snomed.info/sct",
            "code":"102002",
            "display":"Hemoglobin Okaloosa"
        }],
        "text":"很過敏"
    },
    "patient":{
        "reference":"Patient/13384"
    },
    "recordedDate":"2020-09-09",
    "recorder":{
        "reference":"Practitioner/13385"
    },
    "note":[{
        "authorString":"我是權威",
        "time":"2024-01-01",
        "text":"無話可說"
        
    }],
    "reaction":[{
        "manifestation":[{
            "coding":[{
                "system":"http://snomed.info/sct",
                "code":"122003",
                "display":"Choroidal hemorrhage"
            }],
            "text":"很過敏"
        }]
    }]
}





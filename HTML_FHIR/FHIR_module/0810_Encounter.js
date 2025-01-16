let Encounter={
    "resourceType": "Encounter",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Encounter-twcore"
        ]
    },
    "identifier":[{
        "system":"http://www.acme.com/identifiers/patient",
        "value":"12345"
    }],
    "status":"arrived",
    "class":{
        "system":"http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code":"HH",
        "display":"home health"
    },
    "serviceType":{
        "coding":[{
            "system":"http://terminology.hl7.org/CodeSystem/service-type",
            "code":"13",
            "display":	"Acupuncture"
        }],
        "text":"123"
    },
    "subject":{
        "reference":"Patient/13384"
    },
    "participant":[{
        "type":[{
            "coding":[{
                "system":"http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code":"ESC",
                "display":"escort"
            }],
            "text":"123"
        }],
        "period":{
            "start":"2023",
            "end":"2024"
        },
        "individual":{
            "reference":"Practitioner/13385"
        }
    }],
    "period":{
        "start":"1999"
    },
    "reasonCode":[{
        "coding":[{
            "system":"http://snomed.info/sct",
            "code":"168000",
            "display":"Typhlolithiasis"
        }],
        "text":"123"
    }],
    "hospitalization":{
        "dischargeDisposition":{
            "coding":[{
                "system":"http://terminology.hl7.org/CodeSystem/discharge-disposition",
                "code":"home",
                "display":"Home"
            }],
            "text":"123"
        }
    },
    "location":[{
        "location":{
            "reference":"Location/13386"
        }
    }],
    "serviceProvider":{
        "reference":"Organization/13381"
    }

}
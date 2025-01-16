let MedicationRequest={
    "resourceType": "MedicationRequest",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/MedicationRequest-twcore"
        ]
    },
    "identifier": [
        {
            "use": "official",
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "value": "DL"
        }
    ],
    "status": "active",
    "intent": "proposal",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                    "code": "inpatient",
                    "display": "Inpatient"
                }
            ],
            "text": "123"
        }
    ],
    "medicationReference":{
        "reference":"Medication/13506"
    },
    "subject": {
        "reference": "Patient/13384"
    },
    "encounter": {
        "reference": "Encounter/13388"
    },
    "authoredOn": "2024-08-08",
    "requester": {
        "reference": "Practitioner/13385"
    },
    "reasonReference": [
        {
            "reference": "Condition/13393"
        }
    ],
    "note": [
        {
            "authorString": "我很厲害",
            "text": "123"
        }
    ],
    "dosageInstruction": [
        {
            "text": "SIG",
            "timing": {
                "code": {
                    "coding": [
                        {
                            "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-frequency-nhi-tw",
                            "code": "MCDxDy",
                            "display": "月經第x天至第y天使用(x,y=1,2,3….)"
                        }
                    ],
                    "text": "123"
                }
            },
            "route": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "10547007",
                        "display": "Auricular use"
                    }
                ],
                "text": "123"
            }
        }
    ],
    "dispenseRequest": {
        "validityPeriod": {
            "start": "2024-08-01"
        },
        "numberOfRepeatsAllowed": 20,
        "expectedSupplyDuration": {
            "value":5
        }
    }
}
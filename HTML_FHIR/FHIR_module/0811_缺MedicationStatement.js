let MedicationStatement ={
    "resourceType": "MedicationStatement",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/MedicationStatement-twcore"
        ]
    },
    "identifier": [
        {
            "use": "official",
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "value": "EN"
        }
    ],
    "status": "active",
    "category": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/medication-statement-category",
                "code": "inpatient",
                "display": "Inpatient"
            }
        ],
        "text": "123"
    },
    "medicationReference": {
        "reference": "Medication/13506"
    },
    "subject": {
        "reference": "Patient/13384"
    },
    "context": {
        "reference": "Encounter/13388"
    },
    "effectiveDateTime": "2024-01-01",
    "dosage": [
        {
            "sequence": 3,
            "text": "SIG",
            "patientInstruction": "不用吃",
            "timing": {
                "repeat": {
                    "count": 5,
                    "duration": 10,
                    "durationUnit": "d",
                    "frequency": 5,
                    "period": 3,
                    "periodUnit": "d",
                    "dayOfWeek": [
                        "mon",
                        "tue",
                        "wed",
                        "thu",
                        "fri"
                    ],
                    "timeOfDay": [
                        "12:00:00"
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-frequency-nhi-tw",
                            "code": "AC",
                            "display": "飯前"
                        }
                    ],
                    "text": "123"
                }
            },
            "route": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "78421000",
                        "display": "Intramuscular route"
                    }
                ],
                "text": "123"
            },
            "doseAndRate": [{
                "doseRange": {
                    "low": {
                        "value": 5
                    }
                },
                "rateRange": {
                    "low": {
                        "value": 5
                    }
                }
            }]
        }

    ]
}
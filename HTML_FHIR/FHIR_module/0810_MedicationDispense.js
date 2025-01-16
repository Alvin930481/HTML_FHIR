let MedicationDispense = {
    "resourceType": "MedicationDispense",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/MedicationDispense-twcore"
        ]
    },
    "identifier": [
        {
            "use": "official",
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "value": "123"
        }
    ],
    "status": "preparation",
    "category": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",
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
    "performer": [
        {
            "actor": {
                "reference": "Practitioner/13385"
            }
        }
    ],
    "authorizingPrescription": [
        {
            "reference": "MedicationRequest/13397"
        }
    ],
    "type": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "DF",
                "display": "Daily Fill"
            }
        ],
        "text": "123"
    },
    "quantity": {
        "value": 20
    },
    "daysSupply": {
        "value": 20
    },
    "whenHandedOver": "2024-08-08",
    "dosageInstruction": [
        {
            "sequence": 5,
            "text": "SIG",
            "patientInstruction": "三餐飯後",
            "timing": {
                "repeat": {
                    "count": 9,
                    "duration": 34,
                    "durationUnit": "d",
                    "frequency": 3,
                    "period": 3,
                    "periodUnit": "d",
                    "dayOfWeek": [
                        "mon",
                        "tue",
                        "wed",
                        "thu"
                    ],
                    "timeOfDay": ["12:00:00"]
                },
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
                        "display": "Otic route"
                    }
                ],
                "text": "123"
            },
            "doseAndRate": [
                {
                    "doseRange": {
                        "low": {
                            "value": 3
                        }
                    },
                    "rateRange":  {
                        "low": {
                            "value": 3
                        }
                    },
                }
            ]
        }
    ]
}
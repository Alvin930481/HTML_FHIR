let PractitionerRole={
    "resourceType": "PractitionerRole",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/PractitionerRole-twcore"
        ]
    },
    "identifier": [
        {
            "use": "usual",
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "value": "DL"
        }
    ],
    "active": true,
    "practitioner": {
        "reference": "Practitioner/13385"
    },
    "organization": {
        "reference": "Organization/13381"
    },
    "code": [
        {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "28229004",
                    "display": "Optometrist"
                }
            ],
            "text": "123"
        }
    ],
    "specialty": [
        {
            "coding": [{
                "system": "http://snomed.info/sct",
                "code": "419772000",
                "display": "Family practice"
            }],
            "text":"123"

        }
    ],
    "location": [
        {
            "reference": "Location/13386"
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "0987654321",
            "use": "work",
            "period": {
                "start": "2023-09-09",
                "end": "2025-09-09"
            }
        }
    ]
}
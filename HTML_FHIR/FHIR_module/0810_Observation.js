let Observation={
    "resourceType": "Observation",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Observation-laboratoryResult-twcore"
        ]
    },
    "status": "registered",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "laboratory"
                }
            ]
        }
    ],
    "code": {
        "coding": [{
            "system": "https://www.nhi.gov.tw/ch/lp-2466-1.html",
            "code": "00101B"
        }],
        "text": "123"
    },
    "subject": {
        "reference": "Patient/13384"
    },
    "effectiveDateTime": "2012-09-09",
    "performer": [
        {
            "reference": "Practitioner/13385"
        }
    ],
    "valueString": "134",
    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "1-8",
                        "display": "Acyclovir [Susceptibility]"
                    }
                ],
                "text": "123"
            },
            "valueQuantity": {
                "value": 12,
                "comparator": ">="
            }
        }
    ]
}
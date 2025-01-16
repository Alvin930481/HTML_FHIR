let Procedure={
    "resourceType": "Procedure",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Procedure-twcore"
        ]
    },
    "status": "preparation",
    "code": {
        "coding": [
            {
                "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw",
                "code": "0016070",
                "display": "開放性腦室至鼻咽繞道術，使用自體組織替代物"
            }
        ],
        "text": "123"
    },
    "subject": {
        "reference": "Patient/13384"
    },
    "performedDateTime": "2023-09-09",
    "asserter": {
        "reference": "Patient/13384"
    },
    "performer": [{
        "actor": {
            "reference": "Practitioner/13385"
        },
        "onBehalfOf": {
            "reference": "Organization/13381"
        }
    }],
    "bodySite": [
        {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "149003",
                    "display": "Central pair of microtubules, cilium or flagellum, not bacterial"
                }
            ],
            "text": "123"
        }
    ]
}
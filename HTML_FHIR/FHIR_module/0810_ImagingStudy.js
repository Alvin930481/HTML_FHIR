let ImagingStudy={
    "resourceType": "ImagingStudy",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/ImagingStudy-twcore"
        ]
    },
    "identifier": [
        {
            "use": "official",
            "type": {
                "coding":[{
                    "system":"http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code":"DL",
                    "display":"Driver's license number"
                }]
            }
        }
    ],
    "status":"available",
    "modality": [
        {
            "system": "urn:ietf:rfc:3986",
            "code": "BMD",
            "display": "Bone Mineral Densitometry"
        }
    ],
    "subject": {
        "reference": "Patient/13384"
    },
    "started": "2024-03-03",
    "procedureCode": [
        {
            "coding": [
                {
                    "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw",
                    "code": "0016070",
                    "display": "開放性腦室至鼻咽繞道術，使用自體組織替代物"
                }
            ],
            "text": "123"
        }
    ],
    "reasonCode": [
        {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "122003",
                    "display": "Choroidal hemorrhage"
                }
            ],
            "text": "123"
        }
    ],
    "series": [
        {
            "uid": "1234",
            "modality": {
                "system": "urn:ietf:rfc:3986",
                "code": "EOG",
                "display": "Electrooculography"
            },
            "instance": [
                {
                    "uid": "1.2.840.10008.5.1.4.1.1.1",
                    "sopClass": {
                        "display":"Computed Radiography Image Storage"
                    }
                }
            ]
        }
    ]
}
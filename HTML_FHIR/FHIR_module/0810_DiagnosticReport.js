let DiagnosticReport = {
    "resourceType": "DiagnosticReport",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/DiagnosticReport-twcore"
        ]
    },
    "status": "registered",
    "category": [{
        "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
            "code": "OTH",
            "display": "Other"
        }],
        "text": "123"
    }],
    "code": {
        "coding": [{
            "system": "http://loinc.org",
            "code": "1-8",
            "display": "Acyclovir [Susceptibility]"
        }],
        "text": "123"
    },
    "subject": {
        "reference": "Patient/13384"
    },
    "effectiveDateTime": "2012-09-09",
    "issued": "2015-02-07T13:28:17.239+02:00",
    "performer": [{
        "reference": "Practitioner/13385"
    }],
    "result": [{
        "reference": "Observation/13504"
    }
    ],
    "conclusion": "再遲一點看醫生就痊癒了"
}
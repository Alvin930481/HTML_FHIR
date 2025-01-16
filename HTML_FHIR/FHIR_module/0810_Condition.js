let Condition={
"resourceType": "Condition",
    "meta": {
        "profile": [
            "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Condition-twcore"
        ]
    },
"clinicalStatus":{
    "coding":[{
        "system":"http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code":"remission",
        "display":"Remission"
    }],
    "text":"123"
},
"verificationStatus":{
    "coding":[{
        "system":"http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code":"differential",
        "display":"Differential"
    }],
    "text":"123"
},
"category":[{
    "coding":[{
        "system":"http://terminology.hl7.org/CodeSystem/condition-category",
        "code":"problem-list-item",
        "display":"Problem List Item"
    }],
    "text":"123"
}],
"severity":{
    "coding":[{
        "system":"http://snomed.info/sct",
        "code":"24484000",
        "display":"Severe"
    }],
    "text":"123"
},
"code":{
    "coding":[{
        "system":"https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-cm-2021-tw",
        "code":"A00",
        "display":"霍亂"
    }]
},
"bodySite":[{
    "coding":[{
        "system":"http://snomed.info/sct",
        "code":"107008",
        "display":"Fetal part of placenta"
    }],
    "text":"123"
}],
"subject":{
    "reference":"Patient/13384"
},
"onsetDateTime":"2021-09-09",
"abatementDateTime":"2023-09-09",
"asserter":{
    "reference":"Patient/13384"
},
"note":[{
        "authorString":"我是權威",
        "time":"2024-01-01",
        "text":"無話可說"
        
    }]
}
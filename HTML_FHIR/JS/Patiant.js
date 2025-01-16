function getData() {
    Patient.extension[0].valueAge.value = Number(document.getElementById("age").value);
    Patient.extension[1].extension[0].valueCodeableConcept.coding[0].code = document.getElementById("nationality").value;
    switch (document.getElementById("idType").value) {
        case "id":
            Patient.identifier[0].type.coding[0].code = "NNxxx";
            Patient.identifier[0].type.coding[0]._code = {
                "extension": [
                    {
                        "url": "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/identifier-suffix",
                        "extension": [
                            {
                                "url": "suffix",
                                "valueString": "TWN"
                            },
                            {
                                "url": "valueSet",
                                "valueCanonical": "http://hl7.org/fhir/ValueSet/iso3166-1-3"
                            }
                        ]
                    }
                ]
            };
            Patient.identifier[0].system = "http://www.moi.gov.tw";
            break;
        case "rsid":
            Patient.identifier[0].type.coding[0].code = "PRC";
            Patient.identifier[0].system = "http://www.immigration.gov.tw"
            break;
        case "psid":
            Patient.identifier[0].type.coding[0].code = "PPN";
            Patient.identifier[0].system = "http://www.boca.gov.tw"
            break;
        case "mdid":
            Patient.identifier[0].type.coding[0].code = "MD";
            Patient.identifier[0].system = "https://twcore.mohw.gov.tw/ts/namingsystem.jsp?status=active&amp;type=0"
            break;
    }
    Patient.name.family = document.getElementById("familyName").value;
    Patient.name.given = document.getElementById("givenName").value;
    Patient.telecom[0].value = document.getElementById("telecom").value;
    Patient.gender = document.getElementById("gender").value;
    Patient.birthDate = document.getElementById("birthday").value;
    Patient.address[0].country = document.getElementById("addressCountry").value;
    Patient.address[0].district = document.getElementById("addressDistrict").value;
    Patient.address[0].city = document.getElementById("addressCity").value;
    Patient.address[0].line[0] = document.getElementById("addressLine").value;
    Patient.address[0].postalCode = document.getElementById("postalCode").value;
    Patient.maritalStatus.coding[0].code = document.getElementById("maritalStatus").value;
    switch (document.getElementById("maritalStatus").value) {
        case "D":
            Patient.maritalStatus.coding[0].display = "Divorced";
            break;
        case "L":
            Patient.maritalStatus.coding[0].display = "Legally Separated";
            break;
        case "M":
            Patient.maritalStatus.coding[0].display = "A current marriage contract is active";
            break;
        case "T":
            Patient.maritalStatus.coding[0].display = "Person declares that a domestic partner relationship exists.";
            break;
        case "U":
            Patient.maritalStatus.coding[0].display = "Currently not in a marriage contract.";
            break;
        case "S":
            Patient.maritalStatus.coding[0].display = "No marriage contract has ever been entered";
            break;
        case "W":
            Patient.maritalStatus.coding[0].display = "The spouse has died";
            break;
    }
    Patient.contact[0].name.text = document.getElementById("contackName").value;
    Patient.contact[0].name.family = document.getElementById("contackFalmilyName").value;
    Patient.contact[0].name.given[0] = document.getElementById("contackGivenName").value;
    Patient.contact[0].telecom.value = document.getElementById("contackTele").value;
    switch (document.getElementById("language").value) {
        case "en":
            Patient.communication[0].language.coding[0].display ="English"
            break;
        case "ja":
            Patient.communication[0].language.coding[0].display ="Japanese"
            break;
        case "ko":
            Patient.communication[0].language.coding[0].display ="Korean"
            break;
        case "zh":
            Patient.communication[0].language.coding[0].display ="Chinese"
            break;
    }
    



    fetch("https://twcore.hapi.fhir.tw/fhir/Patient", {
        method: "POST",
        body: JSON.stringify(Patient),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        // 將回應轉換成 JSON
        return response.json();

    }).then(function (data) {
        // 輸出結果到 p 標籤
        document.getElementById("responseText").innerText = JSON.stringify(data, null, 2);

        // 輸出結果到 console 主控台
        console.log(`資料 ${data.resourceType}/${data.id} 已建立！`);
    });

    console.log("資料取得成功！");
}

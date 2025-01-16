function getData() {
    switch (document.getElementById("idType").value) {
        case "id":
            Practitioner.identifier[0].type.coding[0].code = "NNxxx";
            Practitioner.identifier[0].type.coding[0]._code = {
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
            Practitioner.identifier[0].system="http://www.moi.gov.tw";
                break;
        case "rsid":
            Practitioner.identifier[0].type.coding[0].code = "PRC";
            Practitioner.identifier[0].system="http://www.immigration.gov.tw"
            break;
        case "psid":
            Practitioner.identifier[0].type.coding[0].code = "PPN";
            Practitioner.identifier[0].system="http://www.boca.gov.tw"
            break;
        case "mdid":
            Practitioner.identifier[0].type.coding[0].code = "MD";
            Practitioner.identifier[0].system="https://twcore.mohw.gov.tw/ts/namingsystem.jsp?status=active&amp;type=0"
            break;
    }
    Practitioner.identifier.value = document.getElementById("identifier").value
    Practitioner.active = (document.getElementById("active").value === "true");
    Practitioner.name[0].text = document.getElementById("name").value;
    Practitioner.telecom[0].value = document.getElementById("telecom").value;
    Practitioner.address[0].country = document.getElementById("addressCountry").value;
    Practitioner.address[0].postalCode = document.getElementById("postalCode").value;
    Practitioner.address[0].city = document.getElementById("addressCity").value;
    Practitioner.address[0].district = document.getElementById("addressDistrict").value;
    Practitioner.address[0].line[0] = document.getElementById("addressLine").value;
    Practitioner.gender = document.getElementById("gender").value;
    Practitioner.birthDate = document.getElementById("birthday").value;

    fetch("https://twcore.hapi.fhir.tw/fhir/Practitioner", {
        method: "POST",
        body: JSON.stringify(Practitioner),
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

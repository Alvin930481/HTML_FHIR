
function getData() {
    Encounter.identifier[0].value = document.getElementById("identifier").value;
    Encounter.status = document.getElementById("status").value;
    Encounter.class.code = document.getElementById("class").value;

    let selectElement = document.getElementById("class");
    let selectedOption = selectElement.options[selectElement.selectedIndex]
    Encounter.class.display = selectedOption.innerText;

    Encounter.serviceType.coding.code = document.getElementById("serviceType").value;

    let selectElement1 = document.getElementById("serviceType");
    let selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
    Encounter.serviceType.coding.display = selectedOption1.innerText;

    Encounter.subject.reference = document.getElementById("subject").value;
    Encounter.participant[0].individual.reference = document.getElementById("individual").value;
    Encounter.period.start=document.getElementById("period").value;
    Encounter.reasonCode[0].coding[0].code=document.getElementById("reasonCode").value;
    Encounter.reasonCode[0].coding[0].display=document.getElementById("reasonDisplay").value;
    Encounter.hospitalization.dischargeDisposition.coding[0].code = document.getElementById("hospitalization").value;
    let selectElement2 = document.getElementById("hospitalization");
    let selectedOption2 = selectElement2.options[selectElement1.selectedIndex];
    Encounter.hospitalization.dischargeDisposition.coding[0].display = selectedOption2.innerText;
    Encounter.location[0].location.reference = document.getElementById("location").value;
    Encounter.serviceProvider.reference = document.getElementById("serviceProvider").value;

    fetch("https://twcore.hapi.fhir.tw/fhir/Encounter", {
        method: "POST",
        body: JSON.stringify(Encounter),
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

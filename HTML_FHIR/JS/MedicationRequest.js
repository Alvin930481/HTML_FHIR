function getData() {
    MedicationRequest.identifier[0].value = document.getElementById("identifier").value;
    MedicationRequest.status = document.getElementById("status").value;
    MedicationRequest.intent = document.getElementById("intent").value;
    MedicationRequest.category[0].coding[0].code = document.getElementById("category").value;
    let selectElement = document.getElementById("category");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    MedicationRequest.category[0].coding[0].display = selectedOption.innerText;
    MedicationRequest.medicationReference.reference = document.getElementById("medicationReference").value;
    MedicationRequest.subject.reference = document.getElementById("subject").value;
    MedicationRequest.encounter.reference = document.getElementById("encounter").value;
    MedicationRequest.authoredOn.reference = document.getElementById("authoredOn").value;
    MedicationRequest.requester.reference = document.getElementById("requester").value;
    MedicationRequest.reasonReference[0].reference = document.getElementById("reasonReference").value;
    MedicationRequest.note[0].authorString = document.getElementById("authorString").value;
    MedicationRequest.dosageInstruction[0].timing.code.coding[0].code = document.getElementById("timing").value;
    let selectElement1 = document.getElementById("timing");
    let selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
    MedicationRequest.dosageInstruction[0].timing.code.coding[0].display = selectedOption1.innerText;
    MedicationRequest.dosageInstruction[0].route.coding[0].code = document.getElementById("routeCode").value;
    MedicationRequest.dosageInstruction[0].route.coding[0].display = document.getElementById("route").value;
    MedicationRequest.dispenseRequest.validityPeriod.start = document.getElementById("validityPeriod").value;
    MedicationRequest.dispenseRequest.numberOfRepeatsAllowed = Number(document.getElementById("numberOfRepeatsAllowed").value);
    MedicationRequest.dispenseRequest.expectedSupplyDuration.value = Number(document.getElementById("expectedSupplyDuration").value);

    console.log(MedicationRequest);
    fetch("https://twcore.hapi.fhir.tw/fhir/MedicationRequest", {
        method: "POST",
        body: JSON.stringify(MedicationRequest),
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
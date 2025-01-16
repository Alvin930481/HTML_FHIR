
function getData() {
    MedicationStatement.identifier[0].value = document.getElementById("identifier").value;
    MedicationStatement.status = document.getElementById("status").value;
    MedicationStatement.category.coding[0].code = document.getElementById("categoryCode").value;
    MedicationStatement.category.coding[0].display = document.getElementById("category").value;
    MedicationStatement.medicationReference.reference = document.getElementById("medicationReference").value;
    MedicationStatement.dosage[0].text = document.getElementById("text").value;
    MedicationStatement.dosage[0].timing.repeat.count = Number(document.getElementById("count").value);
    MedicationStatement.dosage[0].timing.repeat.duration = Number(document.getElementById("duration").value);
    MedicationStatement.dosage[0].timing.repeat.durationUnit = document.getElementById("durationUnit").value;
    MedicationStatement.dosage[0].timing.repeat.frequency = Number(document.getElementById("frequency").value);
    MedicationStatement.dosage[0].timing.repeat.period = Number(document.getElementById("period").value);
    MedicationStatement.dosage[0].timing.repeat.periodUnit = document.getElementById("periodUnit").value;
    //checkbox資料彙整
    const checkboxes = document.querySelectorAll('input[name="days"]:checked');
    const selectedDays = [];

    checkboxes.forEach((checkbox) => {
        selectedDays.push(checkbox.value);
    });
    MedicationStatement.dosage[0].timing.repeat.dayOfWeek = selectedDays;
    MedicationStatement.dosage[0].timing.repeat.timeOfDay = [document.getElementById("timeOfDay").value+":00"];
    MedicationStatement.dosage[0].route.coding[0].code= document.getElementById("routeCode").value;
    MedicationStatement.dosage[0].route.coding[0].display = document.getElementById("route").value;
    MedicationStatement.dosage[0].doseAndRate[0].doseRange.low.value = Number(document.getElementById("doseAndRate").value);
    MedicationStatement.dosage[0].doseAndRate[0].rateRange.low.value = Number(document.getElementById("rateRange").value);

    
    fetch("https://twcore.hapi.fhir.tw/fhir/MedicationStatement", {
        method: "POST",
        body: JSON.stringify(MedicationStatement),
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
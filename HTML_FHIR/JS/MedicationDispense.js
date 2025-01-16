
function getData() {
    MedicationDispense.identifier[0].value = document.getElementById("identifier").value;
    MedicationDispense.identifier[0].value = document.getElementById("status").value;
    MedicationDispense.category.coding[0].code = document.getElementById("categoryCode").value;
    MedicationDispense.category.coding[0].display = document.getElementById("category").value;
    MedicationDispense.medicationReference.reference = document.getElementById("medicationCodeableConcept").value;
    MedicationDispense.subject.reference = document.getElementById("subject").value;
    MedicationDispense.context.reference = document.getElementById("context").value;
    MedicationDispense.performer[0].actor.reference = document.getElementById("performer").value;
    MedicationDispense.authorizingPrescription[0].reference = document.getElementById("authorizingPrescription").value;
    MedicationDispense.type.coding[0].code = document.getElementById("typeCode").value;
    MedicationDispense.type.coding[0].display = document.getElementById("type").value;
    MedicationDispense.quantity.value = Number(document.getElementById("quantity").value);
    MedicationDispense.daysSupply.value = Number(document.getElementById("daysSupply").value);
    MedicationDispense.whenHandedOver = document.getElementById("whenHandedOver").value;
    MedicationDispense.dosageInstruction[0].sequence = Number(document.getElementById("sequence").value);
    MedicationDispense.dosageInstruction[0].text = document.getElementById("text").value;
    MedicationDispense.dosageInstruction[0].patientInstruction = document.getElementById("patientInstruction").value;
    MedicationDispense.dosageInstruction[0].timing.repeat.count = Number(document.getElementById("count").value);
    MedicationDispense.dosageInstruction[0].timing.repeat.duration = Number(document.getElementById("duration").value);
    MedicationDispense.dosageInstruction[0].timing.repeat.durationUnit = document.getElementById("durationUnit").value;
    MedicationDispense.dosageInstruction[0].timing.repeat.frequency = Number(document.getElementById("frequency").value);
    MedicationDispense.dosageInstruction[0].timing.repeat.period = Number(document.getElementById("period").value);
    MedicationDispense.dosageInstruction[0].timing.repeat.periodUnit = document.getElementById("periodUnit").value;
    //checkbox資料彙整
    const checkboxes = document.querySelectorAll('input[name="days"]:checked');
    const selectedDays = [];

    checkboxes.forEach((checkbox) => {
        selectedDays.push(checkbox.value);
    });
    MedicationDispense.dosageInstruction[0].timing.repeat.dayOfWeek = selectedDays;
    MedicationDispense.dosageInstruction[0].timing.repeat.timeOfDay = [document.getElementById("timeOfDay").value+":00"];
    MedicationDispense.dosageInstruction[0].route.coding[0].code = document.getElementById("routeCode").value;
    MedicationDispense.dosageInstruction[0].route.coding[0].display = document.getElementById("route").value;
    MedicationDispense.dosageInstruction[0].doseAndRate[0].doseRange.low.value = Number(document.getElementById("doseAndRate").value);
    MedicationDispense.dosageInstruction[0].doseAndRate[0].rateRange.low.value = Number(document.getElementById("rateRange").value);

    console.log(MedicationDispense);

    fetch("https://twcore.hapi.fhir.tw/fhir/MedicationDispense", {
        method: "POST",
        body: JSON.stringify(MedicationDispense),
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
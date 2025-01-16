

function getData() {
    AllergyIntolerance.clinicalStatus.coding[0].display = document.getElementById("clinicalStatus").value;
    AllergyIntolerance.clinicalStatus.coding[0].code = document.getElementById("clinicalStatus").value.toLowerCase();
    AllergyIntolerance.verificationStatus.coding[0].code = document.getElementById("verificationStatus").value;

    let selectElement = document.getElementById("verificationStatus");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    AllergyIntolerance.verificationStatus.coding[0].display = selectedOption.textContent;

    AllergyIntolerance.code.coding[0].code=document.getElementById("coding").value;
    AllergyIntolerance.code.coding[0].display=document.getElementById("code").value;
    AllergyIntolerance.patient.reference=document.getElementById("patient").value;
    AllergyIntolerance.recordedDate=document.getElementById("recordedDate").value;
    AllergyIntolerance.recorder.reference=document.getElementById("recorder").value;
    AllergyIntolerance.note[0].authorString=document.getElementById("note").value;
    AllergyIntolerance.reaction[0].manifestation[0].coding[0].code=document.getElementById("reactionCode").value;
    AllergyIntolerance.reaction[0].manifestation[0].coding[0].display=document.getElementById("reaction").value;


    fetch("https://twcore.hapi.fhir.tw/fhir/AllergyIntolerance", {
        method: "POST",
        body: JSON.stringify(AllergyIntolerance),
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

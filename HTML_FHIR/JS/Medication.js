
function getData() {
    Medication.code.coding[0].system = document.getElementById("codeType").value;
    Medication.code.coding[0].code = document.getElementById("code").value;
    Medication.code.coding[0].display = document.getElementById("display").value;
    Medication.form.coding[0].code = document.getElementById("formCode").value;
    Medication.form.coding[0].display= document.getElementById("form").value;
  

    fetch("https://twcore.hapi.fhir.tw/fhir/Medication", {
        method: "POST",
        body: JSON.stringify(Medication),
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

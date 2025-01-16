
function getData() {
    Observation.status = document.getElementById("status").value;
    Observation.code.coding[0].code = document.getElementById("code").value;
    Observation.subject.reference = document.getElementById("subject").value;
    Observation.effectiveDateTime = document.getElementById("effectiveDateTime").value;
    Observation.performer[0].reference = document.getElementById("performer").value;
    Observation.valueString = document.getElementById("valueString").value;
    Observation.component[0].code.coding[0].code = document.getElementById("componentCode").value;
    Observation.component[0].code.coding[0].display = document.getElementById("component").value;

console.log(Observation);

    fetch("https://twcore.hapi.fhir.tw/fhir/Observation", {
        method: "POST",
        body: JSON.stringify(Observation),
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

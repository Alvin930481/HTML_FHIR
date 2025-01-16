
function getData() {
    Specimen.identifier[0].value = document.getElementById("identifier").value;
    Specimen.type.coding[0].code = document.getElementById("typeCode").value;
    Specimen.type.coding[0].display = document.getElementById("type").value;
    Specimen.subject.reference = document.getElementById("subject").value;
  

    fetch("https://twcore.hapi.fhir.tw/fhir/Specimen", {
        method: "POST",
        body: JSON.stringify(Specimen),
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

function getData() {
    Procedure.status = document.getElementById("status").value;
    Procedure.status = document.getElementById("status").value;
    const select = document.getElementById("codecode").value;
    document.getElementById("codecodeLink").href=select;
    Procedure.code.coding[0].code = document.getElementById("codec").value;
    Procedure.code.coding[0].display = document.getElementById("code").value;
    Procedure.subject.reference = document.getElementById("subject").value;
    Procedure.performedDateTime = document.getElementById("performedDateTime").value;
    Procedure.asserter.reference = document.getElementById("asserter").value;
    Procedure.performer[0].actor.reference = document.getElementById("performer").value;
    Procedure.bodySite[0].coding[0].code = document.getElementById("bodySiteCode").value;
    Procedure.bodySite[0].coding[0].display = document.getElementById("bodySite").value;

    fetch("https://twcore.hapi.fhir.tw/fhir/Procedure", {
        method: "POST",
        body: JSON.stringify(Procedure),
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
function getData() {
    DiagnosticReport.status = document.getElementById("status").value;
    DiagnosticReport.category[0].coding[0].code = document.getElementById("categoryCode").value;
    DiagnosticReport.category[0].coding[0].display = document.getElementById("category").value;
    DiagnosticReport.code.coding[0].system = document.getElementById("codeSystem").value;
    DiagnosticReport.code.coding[0].code = document.getElementById("codeCode").value;
    DiagnosticReport.code.coding[0].display = document.getElementById("code").value;
    DiagnosticReport.subject.reference = document.getElementById("subject").value;
    DiagnosticReport.effectiveDateTime = document.getElementById("effectiveDateTime").value;
    DiagnosticReport.effectiveDateTime = document.getElementById("issued").value;
    DiagnosticReport.performer[0].reference = document.getElementById("performer").value;
    DiagnosticReport.result[0].reference = document.getElementById("result").value;
    DiagnosticReport.conclusion = document.getElementById("conclusion").value;

    function updateLink() {
        // 取得 select 元素
        var selectElement = document.getElementById("codeSystem");
        // 取得 a 元素
        var linkElement = document.getElementById("codeSystemLink");

        // 根據選擇的值更新 href 屬性
        linkElement.href = selectElement.value;
    }

    fetch("https://twcore.hapi.fhir.tw/fhir/DiagnosticReport", {
        method: "POST",
        body: JSON.stringify(DiagnosticReport),
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
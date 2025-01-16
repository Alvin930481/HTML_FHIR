
function getData() {
    Condition.clinicalStatus.coding[0].code = document.getElementById("clinicalStatus").value;
    let selectElement = document.getElementById("clinicalStatus");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    Condition.clinicalStatus.coding[0].display= selectedOption.textContent;

    Condition.verificationStatus.coding[0].code = document.getElementById("verificationStatus").value;

    let selectElement1 = document.getElementById("verificationStatus");
    let selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
    Condition.verificationStatus.coding[0].display = selectedOption1.textContent;
    Condition.category[0].coding[0].code = document.getElementById("category").value;
    Condition.category[0].coding[0].display=(document.getElementById("category").options[document.getElementById("category").selectedIndex]).textContent;
    Condition.severity.coding[0].code = document.getElementById("severity").value;
    Condition.severity.coding[0].display=(document.getElementById("severity").options[document.getElementById("severity").selectedIndex]).textContent;
    Condition.code.coding[0].system=document.getElementById("codeType").value;
    Condition.code.coding[0].code=document.getElementById("code").value;
    Condition.bodySite[0].coding[0].code=document.getElementById("bodySiteCode").value;
    Condition.bodySite[0].coding[0].display=document.getElementById("bodySite").value;
    Condition.subject.reference=document.getElementById("patient").value;
    Condition.onsetDateTime=document.getElementById("date").value;
    Condition.abatementDateTime=document.getElementById("abatementDateTime").value;
    Condition.asserter.reference=document.getElementById("asserter").value;
    Condition.note[0].authorString=document.getElementById("note").value;


    function updateLink() {
        // 取得選單選擇的連結
        var selectedLink = document.getElementById("codeType").value;
        // 將連結更新到 <a> 標籤的 href 屬性
        document.getElementById("codeLink").href = selectedLink;
    }
    // 預設載入時執行一次，確保初始值是正確的
    window.onload = updateLink;

    fetch("https://twcore.hapi.fhir.tw/fhir/Condition", {
        method: "POST",
        body: JSON.stringify(Condition),
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

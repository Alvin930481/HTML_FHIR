function getData() {
    Organization.active = (document.getElementById("active").value==="true");
    Organization.name = document.getElementById("name").value;
    Organization.telecom[0].value = document.getElementById("telecom").value;

    fetch("https://twcore.hapi.fhir.tw/fhir/Organization", {
        method: "POST",
        body: JSON.stringify(Organization),
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

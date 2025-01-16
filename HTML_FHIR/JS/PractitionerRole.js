
function getData() {
    PractitionerRole.identifier[0].value = document.getElementById("identifier").value;
    PractitionerRole.active = document.getElementById("identifier").value === "true";
    PractitionerRole.practitioner.reference = document.getElementById("practitioner").value;
    PractitionerRole.organization.reference = document.getElementById("organization").value;
    PractitionerRole.specialty[0].coding[0].code = document.getElementById("specialtyCode").value;
    PractitionerRole.specialty[0].coding[0].display = document.getElementById("specialty").value;
    PractitionerRole.location[0].reference = document.getElementById("location").value;
    PractitionerRole.telecom[0].value = document.getElementById("telecom").value;



    fetch("https://twcore.hapi.fhir.tw/fhir/PractitionerRole", {
        method: "POST",
        body: JSON.stringify(PractitionerRole),
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
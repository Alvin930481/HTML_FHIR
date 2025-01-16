function getData() {
    ImagingStudy.identifier[0].type.coding[0].code=document.getElementById("identifierCode").value;
    ImagingStudy.identifier[0].type.coding[0].display=document.getElementById("identifier").value;
    ImagingStudy.modality[0].code=document.getElementById("modalityCode").value;
    ImagingStudy.modality[0].display=document.getElementById("modality").value;
    ImagingStudy.subject.reference=document.getElementById("subject").value;
    ImagingStudy.started=document.getElementById("started").value;
    ImagingStudy.procedureCode[0].coding[0].code=document.getElementById("procedureCode").value;
    let selectElement = document.getElementById("procedureCode");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    ImagingStudy.procedureCode[0].coding[0].display= selectedOption.innerText;
    ImagingStudy.reasonCode[0].coding[0].code=document.getElementById("reasonCode").value;
    ImagingStudy.reasonCode[0].coding[0].display=document.getElementById("reason").value;
    ImagingStudy.series[0].uid=document.getElementById("seriesUID").value;
    ImagingStudy.series[0].modality.code=document.getElementById("modalityCode").value;
    ImagingStudy.series[0].modality.display=document.getElementById("modality").value;
    ImagingStudy.series[0].instance[0].uid=document.getElementById("instanceUID").value;
    ImagingStudy.series[0].instance[0].sopClass.display=document.getElementById("sopClass").value;

    fetch("https://twcore.hapi.fhir.tw/fhir/ImagingStudy", {
        method: "POST",
        body: JSON.stringify(ImagingStudy),
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
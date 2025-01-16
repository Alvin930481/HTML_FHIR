//轉換檔案編碼並送到ＪＳＯＮ
function convertToBase64() {
    const fileInput = document.getElementById('content');
    const file = fileInput.files[0]; // 取得使用者選擇的檔案

    if (file) {
        const reader = new FileReader();
        
        // 當讀取完成時執行這個函數
        reader.onload = function(event) {
            const base64String = event.target.result.split(',')[1]; // 取得 Base64 字串
            Media.content.data =base64String; // 在這裡可以處理 Base64 字串，例如送到伺服器
        };
 
    } else {
        alert("請選擇一個檔案！");
    }
}

function getData() {
    Media.subject.reference=document.getElementById("subject").value;
   convertToBase64();

    fetch("https://twcore.hapi.fhir.tw/fhir/Media", {
        method: "POST",
        body: JSON.stringify(Media),
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
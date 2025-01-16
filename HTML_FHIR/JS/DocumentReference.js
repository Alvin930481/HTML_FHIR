//時間格式轉換
function formatDateToCustomString(dateTimeLocal) {
    const date = new Date(dateTimeLocal);
    const pad = (n) => n.toString().padStart(2, '0');
    const padMilliseconds = (n) => n.toString().padStart(3, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = padMilliseconds(date.getMilliseconds());

    const offset = -date.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const offsetHours = pad(Math.floor(Math.abs(offset) / 60));
    const offsetMinutes = pad(Math.abs(offset) % 60);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${sign}${offsetHours}:${offsetMinutes}`;
}

//轉換檔案編碼並送到ＪＳＯＮ
function convertToBase64() {
    const fileInput = document.getElementById('content');
    const file = fileInput.files[0]; // 取得使用者選擇的檔案

    if (file) {
        const reader = new FileReader();

        // 當讀取完成時執行這個函數
        reader.onload = function (event) {
            const base64String = event.target.result.split(',')[1]; // 取得 Base64 字串
            DocumentReference.content[0].attachment.data = base64String; // 在這裡可以處理 Base64 字串，例如送到伺服器
        };

    } else {
        alert("請選擇一個檔案！");
    }
}

function getData() {
    // 獲取 datetime-local 輸入的值
    let dateTimeLocalValue = document.getElementById('date').value;

    let formattedDateTime;
    if (dateTimeLocalValue) {
        // 將日期時間格式化
        formattedDateTime = formatDateToCustomString(dateTimeLocalValue)
    };

    DocumentReference.masterIdentifier.value = document.getElementById("masterIdentifier").value;
    DocumentReference.status = document.getElementById("status").value;
    DocumentReference.type.coding[0].code = document.getElementById("typeCode").value;
    DocumentReference.type.coding[0].display = document.getElementById("type").value;
    DocumentReference.category[0].coding[0].code = document.getElementById("categoryCode").value;
    DocumentReference.category[0].coding[0].display = document.getElementById("category").value;
    DocumentReference.subject.reference = document.getElementById("subject").value;
    DocumentReference.date = formattedDateTime;
    DocumentReference.author[0].reference = document.getElementById("author").value;
    convertToBase64();




    fetch("https://twcore.hapi.fhir.tw/fhir/DocumentReference", {
        method: "POST",
        body: JSON.stringify(DocumentReference),
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
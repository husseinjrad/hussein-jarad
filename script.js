const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();

// رفع الصورة
document.getElementById("imageUpload").addEventListener("change", function(e) {
    const reader = new FileReader();
    reader.onload = function() {
        image.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// رسم الصورة
image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
}

// إنشاء الميم
function generateMeme() {

    ctx.drawImage(image, 0, 0);

    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const fontSize = document.getElementById("fontSize").value;

    ctx.font = fontSize + "px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineWidth = 2;

    // النص العلوي
    ctx.fillText(topText, canvas.width / 2, fontSize);
    ctx.strokeText(topText, canvas.width / 2, fontSize);

    // النص السفلي
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 10);

    // تحميل
    document.getElementById("download").href = canvas.toDataURL();
}
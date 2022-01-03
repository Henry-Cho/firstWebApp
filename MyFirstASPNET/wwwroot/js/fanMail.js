$("#btn").click(() => {
    let from = $("#from").val();
    let sub = $("#sub").val();
    let txt = $("#txt").val();
    alert("From: " + from + "," + "\n" + "Subject: " + sub + "\n" + "Message: " + txt);
})
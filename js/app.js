async function addVCard() {
    var base64 = await toDataURL($("#photo").prop('src'));
    base64 = base64.split('base64,')[1];
    console.log(base64);
    var name = $("#name").html();
    name = name.replaceAll("&nbsp;", "");
    var position = $("#phone").html();
    position = position.replaceAll("&nbsp;", "");
    var linkedin = $("#linkedin").attr("href");
    var phone = $("#phone").html();
    phone = phone.replaceAll("&nbsp;", "");
    var address = $("#address").html();
    address = address.replaceAll("&nbsp;", "");
    var mail = $("#mail").html();
    mail = mail.replaceAll("&nbsp;", "");
    var link = $("#web").html();
    link = link.replaceAll("&nbsp;", "");
    var text1 = $("#text1").html();
    text1 = text1.replaceAll("&nbsp;", "");
    var text2 = $("#text2").html();
    text2 = text2.replaceAll("&nbsp;", "");

    var newVCard = vCard.create(vCard.Version.THREE)
    newVCard.add(vCard.Entry.PRODID, "")
    newVCard.add(vCard.Entry.NAME, name)
    newVCard.add(vCard.Entry.FORMATTEDNAME, name)
    newVCard.add(vCard.Entry.ORGANIZATION, "")
    newVCard.add(vCard.Entry.TITLE, "")
    newVCard.add(vCard.Entry.EMAIL, mail, vCard.Type.WORK)
    newVCard.add(vCard.Entry.PHONE, phone, vCard.Type.CELL)
    // johnDoe.add(vCard.Entry.ORGANIZATION, "JohnDoe Corp.")
    newVCard.add(vCard.Entry.ADDRESS, ";;" + address, vCard.Type.HOME)
    newVCard.add(vCard.Entry.URL, link)
    newVCard.add(vCard.Entry.PHOTO, base64)
    newVCard.add(vCard.Entry.TEXT1, text1)
    newVCard.add(vCard.Entry.TEXT2, text2)

    var link = vCard.export(newVCard, "VCard", true) // use parameter true to force download
}
const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))

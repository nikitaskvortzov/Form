function checkForm (el) {

let name = el.name.value
let pass = el.pass.value
let repass = el.repass.value
let state = el.state.value

let fail = ""


if (name == "" || pass == "" || state == "")
    fail = "Обязательные поля не заполнены"
else if (name.length <= 4 || name.length > 10)
    fail = "Длинна в поле - \"Имя\" не может быть меньше 4 и больше 10 символов"
else if(pass != repass)
    fail = "Пароли должны совпадать"
else if(pass.split("@").length > 1)
    fail = "Не пытайся нас наебать"
if (fail != "") {
   document.getElementById("error").innerHTML = fail

  return false  
} else {
    alert("Все данные корректно заполнены")
    window.location ="https://www.tadviser.ru/images/thumb/8/88/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_Pornhub_%D1%83%D0%B2%D0%BE%D0%BB%D0%B8%D0%BB%D1%81%D1%8F_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%81%D0%BA%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8_%D1%81_%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%BC_%D0%BF%D0%BE%D1%80%D0%BD%D0%BE_25-06-2022.png/840px-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_Pornhub_%D1%83%D0%B2%D0%BE%D0%BB%D0%B8%D0%BB%D1%81%D1%8F_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%81%D0%BA%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8_%D1%81_%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%BC_%D0%BF%D0%BE%D1%80%D0%BD%D0%BE_25-06-2022.png"
    return false
}
}




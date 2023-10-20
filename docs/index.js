function button () {
    let text = document.getElementById("id")
    let text1 = text.value 

    if (text1 == "Понедельник") {
        alert ("Первый день недели")
        document.getElementById("id2").value = text1
    } else if (text1 == "Вторник") {
        alert ("Второй день недели")
        document.getElementById("id2").value = text1
    } else if (text1 == "Среда") {
        alert ("Третий день недели")
        document.getElementById("id2").value = text1
    } else if (text1 == "Четверг") {
        alert ("Четвертый день недели")
        document.getElementById("id2").value = text1
    } else if (text1 == "Пятница") {
        alert ("Почти лучший деньнедели")
        document.getElementById("id2").value = text1
    } else if (text1 == "Суббота") {
        alert ("Самогон и кола") 
        document.getElementById("id2").value = text1
    } else if (text1 == "Воскресенье") {
        alert ("Завтра снова на работу")
        document.getElementById("id2").value = text1
    } else {
        alert ("Да госпади введи ты правильно день недели, просто скопируй и вставь!!!")
        document.getElementById("id2").value = "        Error Иблан!!!"
    }
    
    text.value = ""
}








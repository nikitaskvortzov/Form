function button () {
    let text = document.getElementById("id")
    let text1 = text.value 

    if (text1 == "Понедельник") {
        alert ("Первый день недели")
    } else if (text1 == "Вторник") {
        alert ("Второй день недели")
    } else if (text1 == "Среда") {
        alert ("Третий день недели")
    } else if (text1 == "Четверг") {
        alert ("Четвертый день недели")
    } else if (text1 == "Пятница") {
        alert ("Почти лучший деньнедели")
    } else if (text1 == "Суббота") {
        alert ("Самогон и кола") 
    } else if (text1 == "Воскресенье") {
        alert ("Завтра снова на работу")
    } else {
        alert ("Да госпади введи ты правильно день недели, просто скопируй и вставь!!!")
    }
    
    text.value = ""
}
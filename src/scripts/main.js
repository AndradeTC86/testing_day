AOS.init()

const eventDate = new Date("Sep 09, 2025, 09:00:00")
const eventTimeStamp = eventDate.getTime()

const countdown = setInterval(() => {
    const now = new Date()
    const actualTimeStamp = now.getTime()

    const days = 1000 * 60 * 60 * 24
    const hours = 1000 * 60 * 60
    const minutes = 1000 * 60    

    const distance = eventTimeStamp - actualTimeStamp
    const countDays = Math.floor(distance / days)
    const countHours = Math.floor((distance % days) / hours)
    const countMinutes = Math.floor((distance % hours) / minutes)
    const countSeconds = Math.floor((distance % minutes) / 1000)

    if (distance < 0) {
        clearInterval(countdown)
        document.getElementById("contador").innerHTML = "O evento já aconteceu, esperamos que sua experiência tenha sido incrível!"
    }
    else {
        document.getElementById("contador").innerHTML = `${countDays} dias ${countHours} horas ${countMinutes} minutos ${countSeconds} segundos.`
    }
}, 1000)

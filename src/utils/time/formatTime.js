export function formatTime(departureDateTime) {
    // Tarih ve saati Date nesnesine dönüştür
    var date = new Date(departureDateTime);

    // Saat ve dakikayı al
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Saat ve dakikayı iki basamaklı formatla
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Formatlanmış saati döndür
    return hours + ':' + minutes;
}

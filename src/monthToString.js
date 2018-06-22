function findMonthString(month, short) {
    switch (month) {
        case 0: return short ? "Jan" : "Janeiro";
        case 1: return short ? "Fev" : "Fevereiro";
        case 2: return short ? "Mar" : "Março";
        case 3: return short ? "Abr" : "Abril";
        case 4: return short ? "Mai" : "Maio";
        case 5: return short ? "Jun" : "Junho";
        case 6: return short ? "Jul" : "Julho";
        case 7: return short ? "Ago" : "Agosto";
        case 8: return short ? "Set" : "Setembro";
        case 9: return short ? "Out" : "Outubro";
        case 10: return short ? "Nov" : "Novembro";
        case 11: return short ? "Dez" : "Dezembro";
        default: ;
    }
}

export default findMonthString;
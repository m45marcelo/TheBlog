export function numberToDate(date: string, isCutter: boolean):string {
    const dateParts: string[] = date.split('/');
    const month: number = Number(dateParts[1]);
    const months: string[] = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const monthsCutter: string[] = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" 
    ]

    if(isCutter) return `${dateParts[0]} ${monthsCutter[month -1]} ${dateParts[2]}`

    return `${dateParts[0]} de ${months[month -1]} de ${dateParts[2]}`

}
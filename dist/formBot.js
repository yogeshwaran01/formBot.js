let sendMessage = (event, formId = "formBot", chatId = null) => {
    const form = document.getElementById(formId)
    let chatid = chatId || form.getAttribute('chatId')
    let data = {
        data: [],
        timestamp: new Date(event.timeStamp),
        chatId: chatid
    }
    let formData = new FormData(form)
    let names = form.getAttribute('names').split(" ")
    names.forEach(name => {
        data.data.push({
            'name': name,
            'value': formData.get(name)
        })
    })
    event.preventDefault()

    const api = "https://z9nyf8.deta.dev/formBot"

    let string = `
Submited At: ${data.timestamp}
    `
    data.data.forEach(d => {
        string += `\n ${d.name}: ${d.value}`
    })

    fetch(api, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'text': string,
            'chatid': data.chatId
        })
    })
        .then(r => {
            console.log(r)
        })
        .catch(r => {
            console.log(r)
        })
}

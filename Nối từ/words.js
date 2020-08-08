url = "https://ada48db0-94ea-46f5-bcd6-03bad4eed780.mock.pstmn.io/"
var api = []

axios.get(url).then(function (response) {
    state = "OK"
    data = response["data"]
    api = [...new Set(data)].sort()
    for (let i = 0; i < api.length; i++) {
        count = 0
        word = api[i]
        splited = word.split("")
        for (let k = 0; k < splited.length; k++) {
            if (splited[k] == " ") { count++ }
        }
        console.log(count)
        if (count!=1) { state = "OH NO" }
    }
    console.log(state)
    document.getElementsByTagName("pre")[0].innerHTML = JSON.stringify(api,undefined,4)
})
import jsonp from 'jsonp'
import fetch from 'axios'

function formmatUrl(url, params) {
    let arrParams = []
    for (let [key, value] of Object.entries(params)) {
        arrParams.push(`{key}={value}`)
    }
    let strParams = arrParams.join('')
}
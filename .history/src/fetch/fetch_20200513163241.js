import jsonp from 'jsonp'
import fetch from 'axios'

function formmatUrl(url, params) {
    let arrParams = []
    for (let [key, value] of Object.entries(params)) {
        arrParams.push(`{key}={value}`)
    }
    let strParams = arrParams.join('&')
    if (url.indexOf('?') === -1) {
        return `${url}?${strParams}`
    } else {
        return `${url}&${strParams}`
    }
}

export function fetchApi(url, params) {
    return fetch(formmatUrl(url, params), {
        method: 'GET'
    })
}

export function fetchJsonp(url, opt)
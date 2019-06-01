let address = ''

let addressSplit = address.split(',')
let street = addressSplit[0]
let city = addressSplit[1]

let stateZipSplit = addressSplit[2].split(' ')

let state = stateZipSplit[0]
let zip = stateZipSplit[1]

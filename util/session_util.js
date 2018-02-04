export function createSession(){
    return $.ajax({
        url: 'https://api.opentok.com/session/create',
        crossDomain: true,
        method: 'POST',
        headers:{
            'X-OPENTOK-AUTH': 
        }
    })
}
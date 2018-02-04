export default function fetchSession(){
  return fetch('https://peer-learn.herokuapp.com/room/1')
    .then((config) => {
    return config.json()
    })
    .catch((error) => {
      console.log('error', error);
})
}

// export default {
//   API_KEY: '46052232',
//   SESSION_ID: '1_MX40NjA1MjIzMn5-MTUxNzY5MTEzMDg1MX5LOEFEYjFEdzdFYTBwbHl5YWNoMDNGcHd-fg',
//   TOKEN: 'T1==cGFydG5lcl9pZD00NjA1MjIzMiZzaWc9MjNmNDMzM2Y3MjNhNTJmODk1MWZhZDhlOTExMDFiYzMzODg5MTgxZTpzZXNzaW9uX2lkPTFfTVg0ME5qQTFNakl6TW41LU1UVXhOelk1TVRFek1EZzFNWDVMT0VGRVlqRkVkemRGWVRCd2JIbDVZV05vTUROR2NIZC1mZyZjcmVhdGVfdGltZT0xNTE3NjkxMTYzJm5vbmNlPTAuMDY3MjE4NTA3NDQzMDY0MDEmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMDI4MzE2MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==',
//   // CHROME_EXTENSION_ID: 'baz'
// };

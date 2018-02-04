export default function fetchSession(){
  return fetch('https://peer-learn.herokuapp.com/room/1')
    .then((config) => {
    return config.json()
    })
    .catch((error) => {
      console.log('error', error);
  })
}
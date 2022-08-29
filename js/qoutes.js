const loadQoute = () =>{
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayQopute(data))
}
const displayQopute = qoute =>{
    const blockQoute = document.getElementById('qoute');
    console.log(qoute);
    blockQoute.innerText = qoute.quote;
}

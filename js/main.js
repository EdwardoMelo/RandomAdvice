const p = document.getElementsByTagName('p');
const btn = document.querySelector('.overflow-updater');
const strong = document.getElementsByTagName('strong');

const ApiCall = () =>{
    fetch(`https://api.adviceslip.com/advice`)
    .then(response => { response.json()
     .then(data => {
        p[0].innerText = data.slip.advice;
        strong[0].innerText = `ADVICE #${data.slip.id}`;
     })
    }).catch(err => (err.message));
}
ApiCall();

btn.addEventListener('click', (e) =>{
    ApiCall();
})
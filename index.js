const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://zso3kq52mmcvgnwms42u2f5qtu0tstza.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
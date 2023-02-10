const dogSubmitInput = document.querySelector("#dog-input")
const submitBtn = document.querySelector("#dog-submitdog")

function submitdog (event) {
    constinputVal = dogSubmitInput.value
    fetch("/api/dog/newdog", {
        method: 'POST',
      body: JSON.stringify({ dogSubmitInput.value}),
      headers: { 'Content-Type': 'application/json' },
    })
}


submitBtn.addEventListener("click", submitdog)
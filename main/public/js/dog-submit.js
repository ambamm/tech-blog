const dogSubmitInput = document.querySelector("#dog-input")

function submitdog (event) {
    //const
    fetch("/api/dog/newdog", {
        method: 'POST',
      body: JSON.stringify({ dogSubmitInput.value}),
      headers: { 'Content-Type': 'application/json' },
    })
}
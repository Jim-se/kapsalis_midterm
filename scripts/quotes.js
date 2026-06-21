fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("api_integration").innerHTML = `
            <h2>Daily Quote</h2>
            <p>"${data.quote}"</p>
            <p>- ${data.author}</p>
        `;
    })
    .catch(() => {
        document.getElementById("api_integration").innerHTML = `
            <h2>Daily Quote</h2>
            <p>Could not load quote.</p>
        `;
    });

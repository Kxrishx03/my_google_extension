fetch('https://icanhazdadjoke.com/slack')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const joke = data.attachments[0].text;

    const jokeElement = document.getElementById('jokeText');
    jokeElement.innerHTML = joke; 
    console.log(joke);
  })
  .catch(error => {
   
    console.error('Fetch error:', error);
  });

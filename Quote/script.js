async function fetchRandomQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
  
      return randomQuote;
    } catch (error) {
      console.error('Error fetching random quote:', error);
      return null;
    }
  }
  
  async function updateQuote() {
    const quoteElement = document.querySelector('.quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');
  
    quoteElement.textContent = 'Loading...';
    newQuoteBtn.disabled = true;
  
    const randomQuote = await fetchRandomQuote();
  
    if (randomQuote) {
      quoteElement.textContent = `"${randomQuote.text}" - ${randomQuote.author || 'Unknown'}`;
    } else {
      quoteElement.textContent = 'Failed to fetch a quote.';
    }
  
    newQuoteBtn.disabled = false;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById('new-quote-btn').addEventListener('click', updateQuote);
  
  // Initial quote display
  updateQuote();
  
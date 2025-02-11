// Function to replace "Gulf of America" with "Gulf of Mexico"
function replaceText() {
    document.body.innerHTML = document.body.innerHTML.replace(/Gulf of America/gi, 'Gulf of Mexico');
  }
  
  // Run the function when the page loads
  replaceText();
  
  // Optional: Use a MutationObserver to handle dynamic content changes
  //const observer = new MutationObserver(replaceText);
  //observer.observe(document.body, {
  //  childList: true,
  //  subtree: true
  //});
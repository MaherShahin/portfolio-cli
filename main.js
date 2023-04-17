document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');
  const terminalElement = document.getElementById('terminal');

  
  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const input = inputElement.value.trim();
      processCommand(input, inputElement, outputElement);
      inputElement.value = '';
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  });

  terminalElement.addEventListener('click', () => {
    inputElement.focus();
  });
});

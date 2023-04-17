function clearOutput(outputElement) {
  while (outputElement.firstChild) {
    outputElement.removeChild(outputElement.firstChild);
  }
  outputElement.scrollTop = outputElement.scrollHeight;
  return '';
}

function downloadFile(args) {
  if (args.length === 0) {
    return `<div>Please specify a file to download (e.g., download cv.pdf)</div>`;
  }

  const filename = args[0];
  const targetFile = currentDirectory.children[filename];

  if (targetFile && targetFile.type === 'file') {
    initiateFileDownload(targetFile.content, filename);
    return `<div>Downloading ${filename}...</div>`;
  } else {
    return `<div class="error">${filename}: No such file</div>`;
  }
}


function processCommand(input, inputElement, outputElement) {
  clearOutput(outputElement);
  const commandParts = input.split(' ');
  const command = commandParts[0];
  const args = commandParts.slice(1);

  let output;
  switch (command) {
    case 'help':
      output = displayGeneralHelp();
      break;
    case 'clear':
      output = clearOutput(outputElement);
      break;
    case 'download':
      output = downloadFile(args);
      break;
    case 'contact':
      output = displayContact();
      break;
    case 'cd':
      output = changeDirectory(args);
      break;
    case 'ls':
      output = listDirectoryContents();
      break;
    case 'pwd':
      output = printWorkingDirectory();
      break;
    case 'cv':
      output = displayCV(args);
      break;
    default:
      output = `<div class="error">Command not found: ${command}</div>`;
  }

  const outputLine = document.createElement('div');
  outputElement.appendChild(outputLine);

  const typed = new Typed(outputLine, {
    strings: [output],
    typeSpeed: 0,
    contentType: 'html',
    onStart: () => {
      toggleCursor(inputElement, false);
    },
    onComplete: () => {
      typed.toggle();
      outputElement.scrollTop = outputElement.scrollHeight;
      isCommandRunning = false;
      inputElement.disabled = false;
      inputElement.focus();
      toggleCursor(inputElement, true);
    },
  });
  
  inputElement.disabled = true;
  inputElement.value = '';
}

function toggleCursor(inputElement, isVisible) {
  if (isVisible) {
    inputElement.classList.remove('hidden-cursor');
  } else {
    inputElement.classList.add('hidden-cursor');
  }
}

function initiateFileDownload(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

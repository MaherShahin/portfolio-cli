const rootDirectory = {
  name: '/',
  type: 'directory',
  children: {
    cv: {
      name: 'cv.pdf',
      type: 'file',
      content: 'https://drive.google.com/file/d/1jMUGRz96uy315kYziwZp0L8uwJNZ17ji/view?usp=share_link',
    },
    document1: {
      name: 'document1.txt',
      type: 'file',
      content: 'https://drive.google.com/path/to/document1',
    },
    document2: {
      name: 'document2.txt',
      type: 'file',
      content: 'https://drive.google.com/path/to/document2',
    },
  },
};

let currentDirectory = rootDirectory;

  function changeDirectory(args) {
    if (args.length === 0) {
      currentDirectory = rootDirectory;
      return '';
    }
  
    const target = args[0];
  
    if (target === '..') {
      if (currentDirectory.parent) {
        currentDirectory = currentDirectory.parent;
      }
      return '';
    }
  
    const targetDirectory = currentDirectory.children[target];
    if (targetDirectory && targetDirectory.type === 'directory') {
      currentDirectory = targetDirectory;
      return '';
    }
  
    return `<div>${target}: No such file or directory</div>`;
  }
  
  function listDirectoryContents() {
    const childrenNames = Object.keys(currentDirectory.children).join(' ');
    return `<div>${childrenNames}</div>`;
  }
  
  function printWorkingDirectory() {
    let path = '';
    let current = currentDirectory;
  
    while (current.parent) {
      path = `/${current.name}${path}`;
      current = current.parent;
    }
  
    return `<div>/${path}</div>`;
  }
  
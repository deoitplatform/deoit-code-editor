#!/usr/bin/env node

var https = require('https');
var http = require('http');
var url = require('url');

var DEOIT_URL = 'https://deoit.vercel.app';

var HELP_TEXT = [
  '',
  '  \x1b[1mDeoit CLI\x1b[0m - Open Deoit code editor from your terminal',
  '',
  '  \x1b[36mUsage:\x1b[0m',
  '    deoit                  Open Deoit in your browser',
  '    deoit open             Open Deoit in your browser',
  '    deoit new <name>       Create a new project folder and open Deoit',
  '    deoit embed            Copy embed code to clipboard',
  '    deoit --help           Show this help message',
  '    deoit --version        Show version number',
  '',
  '  \x1b[36mExamples:\x1b[0m',
  '    deoit                  # Opens deoit.vercel.app',
  '    deoit new my-app       # Creates ./my-app and opens Deoit',
  '    deoit embed            # Prints <iframe> embed code',
  '',
  '  \x1b[36mWebsite:\x1b[0m  https://deoit.vercel.app',
  '  \x1b[36mContact:\x1b[0m  deoit.platform@gmail.com',
  ''
].join('\n');

var VERSION = '1.0.0';

function openBrowser(targetUrl) {
  var platform = process.platform;
  var cmd;

  if (platform === 'win32') {
    cmd = 'start "" "' + targetUrl + '"';
  } else if (platform === 'darwin') {
    cmd = 'open "' + targetUrl + '"';
  } else {
    cmd = 'xdg-open "' + targetUrl + '"';
  }

  require('child_process').exec(cmd, function(err) {
    if (err) {
      console.log('\x1b[33m⚠ Could not open browser automatically.\x1b[0m');
      console.log('  Open this URL manually: \x1b[4m' + targetUrl + '\x1b[0m\n');
    } else {
      console.log('\x1b[32m✓ Opening Deoit in your browser...\x1b[0m');
      console.log('  \x1b[90m' + targetUrl + '\x1b[0m\n');
    }
  });
}

function createProject(name) {
  var fs = require('fs');
  var path = require('path');
  var dir = path.join(process.cwd(), name);

  if (fs.existsSync(dir)) {
    console.log('\x1b[33m⚠ Folder "' + name + '" already exists.\x1b[0m');
    console.log('  Opening Deoit anyway...\n');
    openBrowser(DEOIT_URL);
    return;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>' + name + '</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <script src="script.js"><\/script>\n</body>\n</html>');
  fs.writeFileSync(path.join(dir, 'style.css'), '/* ' + name + ' styles */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #0d0d0d;\n  color: #e8e8e8;\n}');
  fs.writeFileSync(path.join(dir, 'script.js'), '// ' + name + '\n\nconsole.log("Hello from Deoit!");');

  console.log('\x1b[32m✓ Created project "' + name + '"\x1b[0m');
  console.log('  \x1b[90m' + dir + '\x1b[0m\n');
  console.log('  Files created:');
  console.log('    \x1b[36mindex.html\x1b[0m');
  console.log('    \x1b[36mstyle.css\x1b[0m');
  console.log('    \x1b[36mscript.js\x1b[0m\n');

  openBrowser(DEOIT_URL);
}

function showEmbedCode() {
  var embedCode = '<iframe\n  src="https://deoit.vercel.app/embed"\n  width="100%"\n  height="500"\n  frameborder="0"\n  style="border-radius:12px;border:1px solid #252525;"\n></iframe>';

  console.log('\n  \x1b[1mEmbed Code\x1b[0m - Paste this in your HTML:\n');
  console.log('  \x1b[90m' + embedCode.replace(/\n/g, '\n  ') + '\x1b[0m\n');

  // Try to copy to clipboard
  var copied = false;
  try {
    if (process.platform === 'win32') {
      require('child_process').execSync('echo ' + JSON.stringify(embedCode) + ' | clip', { stdio: 'ignore' });
      copied = true;
    } else if (process.platform === 'darwin') {
      require('child_process').execSync('echo ' + JSON.stringify(embedCode) + ' | pbcopy', { stdio: 'ignore' });
      copied = true;
    }
  } catch(e) {}

  if (copied) {
    console.log('  \x1b[32m✓ Copied to clipboard!\x1b[0m\n');
  } else {
    console.log('  \x1b[33mCopy the code above and paste it into your HTML.\x1b[0m\n');
  }
}

// Parse arguments
var args = process.argv.slice(2);
var command = args[0] || '';

switch (command) {
  case '--help':
  case '-h':
    console.log(HELP_TEXT);
    break;

  case '--version':
  case '-v':
    console.log('deoit-cli v' + VERSION);
    break;

  case 'new':
    var projectName = args[1] || 'my-project';
    createProject(projectName);
    break;

  case 'embed':
    showEmbedCode();
    break;

  case 'open':
  case '':
    openBrowser(DEOIT_URL);
    break;

  default:
    console.log('\x1b[31mUnknown command: ' + command + '\x1b[0m');
    console.log(HELP_TEXT);
    break;
}

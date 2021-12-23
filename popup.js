//window.console = chrome.extension.getBackgroundPage().console;

const init = () => {
  console.log('Init popup.js');

};
function addFunction() {
  chrome.bookmarks.create({
    'parentId': extensionsFolderId,
    'title': 'Extensions doc',
    'url': 'https://developer.chrome.com/docs/extensions',
  });
  console.log('Add bookmark');
}

window.onload = init;
document.getElementById("add").addEventListener("click", addFunction);

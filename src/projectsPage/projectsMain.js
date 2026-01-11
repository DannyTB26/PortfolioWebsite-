let websiteText = document.getElementsByClassName('website_hidden');
let websiteButton = document.getElementById('website_btn');

let gameProjectText = document.getElementsByClassName('game_project_hidden');
let gameProjectButton = document.getElementById('game_project_btn');

let translatorText = document.getElementsByClassName('translator_hidden');
let translatorButton = document.getElementById('translator_btn');

let memoryText = document.getElementsByClassName('memory_hidden');
let memoryButton = document.getElementById('memory_btn');

let chatbotText = document.getElementsByClassName('chatbot_hidden');
let chatbotButton = document.getElementById('chatbot_btn');

function buttonSetUp(btn, txts) {
  let expanded = false;

  btn.addEventListener('click', () => {
    expanded = !expanded;

    btn.innerHTML = expanded ? 'Contract' : 'Expand';

    for (let i = 0; i < txts.length; i++) {
      txts[i].hidden = !expanded;
    }
  })
}

buttonSetUp(websiteButton, websiteText);
buttonSetUp(gameProjectButton, gameProjectText);
buttonSetUp(translatorButton, translatorText);
buttonSetUp(memoryButton, memoryText);
buttonSetUp(chatbotButton, chatbotText);

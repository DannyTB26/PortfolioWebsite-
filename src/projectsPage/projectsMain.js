function websiteOpenFunction(event) {
  event.target.innerHTML = "Contract";
  event.target.addEventListener("click", websiteCloseFunction)
  websiteText.hidden = true;
}

function websiteCloseFunction(event) {
  event.target.innerHTML = "Expand";
  event.target.addEventListener("click", websiteOpenFunction);
  websiteText.hidden = true;
}

let websiteText = document.getElementsByClassName('website_hidden');
websiteText.hidden = true;
let websiteButton = document.getElementById('website_btn');
websiteButton.addEventListener('click', websiteOpenFunction);


export const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = () => {
  const dogKeys = Object.keys(dogs);
  let dogLinks = [];
  dogKeys.forEach((dogName) => {
    const aTag = document.createElement("a");
    aTag.innerHTML = dogName;
    aTag.setAttribute("href", dogs[dogName]);
    aTag.setAttribute("target", "_blank");
    const li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(aTag);
    dogLinks.push(li);
  })
  return dogLinks
};

export const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();
  const dropdown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(dog => dropdown.appendChild(dog))
  
}


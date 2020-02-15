
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const textNode = document.createTextNode(string);
    const pEl = document.createElement("p");
    pEl.appendChild(textNode);
    while (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.firstChild);
    }
    htmlElement.appendChild(pEl);
};
// <p>Party Time</p>
htmlGenerator('Party Time.', partyHeader);
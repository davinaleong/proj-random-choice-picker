const formFieldElement = document.querySelector("textarea[name='values']");
const tagsElement = document.querySelector("[data-tags]");
const separator = `,`;

formFieldElement.focus();

formFieldElement.addEventListener(`input`, (e) => createTags(e.target.value));

const createTags = (input) => {
  const tags = input
    .split(separator)
    .filter((tag) => tag.trim() !== ``)
    .map((tag) => tag.trim());

  tagsElement.innerText = ``;
  tags.forEach((tag) => {
    const tagElement = document.createElement(`div`);
    tagElement.classList.add(`tag`);
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
};

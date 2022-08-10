const formFieldElement = document.querySelector("textarea[name='values']");
const tagsElement = document.querySelector("[data-tags]");
const separator = `,`;

formFieldElement.focus();

formFieldElement.addEventListener(`keyup`, (e) => {
  createTags(e.target.value);

  if (e.key === `Enter`) {
    setTimeout(() => (e.target.value = ``), 10);
    randomSelect();
  }
});

const createTags = (input) => {
  console.log(`== Create Tags ==`);

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

const randomSelect = () => {
  console.log(`== Random Select ==`);
};

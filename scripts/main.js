const settings = {
  separator: `,`,
  speed: 100,
  times: 30,
};

const formFieldElement = document.querySelector("textarea[name='values']");
const tagsElement = document.querySelector("[data-tags]");

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
    .split(settings.separator)
    .filter((tag) => tag.trim() !== ``)
    .map((tag) => tag.trim());

  tagsElement.innerText = ``;
  tags.forEach((tag, index) => {
    const tagElement = document.createElement(`div`);
    tagElement.classList.add(`tag`);
    tagElement.setAttribute(`data-tag`, index);
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
};

const randomSelect = () => {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, settings.speed);
  }, settings.speed);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, settings.times * settings.speed);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(`[data-tag]`);
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.setAttribute(`data-selected`, true);
};

const unhighlightTag = (tag) => {
  tag.removeAttribute(`data-selected`);
};

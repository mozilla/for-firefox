
window.addEventListener('DOMContentLoaded', () => {
  let formEl = document.querySelector('.badges__choice');
  let codeEl = document.querySelector('.badges__markup');
  let previewEl = document.querySelector('.badges__preview');
  let templateEl = document.querySelector('.badge__template');
  let copyButton = document.querySelector('.badges__copy');

  const badges = [
    {
      url: 'media/img/shield-badge.png',
      title: 'Developers for Firefox',
      id: 'shield'
    },
    {
      url: '//bits.potch.me/new-firefox.png',
      title: 'Firefox Now!',
      id: 'firefox-now'
    },
    {
      url: '//bits.potch.me/firefox95.GIF',
      title: 'Throwback',
      id: 'throwback'
    }
  ];

  for (let i = 0; i < 5; i++) {
    badges.push(badges[0]);
  }

  badges.forEach((badge, i) => {
    let el = document.importNode(templateEl.content, true);
    el.querySelector('img').setAttribute('src', badge.url);
    el.querySelector('input').value = i;
    formEl.appendChild(el);
  });

  formEl.addEventListener('change', e => {
    let selected = badges[formEl.elements.badge.value];
    let badgeCode = `
<a title="${selected.title}"
   href="https://www.mozilla.org/firefox/this-browser-comes-highly-recommended/?utm_source=devs-for.firefox.com&utm_medium=referral&utm_campaign=devs-for-firefox&utm_content=${selected.id}">
      <img style="border:0 none;"
           alt="Get the new Firefox"
           src="${selected.url}">
</a>
    `.trim();

    previewEl.innerHTML = badgeCode;
    codeEl.value = badgeCode;
  });

  formEl.querySelector('input').click();

  copyButton.addEventListener('click', e => {
    codeEl.select();
    document.execCommand('copy');
  });
})


window.addEventListener('DOMContentLoaded', () => {
  let formEl = document.querySelector('.badges__choice');
  let gridEl = document.querySelector('.badges__grid');
  let codeEl = document.querySelector('.badges__markup');
  let previewEl = document.querySelector('.badges__preview');
  let templateEl = document.querySelector('.badge__template');
  let copyButton = document.querySelector('.badges__copy');

  const badges = [
    {
      title: 'Developers for Firefox',
      id: 'Developers_For_Firefox_Light'
    },
    {
      title: 'Developers for Firefox',
      id: 'Developers_For_Firefox_Dark'
    },
    {
      title: 'Designers for Firefox',
      id: 'Designers_For_Firefox_Light'
    },
    {
      title: 'I Use Firefox',
      id: 'I-Use-Firefox'
    },
    {
      title: 'Fast For Good',
      id: 'Fast-For-Good'
    }
  ];

  badges.forEach((badge, i) => {
    let el = document.importNode(templateEl.content, true);
    el.querySelector('img').setAttribute('src', `//code.cdn.mozilla.net/for-firefox/badges/assets/${badge.id}.png`);
    el.querySelector('input').value = i;
    gridEl.appendChild(el);
  });

  formEl.addEventListener('change', e => {
    let selected = badges[formEl.elements.badge.value];
    let badgeCode = `
<a title="${selected.title}" href="https://www.mozilla.org/firefox/this-browser-comes-highly-recommended/?utm_source=devs-for.firefox.com&utm_medium=referral&utm_campaign=devs-for-firefox&utm_content=${selected.id}">
  <img style="border:0 none;"
       alt="${selected.title}"
       srcset="//code.cdn.mozilla.net/for-firefox/badges/assets/${selected.id}.png,
               //code.cdn.mozilla.net/for-firefox/badges/assets/${selected.id}-2x.png 2x"
       src="//code.cdn.mozilla.net/for-firefox/badges/assets/${selected.id}.png">
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

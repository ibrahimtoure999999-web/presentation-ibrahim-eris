'use strict';

// Le contenu reste lisible sans JavaScript ; seuls ces contrôles sont enrichis.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

const steps = [
  { tag: 'EN LOCAL · GIT', title: 'Créer le dépôt local', description: 'Depuis le dossier du projet, initialisez Git. La branche principale porte le nom main.', command: 'git init -b main' },
  { tag: 'EN LOCAL · GIT', title: 'Préparer les fichiers', description: 'Ajoutez les fichiers à la zone de préparation. git status permet de vérifier ce qui sera enregistré.', command: 'git add .\ngit status' },
  { tag: 'EN LOCAL · GIT', title: 'Enregistrer une version', description: 'Un commit garde une version du projet avec un message explicite. Configurez votre nom et votre adresse Git avant le premier commit ; le guide explique comment.', command: 'git commit -m "Créer le site de présentation"\ngit log --oneline' },
  { tag: 'EN LIGNE · GITHUB', title: 'Relier le dépôt distant', description: 'Sur GitHub, créez un dépôt vide nommé presentation-ibrahim-eris. Remplacez VOTRE_IDENTIFIANT par votre identifiant GitHub dans cette commande.', command: 'git remote add origin https://github.com/VOTRE_IDENTIFIANT/presentation-ibrahim-eris.git\ngit remote -v' },
  { tag: 'EN LIGNE · GITHUB', title: 'Envoyer et partager', description: 'Envoyez la branche main sur GitHub. Vous pourrez ensuite activer GitHub Pages pour publier la page web ; suivez le guide fourni.', command: 'git push -u origin main' }
];
const stepButtons = [...document.querySelectorAll('.step')];
const commandElement = document.querySelector('#step-command');
const copyStatus = document.querySelector('#copy-status');
stepButtons.forEach(button => {
  button.addEventListener('click', () => {
    const step = steps[Number(button.dataset.step)];
    stepButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#step-tag').textContent = step.tag;
    document.querySelector('#step-title').textContent = step.title;
    document.querySelector('#step-description').textContent = step.description;
    commandElement.textContent = step.command;
    copyStatus.textContent = '';
  });
});
const copyButton = document.querySelector('#copy-command');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(commandElement.textContent);
    copyStatus.textContent = 'Commande copiée dans le presse-papiers.';
  } catch {
    // file:// et certains navigateurs peuvent refuser l’accès au presse-papiers.
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(commandElement);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Commande sélectionnée : utilisez Ctrl+C (ou ⌘C).';
  }
});

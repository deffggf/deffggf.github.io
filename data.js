/* ===== ВСЕ ТЕКСТЫ, ПРОЕКТЫ И КОНТАКТЫ САЙТА — редактируйте только этот файл ===== */

/* ================= ВАШИ ДАННЫЕ — редактируйте здесь ================= */
const ABOUT = {
  text: ['I\'m an aspiring developer and web designer with a passion for technology and creativity.',
         'I enjoy building digital projects, exploring new technologies and experimenting with different ideas. I\'m constantly learning, improving my skills and turning concepts into real projects.',
         'This portfolio is a place where I share my work, experiments and progress.'],
  facts: [['Focus', 'Development & web design'], ['Location', 'Poznan'], ['Tools', 'VS Code, Figma'], ['Languages', 'English, Polish, Russian, Ukrainian']]
};
// Чтобы добавить проект — скопируйте блок { ... }, вставьте после него (с запятой) и поменяйте поля:
//  title / text    — название и короткая подпись на карточке
//  image           — превью на карточке, например 'images/bot-cover.png' (пусто '' = заглушка)
//  description     — подробное описание в окне; \n = новый абзац
//  images          — дополнительные картинки в окне: ['images/bot-1.png', 'images/bot-2.png']
//  links           — кнопки в окне, например:
//    { label: 'Telegram bot', url: 'https://t.me/your_bot' },
//    { label: 'Discord bot',  url: 'https://discord.com/oauth2/authorize?client_id=...' },
//    { label: 'GitHub',       url: 'https://github.com/deffggf/repo' }
const PROGRAMMING = [
  { title: 'Project one', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.\nAdd a second paragraph like this.',
    images: [], links: [] },
  { title: 'Project two', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] },
  { title: 'Project three', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] },
  { title: 'Project four', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] }
];
// Проекты веб-дизайна — поля такие же, как у PROGRAMMING выше.
const DESIGN = [
  { title: 'Foundation Dobro', text: 'Dobro Charitable Foundation.', image: 'images/design/foundation/foundation-logo.png',
    description: 'This is a website concept for the Dobro Charitable Foundation, which I created during a web design course.\nUsed Figma for design.',
    images: ['images/design/foundation/foundation-site.png'], links: [] },
  { title: 'remake Paycompass', text: 'Concept for a redesign of Paycompass.', image:'images/design/paycompass/paycompass-logo.png',
    description: 'Concept for a redesign of Paycompass. \nP.S. This concept was created in 2024, bafore Paycompass introduced its new design.', images: ['images/design/paycompass/paycompass.png'], links: ['https://paycompass.com'] },
  { title: 'TapCoin', text: 'This is a concept for the TapCoin project.', image: 'images/design/click/click-logo.png',
    description: 'This is a concept for the TapCoin project.', images: ['images/design/click/click.png'], links: [] },
];
const CONTACT = [
  ['Email',    'mak.dgoy.99@gmail.com', 'mailto:mak.dgoy.99@gmail.com'],
  ['Telegram', '@Dwffgg',       'https://t.me/Dwffgg'],
  ['Discord',  'deffggf',        'https://discord.com/users/1378496626754060330'],
  ['GitHub',   'deffggf',         'https://github.com/deffggf']
];

window.SITE_DATA = { ABOUT, PROGRAMMING, DESIGN, CONTACT };

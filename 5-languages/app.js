const res = prompt('your language?');
switch(res) {
    case 'en':
        console.log('Good afternoon!');
        break;
    case 'de':
        console.log('Guten Abend!');
        break;
    case 'ru':
        console.log('Добрый вечер!');
        break;
    case 'kz':
        console.log('Қайырлы кеш!');
        break;
    default:
        console.log('Я не знаю такой язык')
}
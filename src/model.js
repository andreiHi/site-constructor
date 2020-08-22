import image from './assets/image.png'
import {Block, ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './clasess/block'
const text = `
Крутые видео и уроки по JavaScript тут:
<a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>.
Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам,
такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!`;

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript!',{
            tag: 'h2',
            styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
        }
    ),
    new ImageBlock(  image, {
            styles: 'padding: 2rem 0; display: flex; justify-content: center',
            alt: 'my image',
            imageStyles: 'height: auto; width: 500px'
        }
    ),
    new TextColumnsBlock(
        [
            'Приложение на чистом JavaScript без использования библиотек.',
            'С использованием принципов SOLID и ООП в JavaScript',
            'JavaScript - это просто и интересно.',
        ],
        {
            styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
        }
    ),
    new TextBlock(
        text,
        {
            styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
        }
    ),
]

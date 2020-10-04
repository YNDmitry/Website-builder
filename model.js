import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, at.
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'SOLID и ООП в JavaScript',
    'JavaScript - это просто'
  ], {
    styles: {
      padding: '2rem',
      color: '#000',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      padding: '1rem',
      'font-weight': 'bold',
      'text-align': 'center'
    }
  })
]
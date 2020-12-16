import 'bootstrap';
import './src/scss/app.scss';
const Typewriter = require('t-writer.js');


const target = document.getElementById('text-animate')
const writer = new Typewriter(target, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: 'white',
    cursorColor: 'white'
  })
  
  writer
    .type('Marketing Digital?')
    .rest(600)
    .changeOps({ deleteSpeed: 40 })
    .remove(18)
    .type('Landing Pages?')
    .rest(600)
    .remove(14)
    .type('Anúncios?')
    .rest(600)
    .changeOps({ deleteSpeed: 40 })
    .remove(9)
    .clear()
    .start()
        
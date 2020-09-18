import 'bootstrap';
import './scss/app.scss';
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
    .rest(500)
    .changeOps({ deleteSpeed: 80 })
    .remove(18)
    .type('Landing Pages?')
    .rest(500)
    .remove(14)
    .type('Anúncios?')
    .rest(500)
    .changeOps({ deleteSpeed: 80 })
    .remove(9)
    .clear()
    .start()
        
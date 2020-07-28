import Hammer from 'hammerjs';
import MarqueeInfinite from 'marquee-infinite';

new MarqueeInfinite('.m-container', {
  duration: 100000,
  classNames: {
    container: 'marqueeInfinite',
    slider: 'marqueeInfiniteSlider',
    cell: 'marqueeInfiniteCell',
  },
});

var page_up = function(ev) {
  console.log('up');
  var a = document.getElementsByClassName('a')[0]
  var b = document.getElementsByClassName('b')[0]
  var c = document.getElementsByClassName('c')[0]
  var d = document.getElementsByClassName('d')[0]
  var e = document.getElementsByClassName('e')[0]
  var f = document.getElementsByClassName('f')[0]
  var g = document.getElementsByClassName('g')[0]
  var h = document.getElementsByClassName('h')[0]
  var i = document.getElementsByClassName('i')[0]
  var j = document.getElementsByClassName('i')[0]

  a.classList.remove('a');
  a.classList.add('b');

  b.classList.remove('b');
  b.classList.add('c');

  c.classList.remove('c');
  c.classList.add('d');

  d.classList.remove('d');
  d.classList.add('f');

  f.classList.remove('f');
  f.classList.add('g');

  g.classList.remove('g');
  g.classList.add('h');

  h.classList.remove('h');
  h.classList.add('i');

  i.classList.remove('i');
  i.classList.add('a');
}

var page_down = function(ev) {
  var a = document.getElementsByClassName('a')[0]
  var b = document.getElementsByClassName('b')[0]
  var c = document.getElementsByClassName('c')[0]
  var d = document.getElementsByClassName('d')[0]
  var e = document.getElementsByClassName('e')[0]
  var f = document.getElementsByClassName('f')[0]
  var g = document.getElementsByClassName('g')[0]
  var h = document.getElementsByClassName('h')[0]
  var i = document.getElementsByClassName('i')[0]

  a.classList.remove('a');
  a.classList.add('i');

  b.classList.remove('b');
  b.classList.add('a');

  c.classList.remove('c');
  c.classList.add('b');

  d.classList.remove('d');
  d.classList.add('c');


  f.classList.remove('f');
  f.classList.add('d');

  g.classList.remove('g');
  g.classList.add('f');

  h.classList.remove('h');
  h.classList.add('g');

  i.classList.remove('i');
  i.classList.add('h');
};

var hammertime = new Hammer(document.getElementById("main"), { inputClass: Hammer.TouchMouseInput });
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
hammertime.on('swipeup', page_up);
hammertime.on('swipedown', page_down);

var scroll = function(e) {
  if (e.keyCode == 38) {
    page_up();
  }
  else if (e.keyCode == 40){
    page_down();
  }
}

var about = document.getElementById("about");
var openAbout = () => {
  if(about.classList.contains('invisible')) about.classList.remove('invisible');
}

var dismissAbout = () => {
  var about = document.getElementById("about");
  if(!about.classList.contains('invisible')) about.classList.add('invisible');
}

document.addEventListener('keyup', scroll);

var aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", openAbout);

about.addEventListener("click", dismissAbout);

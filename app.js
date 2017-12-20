(function () {
  // board build data
  var board = [{
    title: 'Fiorinal With Codeine',
    image: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/SDZ01070.jpg',
    about: 'Medication containing aspirin, butalbital, caffeine and codeine.'
  }, {
    title: 'Demerol',
    image: 'http://treatmenthelp.com/images/articles/meperidine.jpg',
    about: 'Drug that produces numbness or stupor; often taken for pleasure or to reduce pain.'
  }, {
    title: 'Duragesic',
    image: 'http://www.pharmacyderma.com/wp-content/uploads/2017/11/duragesic-transdermal-skin-patch.jpg',
    about: 'Pharmacological action similar to morphine that is administered transdermally as a skin patch.'
  }, {
    title: 'OxyContin',
    image: 'http://georgiadrugdetox.com/wp-content/uploads/2016/05/oxycontin.png',
    about: 'Synthetic analgesic drug that is similar to morphine.'
  }, {
    title: 'Percodan',
    image: 'https://d4fuqqd5l3dbz.cloudfront.net/products/DrugItem_1916.JPG',
    about: 'Contains a combination of aspirin and oxycodone.'
  }, {
    title: 'Percocet',
    image: 'https://qph.ec.quoracdn.net/main-qimg-d092ed82ce93fdcb4a631d8722f5595b.webp',
    about: 'Combination of acetaminophen and oxycodone.'
  }, {
    title: 'Tylox',
    image: 'https://www.healthline.com/images/gold/DrugItem_2712.JPG',
    about: 'Combination of acetaminophen and oxycodone.'
  }, {
    title: 'Dilaudid',
    image: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/RHO04540.jpg',
    about: 'Used to treat moderate to severe pain.'
  }];
  // build data
  var guesses = [],
    current = 0;
  // elem getter
  function $(id) {
    return document.getElementById(id);
  }
  // init setup
  function setup() {
    // reset everything
    $('guessing-object').innerHTML = '';
    guesses = [];
    // append guesses
    for (var x = 0, max = board.length; x < max; x++) {
      var object = board[x];
      var style = 'style="background-image: url(' + object.image + ')"';
      var html = '<div id="guess-object-' + x + '" class="guessing-object" ' + style + '></div>';
      $('guessing-object').innerHTML += html;
    }
    // attach event listeners
    for (var x = 0, max = board.length; x < max; x++) {
      $('guess-object-' + x).onclick = function () {
        var num = parseInt(this.id.replace('guess-object-', ''));
        guess(num);
      }
    }
    // init first question
    question();
  }
  // reset app view
  function reset() {
    // reset borders
    for (var x = 0, max = board.length; x < max; x++) {
      $('guess-object-' + x).style.border = 'solid thick white';
    }
    // reset answer text
    $('guess-answer').innerHTML = 'Choose an answer...';
  }
  // attach question
  function question() {
    // reset after all have been guessed
    if (guesses.length === board.length) guesses = [];
    // get unguessed
    do {
      current = Math.floor(Math.random() * board.length);
    } while (guesses.indexOf(current) !== -1);
    // append question to app
    var question = board[current].title;
    $('guessing-title').innerHTML = question;
  }
  // next button
  function next() {

  }
  // question guess
  function guess(num) {
    if (current === num) {
      $('guess-object-' + num).style.border = 'solid thick black';
      $('guess-answer').innerHTML = board[num].about;
      guesses.push(num);
    } else {
      $('guess-object-' + num).style.border = 'solid thick red';
    }
  }
  // init 
  setup();
  // event listeners
  $('next-guess').onclick = function () {
    question();
    reset();
  }
})();
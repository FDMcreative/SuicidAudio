window.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('bottone');
  const img = document.getElementById('face')
  const audio = document.querySelector('audio');

  const attori = {
    'jerry cala': ['libidine.mp3', 'piaccio.mp3', 'sonic badge.mp3', 'ocio.mp3'],

    'christian de sica': ['dichiarare il secondo.mp3', 'fusilli.mp3', 'la sciolta.mp3', 'mafia giudea.mp3', 'quanto sei brutta.mp3', 'secondo te stiamo messi male.mp3', 'siediti sit down.mp3', 'sto a scherza.mp3'],

    'massimo boldi': ['che dolore.mp3', 'porca puttana.mp3', 'ciao cipollini.mp3', 'bella madonnina.mp3', 'so lupacchiotto.mp3', 'i poliziesi.mp3', 'tachicardia.mp3']
  };

  const menuAttori = Object.keys(attori);
  // console.log(menuAttori);
  const menuBattute = Object.values(attori);
  // console.log(battute);

  btn.addEventListener('click', (e) => {
    // This select an actor name randomly
    let i = Math.floor(Math.random() * menuAttori.length);
    let attoreScelto = menuAttori[i];
    console.log(attoreScelto);
    img.src = "./images/" + attoreScelto + ".png";
    // This select a random joke name
    let battuteAttore = menuBattute[i];
    let y = Math.floor(Math.random() * battuteAttore.length);
    let battuta = battuteAttore[y];
    console.log(battuta);
    // Play the correspondent audio file
    audio.src = "./sounds/" + attoreScelto + "/" + battuta;
    console.log(audio.src);
    audio.play();
    });

});

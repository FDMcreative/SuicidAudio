window.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('bottone');
  const img = document.getElementById('face')
  const audio = document.querySelector('audio');

  const attori = {
    'jerry cala': ['libidine.m4a', 'piaccio.m4a', 'sonic badge.m4a', 'ocio.m4a'],

    'christian de sica': ['dichiarare il secondo.m4a', 'fusilli.m4a', 'la sciolta.m4a', 'mafia giudea.m4a', 'quanto sei brutta.m4a', 'secondo te stiamo messi male.m4a', 'siediti sit down.m4a', 'sto a scherza.m4a'],

    'massimo boldi': ['che dolore.m4a', 'porca puttana.m4a', 'ciao cipollini.m4a', 'bella madonnina.m4a', 'so lupacchiotto.m4a', 'i poliziesi.m4a', 'tachicardia.m4a']
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

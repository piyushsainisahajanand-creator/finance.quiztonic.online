// ==========================================
// GAME DATA with categories
// ==========================================
const ALL_GAMES = [
  // ACTION
  { name: "Alien Invaders", url :"/play/alieninvaders.html", img: "game_logo/alieninvaders.png", cats: ["action","arcade","popular"] },
  { name: "Zombie Attack", url :"/play/zombieattack.html", img: "game_logo/zombieattack.png", cats: ["action","popular"] },
  { name: "Zombie Hunter", url :"/play/zombiehunter.html", img: "game_logo/zombiehunter.png", cats: ["action","shooting"] },
  { name: "Shoot Zombie", url :"/play/shootzombie.html", img: "game_logo/shootzombie.png", cats: ["action","shooting"] },
  { name: "Air Battle Mission", url :"/play/airbattlemission.html", img: "game_logo/airbattlemission.png", cats: ["action","shooting"] },
  { name: "Space Battle", url :"/play/spacebattle.html", img: "game_logo/spacebattle.png", cats: ["action","shooting"] },
  { name: "Space Invaders", url :"/play/spaceinvaders.html", img: "game_logo/spaceinvaders.png", cats: ["action","shooting","popular"] },
  { name: "Fighter Jet", url :"/play/fighterjet.html", img: "game_logo/fighterjet.png", cats: ["action","shooting"] },
  { name: "Chicken Shooter", url :"/play/chickenshooter.html", img: "game_logo/chickenshooter.png", cats: ["action","shooting"] },
  { name: "Shoot To Giant Bats", url :"/play/shoottogiantbats.html", img: "game_logo/shoottogiantbats.png", cats: ["action","shooting"] },
  { name: "Flower Shooter", url :"/play/flowershooter.html", img: "game_logo/flowershooter.png", cats: ["action","shooting"] },
  { name: "Radius Raid", url :"/play/radiusraid.html", img: "game_logo/radiusraid.png", cats: ["action","shooting"] },
  { name: "Planet Defence", url :"/play/planetdefence.html", img: "game_logo/planetdefence.png", cats: ["action","shooting"] },
  { name: "Kill Bird", url :"/play/killbird.html", img: "game_logo/killbird.png", cats: ["action"] },
  { name: "Menja", url :"/play/menja.html", img: "game_logo/menja.png", cats: ["action","popular"] },
  { name: "The Frantic Run", url :"/play/thefranticrun.html", img: "game_logo/thefranticrun.png", cats: ["action"] },
  { name: "Running Ninja", url :"/play/runningninja.html", img: "game_logo/runningninja.png", cats: ["action","arcade"] },
  { name: "Endless Ninja Run", url :"/play/endlessninjarun.html", img: "game_logo/endlessninjarun.png", cats: ["action","arcade"] },
  { name: "Advantureous Boy Run", url :"/play/advantureousboyrun.html", img: "game_logo/advantureousboyrun.png", cats: ["action","arcade"] },
  { name: "Christmas Santa Run", url :"/play/christmassantarun.html", img: "game_logo/christmassantarun.png", cats: ["action","arcade"] },
  { name: "Dark Knight Rider", url :"/play/darkknightrider.html", img: "game_logo/darkknightrider.png", cats: ["action","racing"] },
  { name: "Crossy Road", url :"/play/crossyroad.html", img: "game_logo/crossyroad.png", cats: ["action","arcade","popular"] },
  { name: "Alien on Earth", url :"/play/alienonearth.html", img: "game_logo/alienonearth.png", cats: ["action"] },
  { name: "Protect Red Indian Man", url :"/play/protectredindianman.html", img: "game_logo/protectredindianman.png", cats: ["action"] },
  { name: "War Of Tank", url :"/play/waroftank.html", img: "game_logo/waroftank.png", cats: ["action"] },
  { name: "Noob Vs Pro", url :"/play/noobvspro.html", img: "game_logo/noobvspro.png", cats: ["action","new"] },
  { name: "Spacecraft", url :"/play/spacecraft.html", img: "game_logo/spacecraft.png", cats: ["action"] },
  { name: "Reverse Space Riding", url :"/play/reversespaceriding.html", img: "game_logo/reversespaceriding.png", cats: ["action","arcade"] },
  { name: "Dark Forest", url :"/play/darkforest.html", img: "game_logo/darkforest.png", cats: ["action","new"] },
  { name: "Universal Adventure", url :"/play/universaladvanture.html", img: "game_logo/universaladvanture.png", cats: ["action","new"] },

  // ARCADE
  { name: "Blocky", url :"/play/blocky.html", img: "game_logo/blocky.png", cats: ["arcade","puzzle"] },
  { name: "Bounce", url :"/play/bounce.html", img: "game_logo/bounce.png", cats: ["arcade"] },
  { name: "Cube Jump", url :"/play/cubejump.html", img: "game_logo/cubejump.png", cats: ["arcade"] },
  { name: "Draw In", url :"/play/drawin.html", img: "game_logo/drawin.png", cats: ["arcade","puzzle"] },
  { name: "Flight Color", url :"/play/flightcolor.html", img: "game_logo/flightcolor.png", cats: ["arcade"] },
  { name: "Flip The Gun", url :"/play/flipthegun.html", img: "game_logo/flipthegun.png", cats: ["arcade","popular"] },
  { name: "Off The Line", url :"/play/offtheline.html", img: "game_logo/offtheline.png", cats: ["arcade"] },
  { name: "HexGL", url :"/play/hexgl.html", img: "game_logo/hexgl.png", cats: ["arcade","racing","popular"] },
  { name: "Hextris", url :"/play/hextris.html", img: "game_logo/hextris.png", cats: ["arcade","puzzle","popular"] },
  { name: "Action Reflex", url :"/play/actionreflex.html", img: "game_logo/actionreflex.png", cats: ["arcade","action"] },
  { name: "Coloron", url :"/play/coloron.html", img: "game_logo/coloron.png", cats: ["arcade"] },
  { name: "On Off", url :"/play/onoff.html", img: "game_logo/onoff.png", cats: ["arcade","puzzle"] },
  { name: "Re-wire", url :"/play/rewire.html", img: "game_logo/rewire.png", cats: ["arcade","puzzle"] },
  { name: "Cocos2d Tetris", url :"/play/cocos.html", img: "game_logo/cocos.png", cats: ["arcade","puzzle"] },
  { name: "Snakes", url :"/play/snakes.html", img: "game_logo/snakes.png", cats: ["arcade","popular"] },
  { name: "Tower Blocks", url :"/play/towerblocks.html", img: "game_logo/towerblocks.png", cats: ["arcade"] },
  { name: "The Cube", url :"/play/thecube.html", img: "game_logo/thecube.png", cats: ["arcade"] },
  { name: "Unruly Tower", url :"/play/unrulytower.html", img: "game_logo/unrulytower.png", cats: ["arcade"] },
  { name: "Ping Pong", url :"/play/pingpong.html", img: "game_logo/pingpong.png", cats: ["arcade","sports"] },
  { name: "Dunk Shot", url :"/play/dunkshot.html", img: "game_logo/dunkshot.png", cats: ["arcade","sports"] },
  { name: "Burning Balls", url :"/play/burningballs.html", img: "game_logo/burningballs.png", cats: ["arcade","new"] },
  { name: "Dashing Donut", url :"/play/dashingdonut.html", img: "game_logo/dashingdonut.png", cats: ["arcade","new"] },
  { name: "Color Jump Game", url :"/play/colorjumpgame.html", img: "game_logo/colorjumpgame.png", cats: ["arcade","new"] },
  { name: "Dash Color Switch", url :"/play/dashcolorswitch.html", img: "game_logo/dashcolorswitch.png", cats: ["arcade","new"] },
  { name: "Flying Triangle", url :"/play/flyingtriangle.html", img: "game_logo/flyingtriangle.png", cats: ["arcade"] },
  { name: "Ball Out", url :"/play/ballout.html", img: "game_logo/ballout.png", cats: ["arcade"] },
  { name: "Ball Bounce Escape", url :"/play/ballbounceescape.html", img: "game_logo/ballbounceescape.png", cats: ["arcade"] },
  { name: "Ball Bouncer Wall", url :"/play/ballbouncerwall.html", img: "game_logo/ballbouncerwall.png", cats: ["arcade"] },
  { name: "Speed Square Runner", url :"/play/speedsquarerunner.html", img: "game_logo/speedsquarerunner.png", cats: ["arcade","action"] },
  { name: "Stickman", url :"/play/stickman.html", img: "game_logo/stickman.png", cats: ["arcade","action"] },
  { name: "Pocket Jump Arcade", url :"/play/pocketjumparcade.html", img: "game_logo/pocketjumparcade.png", cats: ["arcade"] },
  { name: "Mannequin Head Jump", url :"/play/mannequinheadjump.html", img: "game_logo/mannequinheadjump.png", cats: ["arcade"] },
  { name: "MrPing Jumping Joy", url :"/play/mrpingjumpingjoy.html", img: "game_logo/mrpingjumpingjoy.png", cats: ["arcade"] },
  { name: "Bottle Jump", url :"/play/bottlejump.html", img: "game_logo/bottlejump.png", cats: ["arcade"] },
  { name: "Bottle Climbing", url :"/play/bottleclimbing.html", img: "game_logo/bottleclimbing.png", cats: ["arcade"] },
  { name: "Bottle Garbage", url :"/play/bottlegarbage.html", img: "game_logo/bottlegarbage.png", cats: ["arcade"] },
  { name: "Tap Counter Challenge", url :"/play/tapcounterchallenge.html", img: "game_logo/tapcounterchallenge.png", cats: ["arcade"] },
  { name: "Arrow Patching", url :"/play/arrowpatching.html", img: "game_logo/arrowpatching.png", cats: ["arcade","puzzle"] },
  { name: "Saws Escapes", url :"/play/sawsescapes.html", img: "game_logo/sawsescapes.png", cats: ["arcade","action"] },
  { name: "Square Escape", url :"/play/squareescape.html", img: "game_logo/squareescape.png", cats: ["arcade"] },
  { name: "Star Fall Escape", url :"/play/starfallescape.html", img: "game_logo/starfallescape.png", cats: ["arcade"] },
  { name: "Rocket Pilot", url :"/play/rocketpilot.html", img: "game_logo/rocketpilot.png", cats: ["arcade","action"] },
  { name: "Rolling Cube Adventures", url :"/play/rollingcubeadvantures.html", img: "game_logo/rollingcubeadvantures.png", cats: ["arcade"] },
  { name: "Coin Snake", url :"/play/coinsnake.html", img: "game_logo/coinsnake.png", cats: ["arcade"] },
  { name: "Balloon Pop", url :"/play/balloonpop.html", img: "game_logo/balloonpop.png", cats: ["arcade","new"] },
  { name: "Bemillionaire", url :"/play/bemillionaire.html", img: "game_logo/bemillionaire.png", cats: ["arcade","new"] },
  { name: "Pixel Filler", url :"/play/pixelfiller.html", img: "game_logo/pixelfiller.png", cats: ["arcade","new"] },
  { name: "Fish Catcher", url :"/play/fishcatcher.html", img: "game_logo/fishcatcher.png", cats: ["arcade","new"] },
  { name: "Joytoy Train", url :"/play/joytoytrain.html", img: "game_logo/joytoytrain.png", cats: ["arcade","new"] },
  { name: "Offline Paradise", url :"/play/offlineparadise.html", img: "game_logo/offlineparadise.png", cats: ["arcade"] },
  { name: "Egg Catcher", url :"/play/eggcatcher.html", img: "game_logo/eggcatcher.png", cats: ["arcade","new"] },
  { name: "Egg Bucket Master", url :"/play/eggbucketmaster.html", img: "game_logo/eggbucketmaster.png", cats: ["arcade","new"] },
  { name: "Pongs Dot", url :"/play/pongsdot.html", img: "game_logo/pongsdot.png", cats: ["arcade"] },
  { name: "Pot Filler", url :"/play/potfiller.html", img: "game_logo/potfiller.png", cats: ["arcade"] },
  { name: "Choose True Colors", url :"/play/choosetruecolors.html", img: "game_logo/choosetruecolors.png", cats: ["arcade","puzzle"] },
  { name: "Color Match", url :"/play/colormatch.html", img: "game_logo/colormatch.png", cats: ["arcade","puzzle"] },
  { name: "Stress Releasing Dots", url :"/play/stressreleasingdots.html", img: "game_logo/stressreleasingdots.png", cats: ["arcade","new"] },
  { name: "Pixel Ninza", url :"/play/pixelninza.html", img: "game_logo/pixelninza.png", cats: ["arcade","action"] },
  { name: "Go Panda", url :"/play/gopanda.html", img: "game_logo/gopanda.png", cats: ["arcade","new"] },
  { name: "Happy Mood", url :"/play/happymood.html", img: "game_logo/happymood.png", cats: ["arcade","new"] },
  { name: "Tennis Ball Arcade", url :"/play/tennisballarcade.html", img: "game_logo/tennisballarcade.png", cats: ["arcade","sports"] },
  { name: "Dragon Fish", url :"/play/dragonfish.html", img: "game_logo/dragonfish.png", cats: ["arcade","new"] },
  { name: "Jelly World", url :"/play/jellyworld.html", img: "game_logo/jellyworld.png", cats: ["arcade","new"] },
  { name: "Save Your Puppies", url :"/play/saveyourpuppies.html", img: "game_logo/saveyourpuppies.png", cats: ["arcade","new"] },
  { name: "Collect The Same Balls", url :"/play/collectthesameballs.html", img: "game_logo/collectthesameballs.png", cats: ["arcade"] },
  { name: "Drop The Apple Into Mouth", url :"/play/droptheappleintomouth.html", img: "game_logo/droptheappleintomouth.png", cats: ["arcade","new"] },
  { name: "Fill The Dot", url :"/play/fillthedot.html", img: "game_logo/fillthedot.png", cats: ["arcade","puzzle"] },

  // PUZZLE
  { name: "Connection", url :"/play/connection.html", img: "game_logo/connection.png", cats: ["puzzle","popular"] },
  { name: "Happy Glass", url :"/play/happyglass.html", img: "game_logo/happyglass.png", cats: ["puzzle","popular"] },
  { name: "Make5", url :"/play/make5.html", img: "game_logo/make5.png", cats: ["puzzle"] },
  { name: "Node", url :"/play/node.html", img: "game_logo/node.png", cats: ["puzzle"] },
  { name: "Release", url :"/play/release.html", img: "game_logo/release.png", cats: ["puzzle"] },
  { name: "SquArea", url :"/play/squarea.html", img: "game_logo/squarea.png", cats: ["puzzle"] },
  { name: "Magic Square", url :"/play/magicsquare.html", img: "game_logo/magicsquare.png", cats: ["puzzle"] },
  { name: "2048", url :"/play/2048.html", img: "game_logo/2048.png", cats: ["puzzle","popular"] },
  { name: "Tic Tac Toe", url :"/play/tictactoe.html", img: "game_logo/tictactoe.png", cats: ["puzzle","popular"] },
  { name: "Sudoku", url :"/play/sudoku.html", img: "game_logo/sudoku.png", cats: ["puzzle","popular"] },
  { name: "Sand Sort Puzzle", url :"/play/sandsortpuzzle.html", img: "game_logo/sandsortpuzzle.png", cats: ["puzzle","popular"] },
  { name: "Brain Exercise Game", url :"/play/brainexcercisegame.html", img: "game_logo/brainexcercisegame.png", cats: ["puzzle","new"] },
  { name: "Wording", url :"/play/wording.html", img: "game_logo/wording.png", cats: ["puzzle"] },
  { name: "Yummy Word", url :"/play/yummyword.html", img: "game_logo/yummyword.png", cats: ["puzzle"] },
  { name: "Spell School", url :"/play/spellschool.html", img: "game_logo/spellschool.png", cats: ["puzzle"] },
  { name: "Icy Match", url :"/play/icymatch.html", img: "game_logo/icymatch.png", cats: ["puzzle","new"] },
  { name: "Candy Crush", url :"/play/candycrush.html", img: "game_logo/candycrush.png", cats: ["puzzle","popular"] },
  { name: "Jelly Belly Jam", url :"/play/jellybellyjam.html", img: "game_logo/jellybellyjam.png", cats: ["puzzle","new"] },
  { name: "Cookies Bookies", url :"/play/coockiesboockies.html", img: "game_logo/coockiesboockies.png", cats: ["puzzle","new"] },
  { name: "Harvest Veggie", url :"/play/harvestveggie.html", img: "game_logo/harvestveggie.png", cats: ["puzzle","new"] },
  { name: "Yummy Candies", url :"/play/yummycandies.html", img: "game_logo/yummycandies.png", cats: ["puzzle","new"] },
  { name: "Dino Bubbles", url :"/play/dinobubbles.html", img: "game_logo/dinobubbles.png", cats: ["puzzle","arcade"] },
  { name: "Fruits Game", url :"/play/fruitsgame.html", img: "game_logo/fruitsgame.png", cats: ["puzzle","arcade"] },
  { name: "Jewel In Throw Challenge", url :"/play/jewelinthrowchallenge.html", img: "game_logo/jewelinthrowchallenge.png", cats: ["puzzle","new"] },
  { name: "Ice Candy", url :"/play/icecandy.html", img: "game_logo/icecandy.png", cats: ["puzzle","new"] },
  { name: "Christmas Gift", url :"/play/christmasgift.html", img: "game_logo/christmasgift.png", cats: ["puzzle","new"] },
  { name: "Christmas Holiday", url :"/play/christmasholiday.html", img: "game_logo/christmasholiday.png", cats: ["puzzle","new"] },
  { name: "Halloween Hooks", url :"/play/halloweenhooks.html", img: "game_logo/halloweenhooks.png", cats: ["puzzle","new"] },
  { name: "Touch The Alphabet In The Order", url :"/play/touchthealphabetintheorder.html", img: "game_logo/touchthealphabetintheorder.png", cats: ["puzzle","new"] },
  { name: "Make A Bridge And Go Get Diamond", url :"/play/makeabridgeandgogetdiamond.html", img: "game_logo/makeabridgeandgogetdiamond.png", cats: ["puzzle","new"] },
  { name: "Perfect Rotare", url :"/play/perfectrotare.html", img: "game_logo/perfectrotare.png", cats: ["puzzle","new"] },
  { name: "Tower Building", url :"/play/tower.html", img: "game_logo/tower.png", cats: ["puzzle"] },
  { name: "Tower Balancer", url :"/play/towerbalancer.html", img: "game_logo/towerbalancer.png", cats: ["puzzle","new"] },

  // SPORTS
  { name: "Free Kick", url :"/play/freekick.html", img: "game_logo/freekick.png", cats: ["sports","popular"] },
  { name: "Mini Golf", url :"/play/minigolf.html", img: "game_logo/minigolf.png", cats: ["sports","popular"] },
  { name: "Perfect Pool Shot", url :"/play/perfectpoolshot.html", img: "game_logo/perfectpoolshot.png", cats: ["sports","new"] },
  { name: "Bullseye Game", url :"/play/bullseye.html", img: "game_logo/bullseye.png", cats: ["sports","shooting"] },
  { name: "Goal Post Challenge", url :"/play/goalpostchallenge.html", img: "game_logo/goalpostchallenge.png", cats: ["sports","new"] },
  { name: "Cricket Batter", url :"/play/cricketbatter.html", img: "game_logo/cricketbatter.png", cats: ["sports","new"] },
  { name: "Nano Race Escape", url :"/play/nanoraceescape.html", img: "game_logo/nanoraceescape.png", cats: ["sports","racing","new"] },
  { name: "Cute Dressup", url :"/play/cutedressup.html", img: "game_logo/cutedressup.png", cats: ["sports","new"] },

  // RACING
  { name: "Road Race 2d", url :"/play/roadrace2d.html", img: "game_logo/roadrace2d.png", cats: ["racing","popular"] },
  { name: "Race Master", url :"/play/racemaster.html", img: "game_logo/racemaster.png", cats: ["racing","popular"] },
  { name: "Moto Racer", url :"/play/motoracer.html", img: "game_logo/motoracer.png", cats: ["racing","new"] },
  { name: "Romeo Swift Racer", url :"/play/romeoswiftracer.html", img: "game_logo/romeoswiftracer.png", cats: ["racing","new"] },
  { name: "Drive Safe", url :"/play/drivesafe.html", img: "game_logo/drivesafe.png", cats: ["racing","new"] },
  { name: "Car Breaker", url :"/play/carbreaker.html", img: "game_logo/carbreaker.png", cats: ["racing","action","new"] },
  { name: "Halloween Run", url :"/play/halloweenrun.html", img: "game_logo/halloweenrun.png", cats: ["racing","action"] },
  { name: "Ludo Multiplayer", url :"/play/ludomultiplayer.html", img: "game_logo/ludomultiplayer.png", cats: ["racing","popular","new"] },
  { name: "Roll The Dice", url :"/play/rolldise.html", img: "game_logo/pig.png", cats: ["racing","puzzle"] },
  { name: "Fire Alarm Rescuers", url :"/play/firealarmrequers.html", img: "game_logo/firealarmresquers.png", cats: ["racing","action","new"] },

  // SHOOTING (extra if not covered above)
  { name: "Take Off", url :"/play/takeoff.html", img: "game_logo/takeoff.png", cats: ["shooting","arcade"] },
];

// ==========================================
// CATEGORY CONFIG
// ==========================================
const CATEGORIES = [
  { id: "popular", label: "🔥 Popular", desc: "Most loved games" },
  { id: "new",     label: "🆕 New",     desc: "Fresh arrivals" },
  { id: "action",  label: "⚡ Action",  desc: "High energy gameplay" },
  { id: "arcade",  label: "🕹️ Arcade",  desc: "Classic fun" },
  { id: "puzzle",  label: "🧩 Puzzle",  desc: "Brain teasers" },
  { id: "sports",  label: "⚽ Sports",  desc: "Competitive games" },
  { id: "racing",  label: "🏎️ Racing",  desc: "Speed & thrills" },
  { id: "shooting",label: "🎯 Shooting","desc": "Aim & fire" },
];

// ==========================================
// RENDER HELPERS
// ==========================================
function buildCard(game) {
  return `
    <div class="items game-item" data-name="${game.name.toLowerCase()}" data-cats="${game.cats.join(',')}">
      <a href="${game.url}" data-flow-link>
        <div class="MainHVR d-flex justfy-content-center align-items-center">
          <img src="${game.img}" alt="${game.name}" class="game-card__cover">
          <h3 class="game">${game.name}</h3>
        </div>
      </a>
    </div>`;
}

function buildSection(cat) {
  const games = ALL_GAMES.filter(g => g.cats.includes(cat.id));
  if (!games.length) return '';
  return `
    <div class="cat-section" id="section-${cat.id}" data-cat="${cat.id}">
      <div class="cat-section-header">
        <h2 class="cat-section-title">${cat.label}</h2>
        <span class="cat-section-desc">${cat.desc} &mdash; ${games.length} games</span>
      </div>
      <div class="row">
        ${games.map(buildCard).join('')}
      </div>
    </div>`;
}

function buildAllSections() {
  return CATEGORIES.map(buildSection).join('');
}

// ==========================================
// FILTER FUNCTIONS (global)
// ==========================================
window.filterGamesByCategory = function(cat) {
  const container = document.getElementById('gamesContainer');
  if (!container) return;

  if (cat === 'all') {
    // Show all sections, hide search results
    container.querySelectorAll('.cat-section').forEach(s => s.style.display = '');
    container.querySelectorAll('.game-item').forEach(el => el.style.display = '');
    const noResult = container.querySelector('.no-results');
    if (noResult) noResult.remove();
    // Clear search box
    const inp = document.getElementById('gameSearchInput');
    if (inp) inp.value = '';
    // Scroll to top of games
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // Hide all sections first
  container.querySelectorAll('.cat-section').forEach(s => {
    s.style.display = s.dataset.cat === cat ? '' : 'none';
  });

  // Scroll to that section
  const target = document.getElementById('section-' + cat);
  if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

  const inp = document.getElementById('gameSearchInput');
  if (inp) inp.value = '';
};

window.filterGamesBySearch = function(query) {
  const container = document.getElementById('gamesContainer');
  if (!container) return;
  const q = query.trim().toLowerCase();

  if (!q) {
    // Reset to all
    window.filterGamesByCategory('all');
    if (window.updateActivePill) window.updateActivePill('all');
    return;
  }

  // Show all sections but hide non-matching cards
  container.querySelectorAll('.cat-section').forEach(s => s.style.display = '');
  let totalVisible = 0;

  container.querySelectorAll('.cat-section').forEach(section => {
    const cards = section.querySelectorAll('.game-item');
    let sectionVisible = 0;
    cards.forEach(card => {
      const name = card.dataset.name || '';
      const match = name.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) sectionVisible++;
    });
    // Hide empty sections
    section.style.display = sectionVisible > 0 ? '' : 'none';
    totalVisible += sectionVisible;
  });

  // No results message
  let noRes = container.querySelector('.no-results');
  if (totalVisible === 0) {
    if (!noRes) {
      noRes = document.createElement('div');
      noRes.className = 'no-results';
      noRes.innerHTML = `<p>😕 No games found for "<strong>${query}</strong>"</p><p>Try a different search term.</p>`;
      container.prepend(noRes);
    }
  } else {
    if (noRes) noRes.remove();
  }
};

// ==========================================
// WEB COMPONENT
// ==========================================
class GamesComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Games section styles */
        #gamesContainer {
          background: #0a0a14;
          min-height: 100vh;
         
        }

        .cat-section {
          padding: 20px 16px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .cat-section-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 2px solid #ff6b35;
          position: relative;
        }
        .cat-section-header::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 60px; height: 2px;
          background: #fff;
        }

        .cat-section-title {
          font-family: 'Orbitron', 'Segoe UI', sans-serif;
          font-size: 1.15rem;
          font-weight: 900;
          color: #ff6b35;
          margin: 0;
          letter-spacing: 1px;
          text-shadow: 0 0 12px rgba(255,107,53,0.4);
        }

        .cat-section-desc {
          color: #666;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Grid */
        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .items {
          width: calc(15% - 10px);
          min-width: 100px;
        }

        .items a { text-decoration: none; display: block; }

        .MainHVR {
          background: #111122;
          border: 1px solid #222;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: pointer;
          position: relative;
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }

        .MainHVR:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #ff6b35;
          box-shadow: 0 8px 24px rgba(255,107,53,0.3);
        }

        .game-card__cover {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.3s;
        }
        .MainHVR:hover .game-card__cover { transform: scale(1.06); }

        .game {
          position: relative;
          z-index: 2;
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          text-align: center;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          width: 100%;
          padding: 20px 6px 8px;
          margin: 0;
          border-radius: 0 0 12px 12px;
          letter-spacing: 0.3px;
        }

        /* No results */
        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: #555;
          font-size: 1rem;
        }
        .no-results strong { color: #ff6b35; }

        @media (max-width: 768px) {
          .items { width: calc(33.33% - 9px); min-width: 100px; }
        }
        @media (max-width: 480px) {
          .items { width: calc(50% - 6px); min-width: 90px; }
          .cat-section { padding: 14px 10px 8px; }
        }
      </style>

      <div class="container" id="gamesContainer">
        ${buildAllSections()}
      </div>
    `;
  }
}

customElements.define('games-component', GamesComponent);

/* Shared UTM/Direct ad-flow (covers play pages that load games2 but not footer2). */
(function loadPlayAdFlowBoot() {
  if (window.__adFlowBootLoader) return;
  window.__adFlowBootLoader = true;
  var s = document.createElement('script');
  var base = '/play/js/';
  try {
    var cur = document.currentScript && document.currentScript.src;
    if (cur) base = cur.replace(/[^/]+$/, '');
  } catch (e) {
    /* ignore */
  }
  s.src = base + 'ad-flow-boot.js';
  s.async = false;
  (document.head || document.documentElement).appendChild(s);
})();

// class games extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//       <div class="container">
//       <div class="row">
//      <div class="items" >
//      <a href="/blocky.html">
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/blocky.png" alt="" class="game-card__cover" >
//          <h3 class="game">
//              Blocky </h3></div>
//      </a>
//  </div>
//  <div class="items" >
//      <a href="/bounce.html"  >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/bounce.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Bounce</h3></div>
//      </a>
//  </div>
//  <div class="items" >
//      <a href="connection.html" class="game-link"  >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/connection.png" alt="" class="game-card__cover">
//          <h3 class="game">
//              Connection</h3></div>
//      </a>
//  </div>
//  <div class="items">
//      <a href="cubejump.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/cubejump.png" alt="" class="game-card__cover">
//          <h3 class="game">
//              Cube Jump</h3></div>
//      </a>
//  </div>
//  <div class="items" >
//      <a href="dinobubbles.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/dinobubbles.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Dino Bubbles</h3></div>
//      </a>
//  </div>
//  <div class="items" >
//      <a href="/drawin.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/drawin.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Draw In</h3></div>
//      </a>
//  </div>
//  <div class="items">
//      <a href="/flightcolor.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/flightcolor.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Flight Color</h3></div>
//      </a>
//  </div><div class="items">
//        <a href="/flipthegun.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/flipthegun.png" alt="" class="game-card__cover">
//          <h3 class="game">
//              Flip The Gun</h3></div>
//      </a>
//  </div><div class="items" >
//      <a href="/happyglass.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/happyglass.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Happy Glass </h3></div>
//      </a>
//  </div><div class="items" >
//      <a href="/freekick.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/freekick.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Free Kick </h3></div>
//      </a>
//  </div><div class="items" >
//      <a href="/make5.html" class="game-link" target="_self" >
//      <div class="MainHVR d-flex justfy-content-center align-items-center">
//          <img src="game_logo/make5.png" alt="" class="game-card__cover">
//          <h3 class="game" >
//              Make5</h3></div>
//      </a>
//  </div><div class="items">
//    <a href="/minigolf.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/minigolf.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Mini Golf </h3></div>
//    </a>
// </div><div class="items">
//    <a href="/node.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/node.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Node </h3></div>
//    </a>
// </div><div class="items">
//    <a href="/release.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/release.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Release </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/spellschool.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/spellschool.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Spell School </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/squarea.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/squarea.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            SquArea </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/takeoff.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/takeoff.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Take_Off </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/wording.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/wording.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Wording </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/yummyword.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/yummyword.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Yummy Word </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/sandsortpuzzle.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/sandsortpuzzle.png" alt="" class="game-card__cover">
//    <h3 class="game">
//        Sand Sort Puzzle</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/tower.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/tower.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Tower Building</h3></div>
// </a>
// </div>

// <div class="items">
//    <a href="/hexgl.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/hexgl.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        HexGL</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/hextris.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/hextris.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Hextris</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/actionreflex.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/actionreflex.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Actionre Flex</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/alieninvaders.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/alieninvaders.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Alien Invaders</h3></div>
// </a>
// </div> 
// <div class="items">
//    <a href="/cocos.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/cocos.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Cocos2d Tetris</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/snakes.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/snakes.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Snakes</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/towerblocks.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/towerblocks.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Tower Blocks</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/magicsquare.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/magicsquare.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Magic Square</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/thefranticrun.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/thefranticrun.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        The Frantic Run</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/thecube.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/thecube.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        The Cube</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/unrulytower.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/unrulytower.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Unruly Tower</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/menja.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/menja.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        MENJA</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/coloron.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/coloron.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Coloron</h3></div>
// </a>
// </div><div class="items">
//    <a href="/pingpong.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/pingpong.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Ping Pong</h3></div>
// </a>
// </div><div class="items">
//    <a href="/onoff.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/onoff.png" alt="" class="game-card__cover">
//    <h3 class="game">
//        On Off</h3></div>
// </a>
// </div><div class="items">
//    <a href="/rewire.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/rewire.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Re-wire</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/spacecraft.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/spacecraft.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Space Craft</h3></div>
//    </a>
// </div> 
// <div class="items">
//    <a href="/offtheline.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/offtheline.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Off The Line</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/killbird.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/killbird.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Kill Bird</h3></div>
// </a>
// </div><div class="items">
//    <a href="/bullseye.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/bullseye.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Bullseye Game</h3></div>
// </a>
// </div> 
// <div class="items">
//    <a href="/planetdefence.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/planetdefence.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Planet Defence</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/offlineparadise.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/offlineparadise.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Offline Paradise</h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/rolldise.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/pig.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Roll The Dise</h3></div>
//    </a>
// </div>
// <div class="items">
//     <a href="/dunkshot.html" class="game-link" target="_self" >
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//    <img src="game_logo/dunkshot.png" alt="" class="game-card__cover">
//    <h3 class="game" >
//        Dunk Shot</h3></div>
// </a>
// </div>
// <div class="items">
//    <a href="/fruitsgame.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/fruitsgame.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Fruits Game</h3></div>
//    </a>
// </div>

// <div class="items">
//    <a href="/tictactoe.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/tictactoe.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Tic Tac Toe</h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/sudoku.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/sudoku.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Sudoku </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/radiusraid.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/radiusraid.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Radius Raid </h3></div>
//    </a>
// </div>
// <div class="items">
//    <a href="/racemaster.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/racemaster.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Race Master</h3></div>
//    </a>
// </div>
// <div class="items" >
// <a href="reversespaceriding.html" class="game-link" target="_self">
// <div class="MainHVR d-flex justfy-content-center align-items-center">
// <img src="game_logo/reversespaceriding.png" alt="" class="game-card__cover" >
// <h3 class="game">
//  Reverse Space Riding  </h3>
//  </div>
// </a>
// </div>
// <div class="items">
//    <a href="/spaceinvaders.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/spaceinvaders.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Space Invaders </h3></div>
//    </a>
// </div>

// <div class="items">
//    <a href="/candycrush.html" class="game-link" target="_self" >
//    <div class="MainHVR d-flex justfy-content-center align-items-center">
//        <img src="game_logo/candycrush.png" alt="" class="game-card__cover">
//        <h3 class="game" >
//            Candy Crush </h3></div>
//    </a>
// </div>
// <div class="items" >
//       <a href="roadrace2d.html" class="game-link" target="_self">
//         <div class="MainHVR d-flex justfy-content-center align-items-center">
//           <img src="game_logo/roadrace2d.png" alt="" class="game-card__cover" >
//           <h3 class="game">
//             Road Race 2d  </h3></div>
//       </a>
//   </div>
//   <div class="items" >
//     <a href="zombieattack.html" class="game-link" target="_self">
//       <div class="MainHVR d-flex justfy-content-center align-items-center">
//         <img src="game_logo/zombieattack.png" alt="" class="game-card__cover" >
//         <h3 class="game">
//           Zombie Attack  </h3></div>
//     </a>
// </div>

// <div class="items" >
//   <a href="burningballs.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/burningballs.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Burning Balls  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="dashingdonut.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/dashingdonut.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Dashing Donut  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="harvestveggie.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/harvestveggie.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Harvest Veggie  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="icymatch.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/icymatch.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Icy Match  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="halloweenhooks.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/halloweenhooks.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Halloween Hooks  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="icecandy.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/icecandy.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Ice Candy  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="christmasgift.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/christmasgift.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Christmas Gift  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="alienonearth.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/alienonearth.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Alienon Earth  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="dragonfish.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/dragonfish.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Dragon Fish  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="perfectpoolshot.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/perfectpoolshot.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Perfect Pool Shot  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="coockiesboockies.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/coockiesboockies.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Coockies Boockies   </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="darkforest.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/darkforest.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Dark Forest    </h3></div>
//   </a>
// </div>

// <div class="items" >
//   <a href="jellybellyjam.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/jellybellyjam.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Jelly Belly Jam  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="universaladvanture.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/universaladvanture.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Universal Advanture  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="ludomultiplayer.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/ludomultiplayer.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Ludo Multiplayer  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="droptheappleintomouth.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/droptheappleintomouth.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Drop The Apple Into Mouth  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="cricketbatter.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/cricketbatter.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Cricket Batter  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="2048.html" class="game-link" >
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/2048.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         2048  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="shoottogiantbats.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/shoottogiantbats.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Shoot To Giant Bats  </h3></div>
//   </a>
// </div>
// <div class="items" >

//   <a href="touchthealphabetintheorder.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/touchthealphabetintheorder.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Touch The Alphabet In The Order  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="drivesafe.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/drivesafe.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Drive Safe  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="protectredindianman.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/protectredindianman.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Protect Red Indian Man  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="makeabridgeandgogetdiamond.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/makeabridgeandgogetdiamond.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Make A Bridge And Go Get Diamond  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="fighterjet.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/fighterjet.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Fighter Jet  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="coinsnake.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/coinsnake.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Coin Snake  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="collectthesameballs.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/collectthesameballs.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Collect The Same Balls  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="advantureousboyrun.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/advantureousboyrun.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Advantureous Boy Run  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="spacebattle.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/spacebattle.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Space Battle  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="crossyroad.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/crossyroad.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Crossy Road  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="cutedressup.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/cutedressup.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Cute Dressup  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="chickenshooter.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/chickenshooter.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Chicken Shooter  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="yummycandies.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/yummycandies.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Yummy Candies  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="jellyworld.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/jellyworld.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Jelly World  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="flowershooter.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/flowershooter.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Flower Shooter  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="runningninja.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/runningninja.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Running Ninja  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="colormatch.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/colormatch.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Color Match  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="ballout.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/ballout.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Ball Out  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="arrowpatching.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/arrowpatching.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Arrow Patching  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="ballbounceescape.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/ballbounceescape.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Ball Bounce Escape  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="ballbouncerwall.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/ballbouncerwall.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Ball Bouncer Wall  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="bottleclimbing.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/bottleclimbing.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Bottle Climbing  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="bottlegarbage.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/bottlegarbage.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Bottle Garbage  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="bottlejump.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/bottlejump.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Bottle Jump  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="zombiehunter.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/zombiehunter.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Zombie Hunter  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="brainexcercisegame.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/brainexcercisegame.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Brain Excercise Game  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="carbreaker.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/carbreaker.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Car Breaker  </h3></a></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="christmassantarun.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/christmassantarun.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Christmas Santa Run  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="colorjumpgame.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/colorjumpgame.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Color Jump Game  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="darkknightrider.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center"> 
//       <img src="game_logo/darkknightrider.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Dark Knight Rider  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="dashcolorswitch.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/dashcolorswitch.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Dash Color Switch  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="eggbucketmaster.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/eggbucketmaster.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Egg Bucket Master  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="eggcatcher.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/eggcatcher.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Egg Catcher  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="endlessninjarun.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/endlessninjarun.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Endless Ninja Run  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="fillthedot.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/fillthedot.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Fill The Dot  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="gopanda.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/gopanda.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Go Panda  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="firealarmrequers.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/firealarmresquers.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Fire Alarm Requers  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="flyingtriangle.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/flyingtriangle.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Flying Triangle  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="goalpostchallenge.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/goalpostchallenge.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Goal Post Challenge  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="halloweenrun.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/halloweenrun.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Halloween Run  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="happymood.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/happymood.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Happy Mood  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="jewelinthrowchallenge.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/jewelinthrowchallenge.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Jewel In Throw Challenge  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="mannequinheadjump.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/mannequinheadjump.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Mannequin Head Jump  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="mrpingjumpingjoy.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/mrpingjumpingjoy.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Mrping Jumping Joy  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="nanoraceescape.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/nanoraceescape.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Nano Race Escape  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="noobvspro.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/noobvspro.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Noob Vs Pro   </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="motoracer.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/motoracer.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Moto Racer  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="perfectrotare.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/perfectrotare.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Perfect Rotare  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="pixelninza.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/pixelninza.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Pixel Ninza  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="pocketjumparcade.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/pocketjumparcade.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Pocket Jump Arcade  </h3></div>
//   </a>  
// </div>
// <div class="items" >
//   <a href="pongsdot.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/pongsdot.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Pongs Dot  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="potfiller.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/potfiller.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Pot Filler  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="rocketpilot.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/rocketpilot.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Rocket Pilot  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="romeoswiftracer.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/romeoswiftracer.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Romeo Swift Racer  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="rollingcubeadvantures.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/rollingcubeadvantures.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Rolling Cube Advantures  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="saveyourpuppies.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/saveyourpuppies.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Save Your Puppies  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="sawsescapes.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/sawsescapes.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Saws Escapes  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="christmasholiday.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/christmasholiday.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Christmas Holiday  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="shootzombie.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/shootzombie.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Shoot Zombie  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="squareescape.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/squareescape.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Square Escape  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="starfallescape.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/starfallescape.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Star Fall Escape  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="stressreleasingdots.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/stressreleasingdots.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Stress Releasing Dots  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="tapcounterchallenge.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/tapcounterchallenge.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Tap Counter Challenge  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="tennisballarcade.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/tennisballarcade.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         tennisballarcade  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="towerbalancer.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/towerbalancer.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Tower Balancer  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="waroftank.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/waroftank.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         War Of Tank  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="balloonpop.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/balloonpop.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Balloon Pop  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="choosetruecolors.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/choosetruecolors.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Choose True Colors  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="airbattlemission.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/airbattlemission.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Air Battle Mission  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="stickman.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/stickman.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Stick Man  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="speedsquarerunner.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/speedsquarerunner.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Speed Square Runner  </h3></div>
//   </a>
// </div>
//   <div class="items" >
//       <a href="bemillionaire.html" class="game-link" target="_self">
//       <div class="MainHVR d-flex justfy-content-center align-items-center">
//         <img src="game_logo/bemillionaire.png" alt="" class="game-card__cover" >
//         <h3 class="game">
//           Bemillionaire  </h3></div>
//           </a>
//     </div>
//     <div class="items" >
//     <a href="pixelfiller.html" class="game-link" target="_self">
//       <div class="MainHVR d-flex justfy-content-center align-items-center">
//         <img src="game_logo/pixelfiller.png" alt="" class="game-card__cover" >
//         <h3 class="game">
//           Pixel Filler  </h3></div>
//     </a>
//   </div> 
//   <div class="items" >
//   <a href="fishcatcher.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/fishcatcher.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Fish Catcher  </h3></div>
//   </a>
// </div>
// <div class="items" >
//   <a href="joytoytrain.html" class="game-link" target="_self">
//     <div class="MainHVR d-flex justfy-content-center align-items-center">
//       <img src="game_logo/joytoytrain.png" alt="" class="game-card__cover" >
//       <h3 class="game">
//         Joytoy Train  </h3></div>
//   </a>
// </div>

//       </div><!-- row -->
//      </div><!-- container -->

//           `
//     }
// }



// customElements.define('games-component', games);
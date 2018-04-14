var Blippar = require('blippar');
blipp = Blippar.blipp;

// ======================================================
// =                        BLIPP                       =
// ======================================================

blipp.getPeel()
  .setOrientation('portrait')
  .setType('fit')
  .setScale(75);

var screenW = blipp.getScreenWidth();
var screenH = blipp.getScreenHeight();

// ======================================================
// =                        SCENE                       =
// ======================================================

var scene = blipp.addScene('default');
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();

var pigs = [];

scene.onCreate = function() {
  scene.videoFile = "boom.mp4";
  scene.videoFile = "confetti.mp4"
  // scene.pig = new Pig(piggyOptions);
  // pigs.push(scene.pig);
  // movePiggy(scene.pig.parent);
  // var pigRadius = scene.pig.parent.getScaleX()/2;
  // console.log(pigSize);
};

// scene.onUpdate = function() {
//   for(var i=0; i<pigs.length-1; i++) {
//     for(var j = i+1; j < pigs.length; j++) {
//       var firstPig = pigs[i];
//       var secondPig = pigs[j];
//       var firstPigLoc = firstPig.parent.getTranslation();
//       var secondPigLoc = secondPig.parent.getTranslation();
//       var distanceX = firstPigLoc[0]-secondPigLoc[0];
//       var distanceY = firstPigLoc[1]-secondPigLoc[1];
//       var distance = Math.sqrt(Math.pow(distanceX, 2)+Math.pow(distanceY, 2));
//       if (distance < pigSize){
//         // firstPig.parent.animate().translate(0, 0, 0).duration(0);
//         // secondPig.parent.animate().translate(25, 25, 20).duration(0);
//           movePiggyFast(firstPig.parent);
//           movePiggy(secondPig.parent);
//           console.log("Oi!");
//         }
//       }
//     }
//   };

scene.onShow = function(){
    startTheShow();
};


// ======================================================
// =                        MODELS                      =
// ======================================================


var farmLand = scene.addSprite('grass.jpg')
  .setName('grass')
  .setTranslation(0, 0, 0)
  .setScale([mW, mH, 0])
  .setType('solid')
  .setAlpha(0)
  .setHidden(true);

var longFence1 = scene.addSprite('fence_long.png')
  .setName('Long Fence 1')
  .setScale(mW, 131, 0)
  .setTranslation(0, mH/2, 65)
  .setRotationX(90)
  .setSides('both')
  .setType('aura')
  .setAlpha(0)
  .setHidden(true);

var longFence2 = scene.addSprite('fence_long.png')
  .setName('Long Fence 2')
  .setScale(mW, 131, 0)
  .setTranslation(0, -mH/2, 65)
  .setRotationX(90)
  .setSides('both')
  .setType('aura')
  .setAlpha(0)
  .setHidden(true);

var shortFence1 = scene.addSprite('fence_short.png')
  .setName('Short Fence 1')
  .setScale(mH, 131, 0)
  .setTranslation(mW/2, 0, 65)
  .setRotationX(90)
  .setRotationY(90)
  .setSides('both')
  .setType('aura')
  .setAlpha(0)
  .setHidden(true);

var shortFence2 = scene.addSprite('fence_short.png')
  .setName('Short Fence 2')
  .setScale(mH, 131, 0)
  .setTranslation(-mW/2, 0, 65)
  .setRotationX(90)
  .setRotationY(90)
  .setSides('both')
  .setType('aura')
  .setAlpha(0)
  .setHidden(true);

var gameTitle = scene.addSprite('gametitle.png')
  .setName('Game Title')
  .setScale(712, 712, 0)
  .setTranslation(0, 156, 250)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true);

var boomVideo = scene.addSprite('blank.png')
  .setName('Explosion!')
  .setScale(512, 512, 0)
  .setTranslation(0, 156, 251)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true);

var startButton = scene.addSprite('startbtn.png')
  .setName('Start Button')
  .setScale(297, 87, 0)
  .setTranslation(0, -50, 300)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

var instructionsButton = scene.addSprite('instructionsbtn.png')
  .setName('Instructions Button')
  .setScale(549, 87, 0)
  .setTranslation(0, -150, 301)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

var instructionsPanel = scene.addSprite('instructionspanel.png')
  .setName('Instructions Panel')
  .setScale(705, 939, 0)
  .setTranslation(0, 0, 400)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

var playAgainButton = scene.addSprite('playagainbtn.png')
  .setName('Play Again Button')
  .setScale(483, 87, 0)
  .setTranslation(0, -256, 356)
  .setRotationX(45)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

var youWon = scene.addSprite('won.jpg')
  .setName('Congrats! You Have Won!')
  .setScale(712, 712, 0)
  .setTranslation(0, 0, 350)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true);

var confettiVideo = scene.addSprite('blank.png')
  .setName('Raining Glittery PeePi Guts!')
  .setScale(712, 712, 0)
  .setTranslation(0, 0, 355)
  .setRotationX(22.5)
  .setAlpha(0)
  .setHidden(true);

var piggyOptions = {
  body: {
    mesh: 'Object001.md2',
    color: 'ffa9f8',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0]
  },
  frontLegs: {
    mesh: 'Object005.md2',
    color: 'ffa9f8',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0],
    group: 'frontLegs'
  },
  ears: {
    mesh: 'Object004.md2',
    color: 'ffa9f8',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0]
  },
  rightNostril:{
    mesh: 'Capsu3.md2',
    color: '000000',
    translation: [255.416, 28.5683, -66.1337],
    rotation: [0, 0, 0],
    group: 'snout'
  },
  leftNostril: {
    mesh: 'Capsu1.md2',
    color: '000000',
    translation: [260.416, -38.5683, -66.1337],
    rotation: [0, 12.9, 0],
    group: 'snout'
  },
  snout: {
    mesh: 'Object002.md2',
    color: 'ffa9f8',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0],
    group: 'snout'
  },
  eyes: {
    mesh: 'Object003.md2',
    color: 'ffffff',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0]
  },
  rearLegs: {
    mesh: 'Object006.md2',
    color: 'ffa9f8',
    translation: [-118.416, 0, 0],
    rotation: [0, 0, 0],
    group: 'rearLegs'
  },
  handlebarsSeat: {
    mesh: 'Sphere.md2',
    color: '333333',
    translation: [0.178436, 0, 0],
    rotation: [0, 0, 0]
  }
};

// ======================================================
// =                OTHER FUNCTIONS                     =
// ======================================================

function startTheShow() {
  setTimeout(function() {
    scene.playSound('deathistheroadtoawe.mp3', 'false');
  }, 500)
  gameTitle.setHidden(false);
  gameTitle.animate().alpha(1).duration(2000).onEnd = function(){
    boomVideo.setBlend('chromakey');
    boomVideo.setChromakey([126, 0.5, 0.5, 180]);
    boomVideo.setHidden(false);
    boomVideo.playVideo('boom.mp4', 'boom.mp3', false, false, false);
    boomVideo.animate().alpha(1).duration(10).onEnd = function(){
      setTimeout(function(){
        boomVideo.setHidden(true);
      }, 500)
      setTimeout(function(){
        startButton.setHidden(false);
        startButton.animate().alpha(1).duration(1000).onEnd = function(){
          instructionsButton.setHidden(false);
          instructionsButton.animate().alpha(1).duration(1000).onEnd = function(){
            startButton.setClickable(true);
            instructionsButton.setClickable(true);
            setTimeout(function(){
              farmLand.setHidden(false);
              longFence1.setHidden(false);
              longFence2.setHidden(false);
              shortFence1.setHidden(false);
              shortFence2.setHidden(false);
              farmLand.animate().alpha(1).duration(1000);
              longFence1.animate().alpha(1).duration(1000);
              longFence2.animate().alpha(1).duration(1000);
              shortFence1.animate().alpha(1).duration(1000);
              shortFence2.animate().alpha(1).duration(1000);
            }, 500)
          }
        }
      }, 1000)
    }
  }
}

playAgainButton.onTouchEnd = function() {
  this.animate().alpha(0).duration(1000).onEnd = function(){
    this.setHidden(true);
    this.setClickable(false);
  };
  youWon.animate().alpha(0).duration(1000).onEnd = function() {
    youWon.setHidden(true);
    youWon.setClickable(false);
  }
  confettiVideo.animate().alpha(0).duration(1000).onEnd = function(){
    confettiVideo.setHidden(true);
    confettiVideo.stopVideo();
  }
  setTimeout(function(){
    killStuff(pigs);
    setTimeout(function(){
      var pigs = [];
      farmLand.animate().alpha(0).duration(1000);
      longFence1.animate().alpha(0).duration(1000);
      longFence2.animate().alpha(0).duration(1000);
      shortFence1.animate().alpha(0).duration(1000);
      shortFence2.animate().alpha(0).duration(1000);
      startTheShow();
    }, 9050)
  }, 1000)
}

youWon.onTouchEnd = function() {
  scene.playSound('waffle.mp3', false);
}

startButton.onTouchEnd = function() {
  scene.stopSounds();
  scene.playSound('togetherwewillliveforever.mp3', 'true');
  this.animate().alpha(0).duration(1000).onEnd = function(){
    this.setHidden(true);
    this.setClickable(false);
  };
  gameTitle.animate().alpha(0).duration(1500).onEnd = function(){
    gameTitle.setHidden(true);
    gameTitle.setClickable(false);
  };
  instructionsButton.animate().alpha(0).duration(1500).onEnd = function(){
    instructionsButton.setHidden(true);
    instructionsButton.setClickable(false);
  };
  generatePig(-100, 0, 50);
  generatePig(100, 0, 50);
}

instructionsButton.onTouchEnd = function() {
  startButton.setClickable(false);
  instructionsButton.setClickable(false);
  instructionsPanel.setHidden(false);
  instructionsPanel.animate().alpha(1).duration(1000).onEnd = function(){
    instructionsPanel.setClickable(true);
  };
}

instructionsPanel.onTouchEnd = function() {
  this.setClickable(false);
  this.animate().alpha(0).duration(1000).onEnd = function(){
    this.setHidden(true);
  };
  startButton.setClickable(true);
  instructionsButton.setClickable(true);
}

// ======================================================
// =               PIGGY FUNCTIONS                      =
// ======================================================

var collisionInterval = setInterval(function() {
  for(var i=0; i<pigs.length-1; i++) {
    for(var j = i+1; j < pigs.length; j++) {
      var firstPig = pigs[i];
      var secondPig = pigs[j];
      var firstPigLoc = firstPig.parent.getTranslation();
      var secondPigLoc = secondPig.parent.getTranslation();
      var distanceX = firstPigLoc[0]-secondPigLoc[0];
      var distanceY = firstPigLoc[1]-secondPigLoc[1];
      var distance = Math.sqrt(Math.pow(distanceX, 2)+Math.pow(distanceY, 2));
      if (distance < 100){
        var currentTime = new Date();
        var firstPigAge = currentTime - firstPig.birthTime;
        var secondPigAge = currentTime - secondPig.birthTime;
        if (firstPigAge > 2000 && secondPigAge > 2000) {
          movePiggy(firstPig.parent);
          firstPig.birthTime = currentTime;
          movePiggy(secondPig.parent);
          secondPig.birthTime = currentTime;
        }
      }
    }
  }
}, 10);

function wiggleNose(model){
  // Get Current Pig Nose Z
  var currentSnoutHeight = model.getTranslation()[2];
  // Now Animate Dat Damn Piggy Snout!!
  model.animate().translateZ((currentSnoutHeight + 30)).duration(500).onEnd = function (){
    model.animate().translateZ(currentSnoutHeight).duration(500).onEnd = function(){
      model.animate().translateZ((currentSnoutHeight - 30)).duration(500).onEnd = function(){
        model.animate().translateZ(currentSnoutHeight).duration(500).onEnd = function(){
          wiggleNose(model);
        }
      }
    }
  };
}

function moveFrontLegs(model){
  // Animate Dem Sweet Piggy Legs! But Just Front, Tho.
  model.animate().rotationY(5).duration(100).onEnd = function(){
    model.animate().rotationY(0).duration(100).onEnd = function(){
      model.animate().rotationY(-5).duration(100).onEnd = function(){
        moveFrontLegs(model);
      }
    }
  };
}

function moveRearLegs(model){
  // Animate Dem Swole Rear Piggy Legs! Dayum, Piggy!
  model.animate().rotationY(5).duration(100).delay(50).onEnd = function(){
    model.animate().rotationY(0).duration(100).onEnd = function(){
      model.animate().rotationY(-5).duration(100).onEnd = function(){
        moveRearLegs(model);
      }
    }
  };
}

function shakeNdie(model){
  // AKA Shake n’ Bacon: Shake that Pig TO DEATH.
  var currentY = model.getTranslationY();
  var currentX = model.getTranslationX();
  var currentZ = model.getTranslationZ();
  model.animate().translate(currentX-5, currentY-5, currentZ-5).duration(100).onEnd = function(){
    model.animate().translate(currentX+5, currentY+5, currentZ+5).duration(100).onEnd = function(){
      model.animate().translate(currentX, currentY, currentZ).duration(100).onEnd = function(){
        shakeNdie(model);
      }
    }
  };
}

function movePiggy(model){
  // Roll Dat Beautiful Piggy Sound
  if (pigs.length < 3){
    scene.playSound('snuffle.mp3', false);
  }
  // Get Random Vector
  var pigX = (Math.random()-0.5)*(mH);
  var pigY = (Math.random()-0.5)*(mW);
  // Get Current Vector
  var currentY = model.getTranslationY();
  var currentX = model.getTranslationX();
  // Determine Rotation from Two Vectors
  var newRotation = Math.atan2((pigY - currentY), (pigX - currentX))* 180 / Math.PI;
  // Now Animate Dat Damn Piggy!
  model.animate().rotationZ(newRotation).duration(500);
  model.animate().delay(500).translate(pigX,pigY,50).duration(3000).onEnd = function(){
    movePiggy(model);
  };
}

function movePiggyFast(model){
  // Roll Dat Beautiful Piggy Sound
  scene.playSound('snuffle.mp3', false);
  // Get Current Vector
  var currentY = model.getTranslationY();
  var currentX = model.getTranslationX();
  // Get Random Vector
  var pigX = (Math.random()-0.5)*(mH);
  var pigY = (Math.random()-0.5)*(mW);
  // Determine Rotation from Two Vectors
  var newRotation = Math.atan2((pigY - currentY), (pigX - currentX))* 180 / Math.PI;
  // Now Animate Dat Damn Piggy!
  model.animate().rotationZ(newRotation).duration(100);
  model.animate().delay(100).translate(pigX,pigY,50).duration(500).onEnd = function(){
    movePiggy(model);
  };
}

// ======================================================
// =               MAKE PIGS NOT WAR                    =
// ======================================================

function generatePig(pigLoc) {
  var newPig = new Pig(piggyOptions);
  newPig.parent.setTranslation(pigLoc);
  newPig.birthTime = new Date();
  movePiggy(newPig.parent);
  pigs.push(newPig);
}

function Pig(options) {
  var pigLoc = [];
  var pigCounter = pigs.length;
  this.name = 'pig' + pigCounter;
  this.snoutParts = [];
  this.parent = scene.addTransform();
  var self = this;
  for (var part in options) {
    var _part = scene.addMesh(options[part].mesh)
      .setColor(options[part].color)
      .setTranslation(options[part].translation)
      .setRotation(options[part].rotation)
      .setParent(self.parent)
      .setClickable(true)
      .setName('pig' + pigCounter);
    if (options[part].group === 'snout') {
      this.snoutParts.push(_part);
    };
    if (options[part].group === 'frontLegs') {
      moveFrontLegs(_part);
    };
    if (options[part].group === 'rearLegs') {
      moveRearLegs(_part);
    };
    _part.onTouchEnd = function() {
      var rhandoPig = pigs[Math.floor(Math.random() * pigs.length)];
      if ( this.name === rhandoPig.name ) {
        youWon.setHidden(false);
        youWon.animate().alpha(1).duration(1000);
        playAgainButton.setHidden(false);
        playAgainButton.setClickable(true);
        playAgainButton.animate().alpha(1).duration(1000);
        scene.stopSounds();
        confettiVideo.setBlend('chromakey');
        // Remember, for Chromakey: [Hue, 0-1, 0-1, 0-360]
        confettiVideo.setChromakey([240, 0.5, 0.5, 180]);
        confettiVideo.playVideo('confetti_blue.mp4', 'smackdatpiggy.mp3', true, false, false);
        confettiVideo.setHidden(false);
        confettiVideo.animate().alpha(1).duration(500);
      } else {
        pigLoc = self.parent.getTranslation();
        scene.playSound('no_1.mp3');
        generatePig(pigLoc);
        generatePig(pigLoc);
      }
    };
    pigCounter++;
  }

  // Add Gir to Pig
  this.gir_r = scene.addSprite('gir_stare_r.png')
    .setScale(512, 512, 1)
    .setTranslation(9, 0, 450)
    .setRotation(90, 90, 0)
    .setSides('both')
    .setAlpha(1)
    .setHidden(false)
    .setParent(self.parent)
    .setType('aura');
  this.gir = scene.addSprite('gir_stare.png')
    .setScale(512, 512, 1)
    .setTranslation(10, 0, 451)
    .setRotation(90, 90, 0)
    .setAlpha(1)
    .setHidden(false)
    .setParent(self.parent)
    .setType('aura');

  // Wiggle that shit
  this.snoutParts.forEach(function(snoutPart) {
    wiggleNose(snoutPart);
  });
  // this.parent.setScale(pigSize, pigSize, pigSize);
  this.parent.setScale(0.15, 0.15, 0.15);
  this.parent.setTranslationZ(50);

  // Now: Set this Piggy in Motion!
  movePiggy(this.parent);
  wiggleNose(this.gir);
  wiggleNose(this.gir_r);
}

function killStuff(array) {
  scene.stopSounds();
  // MURDER ALL PIGS IN A FIREY RAGE
  scene.playSound('pigscream.mp3');
  setTimeout(function(){
    scene.playSound('pigscream.mp3');
  }, 20)
  setTimeout(function(){
    scene.playSound('pigscream.mp3');
  }, 25)
  setTimeout(function(){
    scene.playSound('pigscream.mp3');
  }, 10)
  array.forEach(function(thing) {
    shakeNdie(thing.parent);
    setTimeout(function(){
      thing.parent.destroy();
    }, 8000)
  });
}

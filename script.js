/*window.addEventListener('load', init);

function init(){
  setTimeout(sequencer, 500);
}*/
//document.querySelector(".allDoggos").addEventListener("click", korv);



function sequencer() {
  let onOffbutton = document.querySelector('.onOffbutton')

    const doggo0 = new Tone.Player("./audio/doggo0.wav").toMaster();
    const doggo1 = new Tone.Player("./audio/doggo1.wav").toMaster();
    const doggo2 = new Tone.Player("./audio/doggo2.wav").toMaster();
    const doggo3 = new Tone.Player("./audio/doggo3.wav").toMaster();
    const doggo4 = new Tone.Player("./audio/doggo4.wav").toMaster();
    const doggo5 = new Tone.Player("./audio/doggo5.wav").toMaster();
    const doggo6 = new Tone.Player("./audio/doggo6.wav").toMaster();
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "8n"); //How many notes, change if more than 8 checkboxes

    if (onOffbutton.value=="OFF") {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      onOffbutton.value = "ON";
      onOffbutton.innerHTML = "ON"
    } else {
      Tone.Transport.start();
      onOffbutton.value = "OFF";
      onOffbutton.innerHTML = "OFF"
    }

    Tone.Transport.bpm.value = 60;

    function repeat() {
      let step = index % 8; //How many notes, change if more than 8 checkboxes
      let doggo0Inputs = document.querySelector(
        `.doggo0 input:nth-child(${step + 1})`
      );
      let doggo1Inputs = document.querySelector(
        `.doggo1 input:nth-child(${step + 1})`
      );
      let doggo2Inputs = document.querySelector(
        `.doggo2 input:nth-child(${step + 1})`
      );
      let doggo3Inputs = document.querySelector(
        `.doggo3 input:nth-child(${step + 1})`
      );
      let doggo4Inputs = document.querySelector(
        `.doggo4 input:nth-child(${step + 1})`
      );
      let doggo5Inputs = document.querySelector(
        `.doggo5 input:nth-child(${step + 1})`
      );
      let doggo6Inputs = document.querySelector(
        `.doggo6 input:nth-child(${step + 1})`
      );
      if (doggo0Inputs.checked) {
        doggo0.start();
      }
      if (doggo1Inputs.checked) {
        doggo1.start();
      }
      if (doggo2Inputs.checked) {
        doggo2.start();
      }
      if (doggo3Inputs.checked) {
        doggo3.start();
      }
      if (doggo4Inputs.checked) {
        doggo4.start();
      }
      if (doggo5Inputs.checked) {
        doggo5.start();
      }
      if (doggo6Inputs.checked) {
        doggo6.start();
      }
      index++;
    }
  }

  color()
function color(){
  let size    = 4;
  let rainbow = new Array(size);
  
  for (let i=0; i<size; i++) {
    let red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
    let blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
    let green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
  
    rainbow[i] = "#"+ red + green + blue;
  }
  
  function sin_to_hex(i, phase) {
    let sin = Math.sin(Math.PI / size * 2 * i + phase);
    let int = Math.floor(sin * 127) + 128;
    let hex = int.toString(16);
  
    return hex.length === 1 ? "0"+hex : hex;
  }
  console.log(rainbow);
}


/*
  for (let i = -30; i <= 30; i++){
    let cylinder = document.createElement('a-cylinder');
    cylinder.setAttribute("position", `${i} 0 -3`);
    cylinder.setAttribute("rotation", "-90 0 0");
    cylinder.setAttribute("radius", "0.5");
    cylinder.setAttribute("height", "60");
    cylinder.setAttribute("color", "#8B4513");
    cylinder.setAttribute("shadow");
    document.querySelector('a-scene').appendChild(cylinder);
}*/

//http://www.nikolay.rocks/2015-10-29-rainbows-generator-in-javascript - scale colors

/*


*/

/*
TODO:
Toggle
Check-box-loop

*/
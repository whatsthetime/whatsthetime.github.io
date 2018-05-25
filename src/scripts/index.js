import _ from 'lodash';
import './../../src/scss/index.scss';



function time() {
  var element = document.createElement('div');
  element.classList.add('timer');

  var time = new Date();


  // Lodash, now imported by this script
  element.innerHTML = "<h1>What's the time</h1> <p class='thetime'>"+time+"</p> <p><span>Time</span> is the indefinite continued progress of <span>existence</span> and events that occur in apparently <span>irreversible</span> succession from the past through the present to the <span>future</span>.</p>";
  return element;
}


document.body.appendChild(time());
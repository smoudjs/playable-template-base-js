import { sdk } from '@smoud/playable-sdk';
// Using assets/* alias configured in jsconfig.json for direct assets import
import buttonBg from 'assets/button.png';

export class Game {
  constructor(width, height) {
    // Create game container
    this.container = document.createElement('div');
    this.container.style.cssText = 'position: absolute; top: 0px; left: 0px; background-color: rgb(28, 28, 28);';
    this.container.style.width = `${width}px`;
    this.container.style.height = `${height}px`;

    document.body.appendChild(this.container);

    // Load image
    this.buttonImage = new Image();
    this.buttonImage.src = buttonBg;

    this.buttonImage.onload = () => {
      this.create();
    };
  }

  create() {
    this.installButton = document.createElement('div');
    this.installButton.style.cssText = 'position: absolute;cursor: pointer; width: 200px; transform-origin: top left;';
    this.installButton.onclick = () => sdk.install();

    // Add image
    this.buttonImage.style.width = '100%';
    this.installButton.appendChild(this.buttonImage);

    // Add text overlay
    const text = document.createElement('div');
    text.textContent = 'Install';
    text.style.cssText =
      'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -58%); color: rgb(255 255 255);font-size: 35px;font-weight: bold;text-shadow: rgb(255 252 106 / 63%) 4px 3px 9px;pointer-events: none;font-family: cursive;';
    this.installButton.appendChild(text);

    this.container.appendChild(this.installButton);

    // Set up interaction listener
    sdk.on('interaction', (count) => {
      console.log(`Interaction count: ${count}`);

      if (sdk.interactions >= 10) {
        sdk.finish();
      }
    });

    sdk.start();
  }

  resize(width, height) {
    this.container.style.width = `${width}px`;
    this.container.style.height = `${height}px`;

    // Calculate scale based on screen dimensions
    const scaleX = width / 320;
    const scaleY = height / 480;
    const scale = Math.min(scaleX, scaleY); // Use smaller scale to fit both dimensions

    this.installButton.style.transform = `scale(${scale}) translate(-50%, -50%)`;
    this.installButton.style.left = `${width / 2}px`;
    this.installButton.style.top = `${height / 2}px`;
  }

  pause() {
    console.log('Game paused');
  }

  resume() {
    console.log('Game resumed');
  }

  volume(value) {
    console.log(`Volume changed to: ${value}`);
  }

  finish() {
    console.log('Game finished');
  }
}

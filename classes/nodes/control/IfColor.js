import NodeColor from '../NodeColor.js';
import IfColorProperties from './IfColorProperties.jsx';
import OutputColor from '../OutputColor.js';
import InputColor from '../InputColor.js';
import InputNumber from '../InputNumber.js';


export default class IfColor extends NodeColor {
  constructor(className, graph, x, y, settings) {
    super(className, graph, x, y, 'Color If', IfColorProperties, settings);

    this.inputs = [
      new InputColor(this, 0, 'Input'),
      new InputNumber(this, 1, 'Test', 'hasAInput')
    ];
    this.outputs = [
      new OutputColor(this, 0, 'Output')
    ];

    this.a = typeof settings.a !== 'undefined' ? settings.a : 1;
  }


  toJson() {
    let json = super.toJson();

    json.settings.a = this.a;

    return json;
  }


  run(inputThatTriggered) {
    let a = this.a;

    if (this.inputs[1].number != null) {
      a = this.inputs[1].number;
    }

    if (a) {
      if (this.inputs[0].image) {
        this.bg.classList.add('running');
        this.runTimer = Date.now();

        if (this.isInsideALoop) {
          let image = this.inputs[0].image.clone();
          this.image = image;
          super.run(inputThatTriggered);

        } else {
          Jimp.read(this.inputs[0].image).then(image => {
            this.image = image;
            super.run(inputThatTriggered);
          })
        }
      } else {
        this.runTimer = Date.now();
        this.image = null;
        super.run(inputThatTriggered);
      }
    }
  }
}

export default `
  export default class NN {
    constructor(options) {
      this.layers = {}
      this.hidden = [];
      this.init(options);   
    }

    get lastHidden() {
      return this.hidden[this.hidden.length - 1];
    }

    init(options = {}) {
      this.learning_rate = options.learning_rate || 0.1;
      this.activation = new Activation(options.activation || 'sigmoid');
      this.initLayers(options.layers || {});
    }

    query(inputs_array) {
      this.checkLayers();
      this.activateLayer(this.layers.input, inputs_array);
      this.activateHidden(this.layers.input.output);
      this.activateLayer(this.layers.output, this.lastHidden.output);

      return this.layers.output.output;
    }

    train(inputs_array, targets_array) {    
      this.inputs  = Matrix.fromArray(inputs_array);
      this.targets = Matrix.fromArray(targets_array);
      
      this.query(inputs_array);
      
      this.layers.output.getError(this.targets);
      this.layers.output.backPropagate(this.lastHidden.output);
      this.layers.output.applyChanges();

      this.trainHidden(this.layers.output);
    }
  }
`
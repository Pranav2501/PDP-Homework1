import Interaction from "./Interaction.js";
// Class definition for TimestampedInteraction
// This class inherits from Interaction
class TimestampedInteraction extends Interaction {
  constructor(prompt, response, timestamp = Date.now()) {
    if (!timestamp) {
      throw new Error("Timestamp is required");
    }
    //constructor of Interaction class is called with prompt and response
    super(prompt, response);
    //timestamp added to Interaction
    this.timestamp = timestamp;
  }
  //method to show interactions
  showInteraction() {
    console.log(`Prompt: ${this.prompt}, Response: ${this.response}, Timestamp: ${this.timestamp}`);
  }
}
//export TimestampedInteraction class
export default TimestampedInteraction;
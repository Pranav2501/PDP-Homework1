import Interaction from "./Interaction.js";
// Class definition for DalleInteraction
class DalleInteraction extends Interaction {
  //constructor to initialize prompt, response and imageUrl
  constructor(prompt, response, imageUrl) {
    if (!imageUrl) {
      throw new Error("Image URL is required");
    }
    super(prompt, response);
    this.imageUrl = imageUrl;
  }
  //method to show interactions
  
  showInteraction() {
    //call showInteraction method of Interaction class
    super.showInteraction();
    console.log(`Image URL: ${this.imageUrl}`,"isDalle?:",this.getType());
  }
  //method to get type of interaction
  getType() {
    return "DalleInteraction";
  }
}
export default DalleInteraction;
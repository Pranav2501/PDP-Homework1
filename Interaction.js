// Purpose: Interaction class to store prompt and response
class Interaction {
  //Purpose: Constructor to initialize prompt and response
  constructor(prompt, response) {
    if (!prompt || !response) {
      throw new Error("Prompt and response are required");
    }
    this.prompt = prompt;
    this.response = response;
  }
  //Purpose: Method to show interaction
  showInteraction() {
    console.log("This is input prompt for ChatGPT:\n",this.prompt);
    console.log("This is the output prompt from ChatGPT:\n",this.response);
  }
}
//Purpose: Export Interaction class
export default Interaction;
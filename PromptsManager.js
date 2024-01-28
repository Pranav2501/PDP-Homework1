// Name : Pranav Raj Sowrirajan Balaji
// Programming Design Paradigm : Homework 1
// Date : 27 Jan 2024


// Importing necessary modules
import TimestampedInteraction from "./TimestampedInteraction.js";
import DalleInteraction from "./DalleInteraction.js";
import Interaction from "./Interaction.js";
import readline from "readline";
import ReferenceManager from "./ReferenceManager.js";


//Class definition for PromptsManager
class PromptsManager{
  referenceManager = new ReferenceManager();

  // Array to store all the interactions
  interactions = [];
  // Method to show all the interactions
  showAllInteractions() {
    if (this.interactions.length === 0) {
      console.log("No interactions available");
    } else {
      for (let inter of this.interactions) {
        inter.showInteraction();
        console.log(`Type: ${inter.constructor.name}`);

      }
    }
  }
  // method to add a new interaction
  recordPrompt(prompt, response) {
    const p = new Interaction(prompt, response);
    this.interactions.push(p);
  }
  

  //method to add timestamp to existing interactions, default timestamp is: current time

  addTimestampToInteraction(index, timestamp) {
    if (index >= 0 && index < this.interactions.length) {
      const interaction = this.interactions[index];
      if (interaction instanceof TimestampedInteraction) {
        interaction.timestamp = timestamp;
      } else {
        this.interactions[index] = new TimestampedInteraction(interaction.prompt, interaction.response, timestamp);
      }
    } else {
      console.log("Invalid index");
    }
  }
  //method to add a DalleInteraction i.e prompt, response and image url
  addDalleInteraction(prompt, response, imageUrl) {
    const interaction = new DalleInteraction(prompt, response, imageUrl);
    this.interactions.push(interaction);
    console.log(interaction.getType());
  }

  /*Creative addition: method to filter interactions by keyword in prompt or response 
  */
  //method to filter interactions by keyword
  filterInteractions(keyword) {
    return this.interactions.filter(interaction => 
      interaction.prompt.includes(keyword) || interaction.response.includes(keyword)
    );
  }
  //method to remove an interaction
  removeInteraction(index) {
    if (index < 0 || index >= this.interactions.length) {
      console.log("Invalid index");
      return;
    }
    this.interactions.splice(index, 1);
  }
  //method to start the menu (Small Creative Addition)
  startMenu() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on("line", (input) => {
      //switch case to handle different options
      switch(input) {
        case "1":
          rl.question("Enter prompt: ", (prompt) => {
            rl.question("Enter response: ", (response) => {
              this.recordPrompt(prompt, response);
              console.log("Interaction added.");
              console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");
            });
          });
          break;
        case "2":
          rl.question("Enter index of interaction to remove: ", (index) => {
            this.referenceManager.removeInteraction(this.interactions, parseInt(index));
            console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");
          });
          break;
        case "3":
          this.showAllInteractions();
          console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");

          break;
        case "4":
          rl.question("Enter prompt: ", (prompt) => {
            rl.question("Enter response: ", (response) => {
              rl.question("Enter image URL: ", (imageUrl) => {
                this.addDalleInteraction(prompt, response, imageUrl);
                console.log("Dalle interaction added.");
                console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");

              });
            });
          });
          break;
        case "5":
          rl.question("Enter index of interaction to timestamp: ", (index) => {
            rl.question("Enter timestamp (leave blank for current time): ", (timestamp) => {
              timestamp = timestamp ? parseInt(timestamp) : Date.now();
              this.addTimestampToInteraction(parseInt(index), timestamp);
              console.log("Timestamp added to interaction.");
              console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");
            });
          });
          break;
        case "6":
          rl.question("Enter a keyword to search for: ", (keyword) => {
            if (keyword.trim() === "") {
              console.log("Error: No keyword entered");
            } else {
              const filteredInteractions = this.filterInteractions(keyword);
              if (filteredInteractions.length === 0) {
                console.log("No interactions found with the given keyword");
              } else {
                for (let inter of filteredInteractions) {
                  inter.showInteraction();
                }
              }
            }
            console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");
          });
          break;
        case "exit":
          rl.close();
          break;
        default:
          console.log("Invalid option");
      }
    });
    //menu options
    console.log("\n1: Add interaction, \n2: Remove interaction, \n3: Show all interactions, \n4: Add DalleInteraction, \n5: Add timestamp to interaction, \n6: Search by keyword, \nexit: Exit");
  }
}
//creating an instance of PromptsManager
const myPromptManager = new PromptsManager();
//starting the menu
//default inputs to ChatGPT
myPromptManager.recordPrompt("Hello", "Hi");
myPromptManager.startMenu();
export default PromptsManager;
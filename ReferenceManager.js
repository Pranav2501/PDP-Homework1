// ReferenceManager.js
class ReferenceManager {
  removeInteraction(interactions, index) {
    if (index < 0 || index >= interactions.length) {
      console.log("Invalid index");
      return;
    }
    interactions.splice(index, 1);
    console.log("Interaction removed.");
  }
}
  
export default ReferenceManager;
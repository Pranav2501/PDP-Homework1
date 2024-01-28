# Project Name 
Programming Design Paradigms - Homework 1
Name : Pranav Raj Sowrirajan Balaji
Date : 27 January 2024

## Description

This project is a PromptsManager created for recording ChatGPT prompts and responses.<br>
It has the MAIN Class PromptsManager in the filename "PromptsManager.js", which contains all the main functionalities along with a menu-driven approach to accept user inputs. There also other classes such as Interaction which records the prompts and responses from ChatGPT and displays them, TimestampedInteraction which adds timestamps to existing interactions, DalleInteraction adds prompts and responses from ChatGPT which involve images. <br>
This project has various functionalities like:<br>
1.Insert a new record for ChatGPT prompt and response.<br>
2.Delete a record from existing records.<br>
3.Show all available records and their types.<br>
4.Add DalleInteractions : It needs three parameters i.e (prompt,response, Image URL)<br>
5.Add Timestamps to existing records, default is current time & date<br>
6.Search for either a prompt/response by using a keyword that is contained in the prompt/response. ----> (Creative Addition)


## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone [repository url]`
2. Navigate into the project directory: `cd [project directory]`
3. Install the dependencies: `npm install`

## Usage

To run the project, use the following command: `node PromptsManager.js`

## Testing

To test out the code after successfully installing the modules, simply run the program which bring up the user-menu to perform different actions such as insert, delete, search, show. To quit the program simple type `exit` in the terminal.

## Contributing

Contributions are welcome. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
const artworksFile = "./Artworks.csv";

import fs from "fs";
import { parse } from "csv-parse/sync";

const artworksFileContent = fs.readFileSync(artworksFile, "utf8");

const artworks = parse(artworksFileContent, { columns: true }); // columns: true


console.log("23rd position", artworks[22]);


let i = 0;
for (let row of artworks) {
  console.log("row i", i, row.Artist);

  if (i > 10) break;
  i++;
}

let countFrenchFemaleArtists = 0;

for (let row of artworks) {
  if (row.Gender === "(Female)" && row.Nationality === "(French)") {
    countFrenchFemaleArtists++;
  }
}
console.log(
  `There are ${artworks.length} artworks in the collection. Found ${countFrenchFemaleArtists} female artists.`
);

const Counter = require("collections/counter");

// Assuming the artworks array contains the artist objects with 'Nationality' as a key
const artistsByNationality = artworks.reduce((acc, cur) => {
  acc[cur.Nationality] = (acc[cur.Nationality] || 0) + 1;
  return acc;
}, {});

console.log(Counter(artistsByNationality));
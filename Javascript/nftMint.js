// Create a variable to hold your NFTs
let nftCollection = [];

// Create objects for each characteristic with possible values
const characteristics = {
  hats: ["Cap", "Hat", "None"],
  hairs: ["Spiky", "Short", "None"],
  eyes: ["Blue", "Green", "Gray"],
  colors: ["Red", "Yellow", "Gray"],
  accessories: ["Sunglasses", "Necklace", "None"],
  backgrounds: ["City", "Beach", "Mountain"],
  clothings: ["Jacket", "Shirt", "None"],
};

// Helper function to get a random value from an array
function getRandomValue(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Helper function to generate a unique transaction ID
function generateTransactionID() {
  return "tx_" + Date.now() + "_" + Math.floor(Math.random() * 1000000);
}

// This function will create an NFT object with random metadata
// and store it in the variable above
function mintNFT(name, description, owner, supply) {
  for (let i = 0; i < supply; i++) {
    const nft = {
      id: generateTransactionID(),
      name: name,
      description: description,
      owner: owner,
      hat: getRandomValue(characteristics.hats),
      hair: getRandomValue(characteristics.hairs),
      eye: getRandomValue(characteristics.eyes),
      color: getRandomValue(characteristics.colors),
      accessories: getRandomValue(characteristics.accessories),
      background: getRandomValue(characteristics.backgrounds),
      clothing: getRandomValue(characteristics.clothings),
    };
    nftCollection.push(nft);
  }
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT #${index + 1}`);
    console.log(`Transaction ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Owner: ${nft.owner}`);
    console.log(`Hat: ${nft.hat}`);
    console.log(`Hair: ${nft.hair}`);
    console.log(`Eye: ${nft.eye}`);
    console.log(`Color: ${nft.color}`);
    console.log(`Accessories: ${nft.accessories}`);
    console.log(`Background: ${nft.background}`);
    console.log(`Clothing: ${nft.clothing}`);
    console.log("---");
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

mintNFT("CryptoPunk", "A unique digital punk", "Alice", 1);
mintNFT("CryptoPunk", "A unique digital punk", "Soarbh", 1);
mintNFT("CryptoPunk", "A unique digital punk", "Robert", 1);

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);

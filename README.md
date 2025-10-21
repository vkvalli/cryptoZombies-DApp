# CryptoZombies DApp

A decentralized web application inspired by CryptoZombies, built using Solidity, Web3.js, and Ganache.
This project started from the official CryptoZombies starter code and was expanded with improved functionality, a refined user interface, and additional blockchain features.

## Features Implemented

### Core Smart Contracts
  - Zombie Creation:
Each zombie is generated on-chain with a unique DNA based on the creator’s input.
DNA determines the visual appearance of the zombie using the RoboHash API.
	- Leveling System:
Zombies can be leveled up by spending a small amount of ETH.
Level-ups update the zombie stats dynamically in the UI.
	-	Zombie Battle System ⚔️
Added a PvZ (Player vs Zombie) battle feature that allows two zombies to fight.
Battle outcomes are random, but win/loss and cooldown times are recorded on-chain.
	-	Cooldown Mechanics:
Added cooldown timers to prevent continuous attacks, ensuring a fair play system.

### Frontend Enhancements
 - Modernized UI/UX built using HTML, CSS, and jQuery.
	•	Added a sleek blue-gradient interface for a more immersive look.
	•	Replaced text-based zombie visuals with dynamic, DNA-based image generation.
	•	Improved layout responsiveness and overall readability.
	- Account Banner:
      Displays the currenty connected MetaMask account and network (Ganache 1337).
	-	Real-Time Blockchain Feedback:
Transaction status messages (e.g., Creating zombie, Leveling up, Battle success) are displayed in the UI.

Kitty Feeding (In Progress)
	•	Implemented a KittyContract and partial integration for cross-contract interaction.
	•	Test Kitties can be successfully created using the createTestKitties() button.
	•	The feed-on-kitty function is linked but currently returns a JSON-RPC error during execution — this feature is still under development.
Technical Details
	•	Frontend:
	•	HTML / CSS / jQuery
	•	Web3.js v1.2.7
	•	Backend (Smart Contracts):
	•	Solidity v0.4.25
	•	Truffle v5
	•	Ganache CLI (local blockchain network)

  How to Run the Project
 Start Ganache
npx ganache-cli -p 7545 -i 1337 --deterministic
Compile & Deploy Contracts
npx truffle compile
npx truffle migrate --reset --network development
Run Local Web Server
npx http-server -p 8080 -c-1
Open the App

Visit http://127.0.0.1:8080 in your browser.
Connect MetaMask to Ganache (localhost:7545).

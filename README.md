# TelegramMiniApp

The telegram bot simplifies online shopping by offering a streamlined interface to browse products directly within Telegram. Utilizing a simplified version of an internet shop, the bot provides users with convenient access to product information, allowing them to view details and images in a format optimized for Telegram's messaging platform. 

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

## About
The clinet app now is filled with mock data: some cat images and link to the page where that images was generatad, but you can replace it with your own goods from your own shop.

This repository contains the source code for Telegram bot application. The bot is designed to interact with users through the Telegram messaging platform, providing various functionalities.

The repository consists of two main folders:
- `bot`: Contains bot initialization files.
- `client`: Contains the Angular application which can be deployed to Firebase and accessed through the bot.

Additionally, the root directory contains a `Dockerfile` and `Makefile` for easy deployment of the bot.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ricudo/DatingApp.git

2. Navigate to the client directory:

   ```bash
   cd TelegramMiniApp/client

3. Install dependencies:

   ```bash
   npm install

4. Build the app:

   ```bash
   ng build

5. Deploy the app. It has firebase.json for convenient deployment on Firebase, but not limited to this servie.
   
6. Navigate to the bot directory:

   ```bash
   cd ../bot

7. Install dependencies:

   ```bash
   npm install
   
8. Create secrets.ts file with two exported consts:

   ```bash
   export const token = "[YOUR_BOT_UNIQUE_TOCKEN_PROVIDED_BY_TELGRAM]";
   export const webAppUrl = "[DEPLOYED_APP_URL]";

9. Run the bot:

   ```bash
   npm start

10. To not be limited to your machine deploy the bot using Dockerfile in the repo root.
   
## Usage

1. Start the Bot.

2. Browse Products.

3. View Product Details.

4. Go to the product page using the provided link.

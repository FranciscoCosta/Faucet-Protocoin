<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

<h1>ProtoCoin Faucet Frontend</h1>

<h2>Introduction</h2>
<p>This project is a frontend application for a faucet that allows users to claim ProtoCoins (PRT) using their Ethereum wallets via MetaMask. It is built using Next.js and integrates with Web3.js for Ethereum blockchain interactions.</p>

<h2>Technology Used</h2>
<ul>
    <li><strong>Next.js</strong>: A React framework for server-side rendering and static site generation.</li>
    <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
    <li><strong>Web3.js</strong>: A library that allows interaction with the Ethereum blockchain.</li>
    <li><strong>MetaMask</strong>: A cryptocurrency wallet browser extension that connects users to Ethereum dApps.</li>
    <li><strong>React Toastify</strong>: A popular library for notifications in React applications.</li>
    <li><strong>React Google ReCAPTCHA</strong>: A component for implementing Google reCAPTCHA in React applications for security.</li>
</ul>

<h2>Installation</h2>
<p>To run this project locally, follow these steps:</p>
<ol>
    <li>Clone the repository: <code>git clone https://github.com/your-frontend-repo.git</code></li>
    <li>Navigate to the project directory: <code>cd your-frontend-repo</code></li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Create a <code>.env.local</code> file and add the necessary environment variables:</li>
</ol>
<pre><code>
NEXT_PUBLIC_RECAPCHA_SITE_KEY=your-recaptcha-site-key
</code></pre>

<h2>Usage</h2>
<p>To start the development server:</p>
<pre><code>npm run dev</code></pre>
<p>The application will be running on <code>http://localhost:3000</code>.</p>

<h2>Features</h2>
<ul>
    <li><strong>Mint ProtoCoins</strong>: Users can connect their MetaMask wallets and mint ProtoCoins.</li>
    <li><strong>Transaction Viewing</strong>: View transaction details on Binance Smart Chain testnet.</li>
    <li><strong>Rate Limiting</strong>: Implements daily rate limits using ReCAPTCHA for security.</li>
</ul>

<h2>Code Overview</h2>
<p>The main functionality revolves around:</p>
<ul>
    <li><strong>Connecting to MetaMask</strong>: Users authenticate and interact with their MetaMask wallets to mint ProtoCoins.</li>
    <li><strong>Handling Minting</strong>: Calls the backend API to mint ProtoCoins based on user requests.</li>
    <li><strong>Transaction Monitoring</strong>: Displays transaction status and links to Binance Smart Chain testnet explorer.</li>
</ul>

<h2>References</h2>
<p>Backend project: <a href="https://github.com/FranciscoCosta/Backend-ProtoCoin">https://github.com/FranciscoCosta/Backend-ProtoCoin</a></p>
<p>Token project: <a href="https://github.com/FranciscoCosta/Faucet-Protocoin">https://github.com/FranciscoCosta/Faucet-Protocoin</a></p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

</body>
</html>

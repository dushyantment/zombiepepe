import Head from 'next/head'
import Image from "next/image";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import SmartObject from "../assest/img/header-zombie-2.png";
import ReferW1 from "../assest/img/twitter.webp";
import ReferW2 from "../assest/img/telgrrgrgrgr.webp";
import ReferW3 from "../assest/img/etherscan.webp";
import ReferW4 from "../assest/img/dextools.webp";
import ReferW5 from "../assest/img/cm.webp";
import ReferW6 from "../assest/img/uniswap.webp";
import websitess1 from "../assest/img/1.png";
import websitess2 from "../assest/img/2.webp";
import websitess3 from "../assest/img/3.webp";
import websitess4 from "../assest/img/4.webp";
import websitess5 from "../assest/img/5.webp";
import websitess6 from "../assest/img/6.webp";
import websitess7 from "../assest/img/7.webp";
import websitess8 from "../assest/img/8.webp";
import websitess9 from "../assest/img/9.webp";
import AboutImg from "../assest/img/about.png";
import Mint1 from "../assest/img/mint-01.png";
import Mint2 from "../assest/img/mint-02.png";
import Mint3 from "../assest/img/mint-03.png";
import TokenImg from "../assest/img/token.png";
import Fsocail1 from "../assest/img/ftwtttt.webp";
import Fsocail2 from "../assest/img/ftele.webp";
import Fsocail3 from "../assest/img/fdiscord.webp";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Zombiepepe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='header-bg'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-white">
          <div className="container">
            <a className="navbar-brand text-gradient" href="#">Zombiepepe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link text-white active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">HOW TO BUY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">TOKENOMICS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">ROADMAP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white btn btn-outline-light" href="#">Buy Now</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='header-block'>
          <div className='container'>
            <div className='row align-items-center text-white'>
              <div className='col-lg-6'>
                <h1 className='text-gradient'>@Zombiepepe</h1>
                <p>Zombiepepe has emerged as the most popular memecoin, surpassing even the beloved dog-themed coins. With its hilarious and relatable memes, Zombiepepe has captured the attention of meme enthusiasts and crypto investors alike. </p>
                <div className='refer-link d-flex justify-content-between'>
                  <a href='#'>
                    <Image className="" src={ReferW1} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <Image className="" src={ReferW2} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <Image className="" src={ReferW3} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <Image className="" src={ReferW4} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <Image className="" src={ReferW5} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <Image className="" src={ReferW6} alt={""}></Image>
                  </a>
                </div>
                <div className='websites d-flex flex-wrap flex-row justify-content-between mt-5'>
                  <a href='#'>
                    <p>Okx</p>
                    <Image className="" src={websitess1} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>Binance</p>
                    <Image className="" src={websitess2} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>kukoin</p>
                    <Image className="" src={websitess3} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>HUOBI</p>
                    <Image className="" src={websitess4} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>bybit</p>
                    <Image className="" src={websitess5} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>crypto.com</p>
                    <Image className="" src={websitess6} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>bitget</p>
                    <Image className="" src={websitess7} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>mexc</p>  
                    <Image className="" src={websitess8} alt={""}></Image>
                  </a>
                  <a href='#'>
                    <p>bingx japan</p>
                    <Image className="" src={websitess9} alt={""}></Image>
                  </a>
                </div>
              </div>
              <div className='col-lg-6'>
                <Image className="" src={SmartObject} alt={""}></Image>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='about pb-0'>
        <div className='container'>
          <div className='row align-items-center row-reverse'>
            <div className='col-lg-7'>
              <Image className="" src={AboutImg} alt={""}></Image>
            </div>
            <div className='col-lg-5'>
              <h1 className='text-gradient'>About Us</h1>
              <p>Tired of the endless stream of derivative Inu coins that everyone seems to be trading like hot potatoes, Pepe has decided to take matters into his own hands. As the most recognizable meme in the world, he's determined to become the king of the memecoin world.</p>
              <p>$Zombiepepe is here to revolutionize memecoins, with no presale, zero taxes, and a commitment to being a coin for the people, forever. With a stealth launch, LP burnt, and contract renounced, $PEPE is fueled by pure memetic power. Let Pepe show you the way to memecoin greatness!</p>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <h2>420,000,000...</h2>
                    <p>Supply</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <h2>4 Buy 4 Sell</h2>
                    <p>Tax </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <h2>3%</h2>
                    <p>Marketing</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <h2>1%</h2>
                    <p>Lp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='howtobuy'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-lg-12 text-center'>
              <h1 className='text-gradient'>HOW TO BUY</h1>
            </div>
          </div>
          <div className='row'>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <Image className="" src={Mint1} alt={""}></Image>
                    <h2>Create a Wallet</h2>
                    <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <Image className="" src={Mint2} alt={""}></Image>
                    <h2>Get Some ETH</h2>
                    <p>have ETH in your wallet to switch to $Zombiepepe. If you do not have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <Image className="" src={Mint3} alt={""}></Image>
                    <h2>Go to Uniswap</h2>
                    <p>connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $Zombiepepe token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='a-number'>
                    <Image className="" src={Mint3} alt={""}></Image>
                    <h2>Switch ETH for $Zombiepepe</h2>
                    <p>switch ETH for $Zombiepepe. We have ZERO taxes so you do not need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
                  </div>
                </div>
              </div>
        </div>
      </section>
      <section className='tokenomics pb-0'>
        <div className='container'>
          <div className='row mb-5 align-items-center'>
            <div className='col-lg-12 text-center'>
              <h1 className='text-gradient'>TOKENOMICS</h1>
            </div>
          </div>
          <div className='row align-items-center row-reverse'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='a-number'>
                    <h1>420,000,000,000</h1>
                    <p>Supply</p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='a-number'>
                    <h2>4 Buy/Sell</h2>
                    <p>Tax </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='a-number'>
                    <h2>3%</h2>
                    <p>Marketing</p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='a-number'>
                    <h2>1%</h2>
                    <p>Lp</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='a-number'>
                    <p>No Taxes, No Bullshit. It is that simple. </p>
                    <p>3.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “Zombiepepe.eth”</p>
                  </div>
                </div>
              </div> 
            </div>
            <div className='col-lg-6 text-center'>
              <Image className="" src={TokenImg} alt={""}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h1 className='text-gradient'>
                Roadmap
              </h1>
              <p>All jokes aside, here is a rough sketch of $Zombiepepe path ahead. We dont was not to give everything away on day 1, Expect surprises along the way ;</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='a-number'>
                <h2>Phase 1</h2>
                <ul>
                  <li>Socials Creation</li>
                  <li>Fairlaunch on Pinksale</li>
                  <li>CMC & CG</li>
                  <li>Global Marketing Campaign</li>
                  <li>Social Media Ads Campaign</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='a-number'>
                <h2>Phase 2</h2>
                <ul>
                  <li>Twitter Campaign Trending</li>
                  <li>Rare Zombiepepe Nft Listings</li>
                  <li>Beta phase in the platform, with staking, yield farming, DAOgovernance</li>
                  <li>Copytrader Statistical Analysis</li>
                  <li>Test phase of the Dapp</li>
                  <li>Cex Listings </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='a-number'>
                <h2>Phase 3</h2>
                <ul>
                  <li>Press Releases & Billboard </li>
                  <li>Partnerships with VC's</li>
                  <li>LunarCrush Listing</li>
                  <li>T1 Cex Listing </li>
                  <li>Reach 10,000 Holders </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='a-number'>
                <h2>Phase 4</h2>
                <ul>
                  <li>Sponsorship and Partnership Worldwide</li>
                  <li>Zombie-Pepe  Metaverse development</li>
                  <li>p2e Game development </li>
                  <li>Paid Marketing & Media Campaign</li>
                  <li>All features released</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h1 className='text-gradient'>Contact $Zombiepepe</h1>
            </div>
          </div>
          <div className='row justify-content-center my-5'>
            <div className='col-lg-4 d-flex justify-content-around'>
              <a href='#'>
                <Image className="" src={Fsocail1} alt={""}></Image>
              </a>
              <a href='#'>
                <Image className="" src={Fsocail2} alt={""}></Image>
              </a>
              <a href='#'>
                <Image className="" src={Fsocail3} alt={""}></Image>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <p>$Zombiepepe coin has no association with Matt Furie or his creation Zombiepepe the Frog. This token is simply paying homage to a meme we all love and recognize.</p>
              <p>$Zombiepepe is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
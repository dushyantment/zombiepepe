import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SmartObject from "../../assest/img/header-zombie-2.png";
import ReferW1 from "../../assest/img/twitter.webp";
import ReferW2 from "../../assest/img/telgrrgrgrgr.webp";
import ReferW3 from "../../assest/img/etherscan.webp";
import ReferW4 from "../../assest/img/dextools.webp";
import ReferW5 from "../../assest/img/cm.webp";
import ReferW6 from "../../assest/img/uniswap.webp";
import websitess1 from "../../assest/img/cmc.png";
import websitess2 from "../../assest/img/p2.png";
import websitess3 from "../../assest/img/p3.png";
import websitess4 from "../../assest/img/p4.png";
import websitess5 from "../../assest/img/p8.png";
import websitess6 from "../../assest/img/p9.png";
import websitess7 from "../../assest/img/p10.png";
import websitess8 from "../../assest/img/ps.png";
import websitess9 from "../../assest/img/9.webp";
import AboutImg from "../../assest/img/about.png";
import Mint1 from "../../assest/img/mint-01.png";
import Mint2 from "../../assest/img/mint-02.png";
import Mint3 from "../../assest/img/mint-03.png";
import TokenImg from "../../assest/img/token.png";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="header-bg p-y-100">
        <div className="header-block">
          <div className="container">
            <div className="row align-items-center text-white">
              <div className="col-lg-6">
                <h1 className="text-gradient">Zombiepepe</h1>
                <p>
                  <span className="fw-bold">Contract: </span>{" "}
                  0xD88AB21e4Ff6B97aEfAB22612032152c9A8Ff94F
                </p>
                <p>
                  Zombiepepe has emerged as the most popular memecoin,
                  surpassing even the beloved dog-themed coins. With its
                  hilarious and relatable memes, Zombiepepe has captured the
                  attention of meme enthusiasts and crypto investors alike.{" "}
                </p>
                <div className="refer-link d-flex justify-content-between">
                  <Link href="https://twitter.com/ZombiePepe_ERC" target="_blank">
                    <Image className="" src={ReferW1} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="" src={ReferW2} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="" src={ReferW3} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="" src={ReferW4} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="" src={ReferW5} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="" src={ReferW6} alt={""}></Image>
                  </Link>
                </div>
                <div className="websites d-flex flex-wrap flex-row justify-content-start gap-2 mt-5">
                  <Link href="/">
                    <Image className="orks" src={websitess1} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="orks" src={websitess2} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="orks" src={websitess3} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="orks" src={websitess4} alt={""}></Image>
                  </Link>

                  <Link href="/">
                    <Image className="orks" src={websitess6} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="orks" src={websitess7} alt={""}></Image>
                  </Link>
                  {/*  <Link href="/">
                    <Image className="orks" src={websitess5} alt={""}></Image>
                  </Link>
                  <Link href="/">
                    <Image className="orks" src={websitess8} alt={""}></Image>
                  </Link>*/}
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <Image className="" src={SmartObject} alt={""}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about pb-0 p-y-100" id="about">
        <div className="container">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-7">
              <Image className="" src={AboutImg} alt={""}></Image>
            </div>
            <div className="col-lg-5">
              <h1 className="text-gradient">About Us</h1>
              <p>
                Tired of the endless stream of derivative Inu coins that
                everyone seems to be trading like hot potatoes, Pepe has decided
                to take matters into his own hands. As the most recognizable
                meme in the world, he is determined to become the king of the
                memecoin world.
              </p>
              <p>
                Zombiepepe is here to revolutionize memecoins, with no presale,
                zero taxes, and a commitment to being a coin for the people,
                forever. With a stealth launch, LP burnt, and contract
                renounced, Zombiepepe is fueled by pure memetic power. Let Pepe
                show you the way to memecoin greatness!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="howtobuy p-y-100" id="how-to-buy">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="text-gradient">HOW TO BUY</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="a-number">
                <Image className="" src={Mint1} alt={""}></Image>
                <h2>Create a Wallet</h2>
                <p>
                  download metamask or your wallet of choice from the app store
                  or google play store for free. Desktop users, download the
                  google chrome extension by going to metamask.io.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="a-number">
                <Image className="" src={Mint2} alt={""}></Image>
                <h2>Get Some ETH</h2>
                <p>
                  have ETH in your wallet to switch to Zombiepepe. If you do not
                  have any ETH, you can buy directly on metamask, transfer from
                  another wallet, or buy on another exchange and send it to your
                  wallet.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="a-number">
                <Image className="" src={Mint3} alt={""}></Image>
                <h2>Go to Uniswap</h2>
                <p>
                  Go to app.uniswap.org in google chrome or on the browser
                  inside your Metamask app. Connect your wallet. Paste the
                  Zombiepepe token address into pancakeswap, select Pepe, and
                  confirm. When Metamask prompts you for a wallet signature,
                  sign.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="a-number">
                <Image className="" src={Mint3} alt={""}></Image>
                <h2>Switch ETH for Zombiepepe</h2>
                <p>
                  switch ETH for Zombiepepe. We have ZERO taxes so you do not
                  need to worry about buying with a specific slippage, although
                  you may need to use slippage during times of market
                  volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tokenomics pb-0 p-y-100" id="tokenomics">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-12 text-center">
              <h1 className="text-gradient">TOKENOMICS</h1>
            </div>
          </div>
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="a-number">
                    <h1 className="fonts-tiltes">420,000,000,000</h1>
                    <p>Supply</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="a-number">
                    <h2>4 Buy/Sell</h2>
                    <p>Tax </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="a-number">
                    <h2>3%</h2>
                    <p>Marketing</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="a-number">
                    <h2>1%</h2>
                    <p>Lp</p>
                  </div>
                </div>
                {/*}  <div className="col-lg-12">
                  <div className="a-number">
                    <p>No Taxes, No Bullshit. It is that simple. </p>
                    <p>
                      3.1% of the tokens were sent to the liquidity pool, LP
                      tokens were burnt, and contract is renounced. The
                      remaining 6.9% of the supply is being held in a multi-sig
                      wallet only to be used as tokens for future centralized
                      exchange listings, bridges, and liquidity pools. This
                      wallet is easily trackable with the ENS name
                      Zombiepepe.ETH
                    </p>
                  </div>
                </div>*/}
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <Image className="" src={TokenImg} alt={""}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap p-y-100" id="roadmap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-gradient">Roadmap</h1>
              <p>
                All jokes aside, here is a rough sketch of Zombiepepe path
                ahead. We dont was not to give everything away on day 1, Expect
                surprises along the way ;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="a-number">
                <h2>Phase 1</h2>
                <ul>
                  <li>Socials Creation</li>
                  <li>Stealth Launch</li>
                  <li>CMC and CG</li>
                  <li>Global Marketing Campaign</li>
                  <li>Social Media Ads Campaign</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="a-number">
                <h2>Phase 2</h2>
                <ul>
                  <li>Twitter Campaign Trending</li>
                  <li>Rare Zombiepepe Nft Listings</li>
                  <li>
                    Beta phase in the platform, with staking, yield farming,
                    DAOgovernance
                  </li>
                  <li>Copytrader Statistical Analysis</li>
                  <li>Test phase of the Dapp</li>
                  <li>Cex Listings </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="a-number">
                <h2>Phase 3</h2>
                <ul>
                  <li>Press Releases and Billboard </li>
                  <li>Partnerships with VC</li>
                  <li>LunarCrush Listing</li>
                  <li>T1 Cex Listing </li>
                  <li>Reach 10,000 Holders </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="a-number">
                <h2>Phase 4</h2>
                <ul>
                  <li>Sponsorship and Partnership Worldwide</li>
                  <li>Zombie-Pepe Metaverse development</li>
                  <li>p2e Game development </li>
                  <li>Paid Marketing and Media Campaign</li>
                  <li>All features released</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

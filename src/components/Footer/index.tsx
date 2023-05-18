import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Fsocail1 from "../../assest/img/ftwtttt.webp";
import Fsocail2 from "../../assest/img/ftele.webp";
import Fsocail3 from "../../assest/img/fdiscord.webp";

import Logo from "../../assest/img/logo.png";
import Link from "next/link";
export default function Footer() {
  return (
    <section>
      <footer className="p-y-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="text-gradient">Contact Zombiepepe</h1>
            </div>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-4 d-flex justify-content-evenly">
              <a href="https://twitter.com/ZombiePepe_ERC">
                <Image className="" src={Fsocail1} alt={""}></Image>
              </a>
              <a href="https://t.me/ZombiePepePortal">
                <Image className="" src={Fsocail2} alt={""}></Image>
              </a>
              {/*<a href="#">
                <Image className="" src={Fsocail3} alt={""}></Image>
              </a>*/}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                Zombiepepe coin has no association with Matt Furie or his
                creation Zombiepepe the Frog. This token is simply paying homage
                to a meme we all love and recognize.
              </p>
              <p>
                Zombiepepe is a meme coin with no intrinsic value or expectation
                of financial return. There is no formal team or roadmap. the
                coin is completely useless and for entertainment purposes only.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

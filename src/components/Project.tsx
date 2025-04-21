import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import dxsaleLanding from '../assets/images/dxsaleLanding.png';
import photonMessaging from '../assets/images/photonMessaging.jpg';
import photonBridge from '../assets/images/photonBridge.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects I'm proud of</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://photonbridge.io/" target="_blank" rel="noreferrer"><img src={photonBridge}
                                                                                         className="zoom"
                                                                                         alt="thumbnail" width="100%"/></a>
                <a href="https://photonbridge.io/" target="_blank" rel="noreferrer"><h2>Photon Bridge</h2></a>
                <p>
                    Designed and optimized a high-load cross-chain bridge connecting EVM, Solana and TON networks.<br/>
                    Provided atomic and secure asset transfers between networks with minimal latency.<br/>
                    Integration of Zero Knowledge mechanics to improve privacy and throughput.
                </p>
                <p >
                    Technologies: React, Typescript, Redux, Solidity.
                </p>
            </div>
            <div className="project">
                <a href="https://hub.entangle.fi/" target="_blank" rel="noreferrer"><img src={photonMessaging}
                                                                                         className="zoom"
                                                                                         alt="thumbnail" width="100%"/></a>
                <a href="https://hub.entangle.fi/" target="_blank" rel="noreferrer"><h2>Photon Messaging</h2></a>
                <p>Designed and implemented a cross-chain messaging layer based on Photon's DeFi protocol.
                    Support for sending/receiving metadata between networks without central intermediaries.
                    Implemented signed offchain inbox with on-chain verification of messages.</p>
                <p>
                    Technologies: React, Typescript, Redux, Solidity.
                </p>
            </div>
            <div className="project">
                <a href="https://www.dx.app/" target="_blank" rel="noreferrer"><img src={dxsaleLanding} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.dx.app/" target="_blank" rel="noreferrer"><h2>DxSale</h2></a>
                <p>Developed and launched a decentralized platform for IDOs and token sales.
                    Integration with EVM-compatible networks, custom tokenization and vesting logic.
                    UI/UX development, real-time analytics and whitelisting/anti-bot security.
                   </p>
                <p>Technologies: Typescript, Solidity, React, Next.js, Web3.js, Ethers.js</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
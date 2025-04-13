import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import {faCode, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Web3 Tools",
    "Solidity",
    "EVM",
    "SQL",
    "PostgreSQL",
    "Node.js",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>My Expertise</h3>
                    <p>I have built a diverse array of Web3 applications from scratch using modern technologies. From smart contract architecture to full-stack dApps, my focus is on robust, scalable, and secure systems. I bring hands-on experience with Solidity, EVM chains, zk rollups, and decentralized storage, ensuring real-world readiness from idea to deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPeopleGroup} size="3x"/>
                    <h3>My team</h3>
                    <p>We are a focused, battle-tested crew of frontend and backend engineers with deep experience in blockchain development. Our team blends strong UI/UX skills with low-level smart contract logic. Together, we’ve shipped multiple production-grade apps, protocols, and internal tools. We operate fast, think long-term, and always build with security and quality in mind.</p>

                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>What We Do</h3>
                    <p>We help startups, DAOs, and enterprises launch secure and polished Web3 products. From MVP to full-featured systems, we cover smart contract development, full-stack dApps, audits, internal dashboards, and infrastructure setup. Whether it’s DeFi, NFTs, on-chain games, or custom tooling — we deliver clean code and real impact.</p>

                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
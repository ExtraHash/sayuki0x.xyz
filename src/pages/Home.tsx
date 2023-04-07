import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar } from "../components/Navbar";
import { themeState } from "../state/theme";
import { useRecoilValue } from "recoil";
import { ProjectCard } from "../components/ProjectCard";

import faceBlack from "../assets/alienface-black.png";
import faceWhite from "../assets/alienface-white.png";
import sudoLogo from "../assets/sudologo.svg";
import phaseLogo from "../assets/phaselogo.svg";
import alignLogo from "../assets/alignlogo.svg";
import incineratorLogo from "../assets/incineratorlogo.svg";
import frenlyLogo from "../assets/frenlyfaceslogo.png";

import solSlugsLogo from "../assets/solslugslogo.png";
import { useEffect, useState } from "react";

export function Home() {
    const recoilTheme = useRecoilValue(themeState);
    const [slugCount, setSlugCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchSlugData = async () => {
            const res = await fetch(`https://letsalllovelain.com/slugs/`);
            if (res.status === 200) {
                const data = await res.json();
                setSlugCount(data.slugStats.slugCount);
            } else {
                console.log(res.status);
            }
        };

        fetchSlugData();
    }, []);

    return (
        <>
            <Navbar
                RightElement={
                    <div className="hidden">
                        <ConnectButton showBalance={false} />
                    </div>
                }
            />

            <div>
                <img
                    className="mx-auto"
                    width={200}
                    src={recoilTheme === "light" ? faceBlack : faceWhite}
                    alt="milady alien face"
                />
                <p className="text-2xl mx-auto text-center dark:text-white">
                    Hi, I'm <strong>Sayuki0x</strong>
                </p>
            </div>

            <div className="container mx-auto px-4 bg-white dark:bg-black dark:text-white">
                <div>
                    <p className="mt-5">
                        I'm a software engineer, artist, and open source
                        extremist. I am chronically online, spending most of my
                        time in the digital world. I've been in cryptocurrency
                        development since 2017. More recently I have gotten
                        involved in the NFT space and am currently working at
                        Sudorandom Labs contributing to Sudoswap.
                    </p>

                    <ul className="mt-5">
                        <li>
                            <a
                                className="underline text-pink-400 font-bold"
                                href="https://twitter.com/sayuki0x"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-pink-400 font-bold"
                                href="https://discord.com/users/388037798772473859"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Discord
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-pink-400 font-bold"
                                href="https://github.com/Sayuki0x"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-pink-400 font-bold"
                                href="https://soundcloud.com/Sayuki0x"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SoundCloud
                            </a>
                        </li>
                    </ul>

                    <p className="mt-5 text-xl font-bold">
                        Current & Past Projects
                    </p>

                    <div
                        className={`mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
                    >
                        <ProjectCard
                            name="Sudoswap"
                            url="https://sudoswap.xyz/"
                            backgroundColor="#b5b9ff"
                            externalLinkColor="#000"
                            image={sudoLogo}
                            dates="03/2023 - Now"
                            description="A fully onchain NFT AMM protocol."
                        />
                        <ProjectCard
                            name="Sol Incinerator"
                            url="https://www.sol-incinerator.com/"
                            backgroundColor="#000"
                            externalLinkColor="#FFF"
                            image={incineratorLogo}
                            dates={"10/2021 - Now"}
                            description="Burn any unwanted NFTs or tokens and reclaim the rent."
                        />
                        <ProjectCard
                            name="Phase Protocol"
                            url="https://www.phaseprotocol.io/"
                            backgroundColor="#590c34"
                            externalLinkColor="#FFF"
                            image={phaseLogo}
                            dates={"02/2022 - 03/2023"}
                            description="A mint security protocol that funds NFT projects in phases as they deliver."
                        />
                        <ProjectCard
                            name="Align"
                            url="https://www.phaseprotocol.io/"
                            backgroundColor="#347473"
                            externalLinkColor="#FFF"
                            image={alignLogo}
                            dates={"02/2022 - 03/2023"}
                            description="Allows NFT community members input into project direction via DAO governance."
                        />
                        <ProjectCard
                            name="Sol Slugs"
                            url="https://www.solslugs.com/"
                            backgroundColor="#000"
                            externalLinkColor="#FFF"
                            image={solSlugsLogo}
                            dates={"Minted 10/2021"}
                            description={`A deflationary NFT collection of ${
                                slugCount || 10000
                            } slugs on the Solana blockchain.`}
                        />
                        <ProjectCard
                            name="Frenly Faces"
                            url="https://www.frenlyfaces.xyz/"
                            backgroundColor="#FFF"
                            externalLinkColor="#000"
                            image={frenlyLogo}
                            dates={"Minted 02/2023"}
                            description={`A 1000 piece hand drawn NFT collection on Canto blockchain.`}
                        />
                    </div>
                </div>
                <div className="mt-10 mb-5">
                    <p className="text-xs">
                        with <span className="text-pink-400">❤️</span> from
                        Sayuki0x
                    </p>
                </div>
            </div>
        </>
    );
}

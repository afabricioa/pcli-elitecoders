import CardMore from "./CardMore";

export default function Main(){
    return (
        <main>
            <section className="mx-auto h-auto flex flex-col justify-center items-center max-w-[1731px] top-[100%] ">
                <div className="relative inline-block">
                    <img src="/first-image.png" alt="man on top of a mountain" className="block w-auto h-auto z-0"/>
                    <div className="absolute w-auto text-[3.5vw] top-[10%] left-[25%] 
                                    translate-y-1/4 translate-x-1/4 whitespace-pre text-[#3E4649]">
                        Enjoy the freedom of <br/>
                        vision restored.
                    </div>
                    <div className="absolute w-auto text-[2vw] top-[28%] left-[41%] 
                                    translate-y-1/4 translate-x-1/4 whitespace-pre text-[#3E4649]">
                        Having performed over 700,000 <br/>
                        micro surgeries, PCLI is one of North America’s <br/>
                        most trusted eyecare facilities.
                    </div>
                </div>
                <div className="cards">
                    <div>
                        <CardMore
                            title={"Cataract Correction"}
                            description={"See how we can reclaim your good vision."}
                            className="card"
                        />
                    </div>
                    <div className="card-above">
                        <CardMore
                            title={"Laser Vision Correction"}
                            description={"Discover how LASIK can change your life forever."}
                            className="card"
                        />
                    </div>
                    <div>
                        <CardMore
                            title={"LASIK Alternatives"}
                            description={"Explore other options if you are not a LASIK candidate."}
                            className="card"
                        />
                    </div>
                    <div className="card-above">
                        <CardMore
                            title={"Clear Lens Exchange"}
                            description={"See how tiny lens implants can provide visual freedom."}
                            className="card"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
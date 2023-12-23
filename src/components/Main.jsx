import CardMore from "./CardMore";
import CardPCLI from "./CardPCLI";

export default function Main(){
    return (
        <main>
            <section className="mx-auto h-auto flex flex-col justify-center items-center max-w-[1731px] top-[100%] z-[50]">
                <div id="mountain" className="relative inline-block">
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
                <div id="cardsLearnMore" className="cards">
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
                <div id="whyPCLI" className="pt-[10vw] flex flex-col justify-center items-center max-w-[1731px]">
                    <div>
                        <h2 className="text-[#00ABC8] text-[7vw] font-[400] leading-[64px] md:text-[52px]">Why choose PCLI?</h2>
                    </div>
                    <div className="cardsPCLI">
                        <div>
                            <CardPCLI
                                title={"EXPERTISE"}
                                description={"Our highly skilled specialists have \n"+
                                "a track record of success. They \n" +
                                "draw on the combined experience \n" +
                                "o more than 100,000 LASIK \n" +
                                "procedures and 500,000 cataract-\n" +
                                "related surgeries."}
                            />
                        </div>
                        <div>
                            <CardPCLI
                                title={"TRUSTED"}
                                description={"97% of our patients say they are \n"+
                                "very likely to recommend us to \n" + 
                                "friends and colleagues."}
                            />
                        </div>
                        <div>
                            <CardPCLI
                                title={"NFL PLAYERS"}
                                description={"Numerous NFL players, spouses, \n" + 
                                "and coaches have turned to PCLI \n" + 
                                "surgeons for LASIK vision \n" + 
                                "correction"}
                            />
                        </div>
                        <div>
                            <CardPCLI
                                title={"REPUTATION"}
                                description={"More than 1,700 healthcare \n" + 
                                "provides refer patients to us for \n" +
                                "vision correction surgery."}
                            />
                        </div>
                        <div>
                            <CardPCLI
                                title={"OUR CARE"}
                                description={"When you entrust the care of your \n" + 
                                "vision to PCLI, our team of experts \n" + 
                                "concentrates their skills on giving \n" + 
                                "you the best outcome."}
                            />
                        </div>
                    </div>
                    <img src="/second-image.png" alt="woman making a two with her hand" className="mt-[-25px] sm:mt-[-100px] z-0"/>
                </div>
                <div className="top-[100%] flex flex-col justify-center items-center align-center bg-[#252525] min-h-[350px] w-[100%] w-max-[1731px]">
                    <h2 className="text-[#00ABC8] text-[44px] font-[400] lg:text-[55px]">Grateful Patients</h2>
                    <div className="grateful">
                        <div className="quote">
                            <div className="text-[15px] text-white font-[400]">
                                {"''Lorem ipsum dolor sit amet, consectetur \n"+ 
                                "adipiscing elit. Quisque sed elit sit amet \n"+ 
                                "tellus."}
                            </div>
                            <p className="text-[13px] text-white font-[600]">Location, HR</p>
                        </div>
                        <div className="quote">
                            <div className="text-[15px] text-white font-[400]">
                                {"''Lorem ipsum dolor sit aamet, consectetur \n"+ 
                                "adipiscing elit. Quisque semet, consectetur \n"+ 
                                "adipiscing elit. Quisque sed elit sit amet \n"+
                                "tellus."}
                            </div>
                            <p className="text-[13px] text-white font-[600]">Location, HR</p>
                        </div>
                        <div className="quote">
                            <div className="text-[15px] text-white font-[400]">
                                {"''Lorem ipsum dolor sit amet, consectetur \n"+ 
                                "adipiscing elit. Quisque sed elit sit amet \n"+ 
                                "tellus."}
                            </div>
                            <p className="text-[13px] text-white font-[600]">Location, HR</p>
                        </div>
                    </div>
                </div>
                <div id="pcli" className="relative inline-block">
                    <img src="/third-image.png" alt="pacific cataract and laser institute" className="block w-auto h-auto z-0"/>
                    <div className="absolute w-auto text-[3.5vw] top-0 left-[5%] 
                                    translate-y-1/4 translate-x-1/4 whitespace-pre text-[#252525]">
                        Let us help you see clearly.
                    </div>
                    <div className="absolute text-[1.2vw] top-[8%] left-[7%] 
                                    translate-y-1/4 translate-x-1/4 whitespace-pre text-[#252525]">
                        {"From small-town roots in western Washington, PCLI has become one of the nation’s most \n"+
                        "trusted eye surgery providers. With 17 locations in 6 states, we specialize in cataract \n"+
                        "surgery and LASIK laser vision correction. But we haven’t lost our small-town care."}
                        <p>We look forward to serving you.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
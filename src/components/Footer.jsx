import { Button } from "@mui/material";

export default function Footer(){
    return (
        <footer>
            <section className="mx-auto h-auto flex flex-row justify-center items-center min-h-[300px] max-w-[1731px] top-[100%] bg-[#252525] p-10">
                <div className="w-[45%] h-[250px] flex justify-between px-6 border-r-[1px] border-white">
                    <div>
                        <h2 className="logoFooter">VISION <span className="logoFooterEaves">by</span></h2>
                        <img src="/logo-footer.png" alt="logo on footer" width={170}/>
                        <h2 className="worldClass">World-class care</h2>
                    </div>
                    <div className="flex flex-col gap-y-2 text-white text-[18px] font-[400]">
                        <h5>About Us</h5>
                        <h5>Cataract Correction</h5>
                        <h5>Laser Vision Correction</h5>
                        <h5>LASIK Alternatives</h5>
                        <h5>Resources</h5>
                        <h5>Giving Back</h5>
                    </div>
                </div>
                <div className="w-[55%] h-[250px] flex justify-between px-4">
                    <div className="flex flex-col text-white ">
                        <h5 className="text-[18px] font-[400]">Locations</h5>
                        <div className="flex flex-row gap-x-6">
                            <div>
                                <div>
                                    <h5 className="text-[16px] font-[700]">Alaska</h5>
                                    <h5 className="text-[14px] font-[400] pl-2">Anchoragege</h5>
                                    <h5 className="text-[16px] font-[700]">Idaho</h5>
                                    <h5 className="text-[14px] font-[400] pl-2">Bowis</h5>
                                    <h5 className="text-[14px] font-[400] pl-2">Lewiston</h5>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[16px] font-[700]">Montana</h5>
                                <h5 className="text-[14px] font-[400] pl-2">Great Falls</h5>
                                <h5 className="text-[16px] font-[700]">New Mexico</h5>
                                <h5 className="text-[14px] font-[400] pl-2">Albuquerque</h5>
                                <h5 className="text-[16px] font-[700]">Oregon</h5>
                                <h5 className="text-[14px] font-[400] pl-2">Portland</h5>
                                <h5 className="text-[14px] font-[400] pl-2">Tualatin</h5>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-[16px] font-[700]">Whashigton</h5>
                                <div className="flex flex-row">
                                    <div>
                                        <h5 className="text-[14px] font-[400] pl-2">Bellevue</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Bellingham</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Chehails</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Kenenewick</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Olympia</h5>
                                    </div>
                                    <div>
                                        <h5 className="text-[14px] font-[400] pl-2">Silverdale</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Spokane</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Tacoma</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Vancouver</h5>
                                        <h5 className="text-[14px] font-[400] pl-2">Yakima</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-end gap-y-2 text-white text-[18px] text-end font-[400]">
                        <Button 
                            variant="contained" 
                            color="secondary"
                            sx={{color: 'white', width: '122px', fontSize: '12px'}}
                        >Contact Us</Button>
                        <h5>Call 800-224-7254</h5>
                        <h5>In Alaska, 800-557-7254</h5>
                    </div>
                </div>
            </section>
        </footer>
    )
}
import React, {useState} from "react";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [servicesVisible, setServicesVisible] = useState(false);

    const handleMouseEnter = () => {
        setServicesVisible(true);
    };
    
      const handleMouseLeave = () => {
        setServicesVisible(false);
    };

    const [resourcesVisible, setResourcesVisible] = useState(false);

    const handleMouseEnterResources = () => {
        setResourcesVisible(true);
    };
    
      const handleMouseLeaveResources = () => {
        setResourcesVisible(false);
    };

    const [locationsVisible, setLocationsVisible] = useState(false);

    const handleMouseEnterLocations = () => {
        setLocationsVisible(true);
    };
    
      const handleMouseLeaveLocations = () => {
        setLocationsVisible(false);
    };

    return (
        <header>
            <section className="mx-auto flex flex-col justify-center md:h-[131px] max-w-[1731px]">
                <nav className="flex items-center justify-between pl-10 pr-10 pt-[2vw] text-bold font-[600] z-[100] md:pl-0 md:pr-2">
                    <div className="w-[90%] flex items-center justify-center flex-shrink-1 md:ml-1 md:justify-start md:w-[25%] lg:w-[30%]">
                        <img src="/logo-top.png" alt="logo--pcli" className="ml-2 h-auto w-[300px] m:w-[200px] lg:w-full 2xl:max-w-full min-w-0"/>
                    </div>
                    <div className="w-auto md:mr-4 md:w-[65%] text-sm lg:text-base">
                        <div className="flex-shrink-0 justify-end cursor-pointer text-[#3a1b10] hover:text-[#8a5542] hidden md:flex">FOR DOCTORS</div>
                        <div className="w-auto hidden md:flex justify-end md:items-center md:pt-5">
                            <div className="flex-shrink-0 px-2 border-r-[1px] border-black text-[#3a1b10] hover:text-[#8a5542] cursor-pointer">About Us</div>
                            <div className="relative flex-shrink-0 px-2 border-r-[1px] border-black flex cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div className="text-[#3a1b10] hover:text-[#8a5542]">Services</div>
                                <img src="/assets/drop-icon.png" alt="icon" className="h-[25px] w-[25px]"/>
                                {servicesVisible && (
                                    <div className="absolute mt-6 w-auto ml-[-10px] px-8 rounded bg-white shadow-lg shadow-slate-200">
                                        <ul className="whitespace-nowrap">
                                            <li className="hover:text-indigo-700 cursor-pointer">Cataract Correction</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">LASIK Vision Corection</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">LASIK Alternatives</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="relative flex-shrink-0 px-2 border-r-[1px] border-black flex cursor-pointer"  onMouseEnter={handleMouseEnterResources} onMouseLeave={handleMouseLeaveResources}>
                                <div className="text-[#3a1b10] hover:text-[#8a5542]">Resources</div>
                                <img src="/assets/drop-icon.png" alt="icon" className="h-[25px] w-[25px]"/>
                                {resourcesVisible && (
                                    <div className="absolute mt-6 w-auto ml-[-10px]px-8 rounded shadow-lg bg-white shadow-slate-200">
                                        <ul className="whitespace-nowrap p-4">
                                            <li className="hover:text-indigo-700 cursor-pointer">Video Eye Library</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Insurance Accepted</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Patient Newsletter</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Financing Option</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Online Bill Payment</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Patient Portal</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Find a Family Eye Doctor</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="flex-shrink-0 px-2 border-r-[1px] border-black text-[#3a1b10] hover:text-[#8a5542] cursor-pointer">Giving Back</div>
                            <div className="relative flex-shrink-0 px-2 border-r-[1px] border-black flex cursor-pointer"  onMouseEnter={handleMouseEnterLocations} onMouseLeave={handleMouseLeaveLocations}>
                                <div className="text-[#3a1b10] hover:text-[#8a5542]">Locations</div>
                                <img src="/assets/drop-icon.png" height={20} width={30} alt="icon"/>
                                {locationsVisible && (
                                    <div className="absolute mt-6 w-auto ml-[-10px] px-8 rounded bg-white shadow-lg shadow-slate-200">
                                        <ul className="whitespace-nowrap">
                                            <li className="hover:text-indigo-700 cursor-pointer">Alaska</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Idaho</li>
                                            <li className="hover:text-indigo-700 cursor-pointer">Montana</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="flex-shrink-0 pl-2 text-[#3a1b10] hover:text-[#8a5542] cursor-pointer">Contact Us</div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:hidden">
                        <div className="flex flex-shrink-0 justify-end cursor-pointer text-[2vw] whitespace-nowrap">FOR DOCTORS</div>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleMenuClick}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}  
                    >
                        <MenuItem onClick={handleClose}>About Us</MenuItem>
                        <MenuItem onClick={handleClose}>Services</MenuItem>
                        <MenuItem onClick={handleClose}>Resources</MenuItem>
                        <MenuItem onClick={handleClose}>Giving Back</MenuItem>
                        <MenuItem onClick={handleClose}>Locations</MenuItem>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                    </Menu>
                </nav>
            </section>
        </header>
    )
}
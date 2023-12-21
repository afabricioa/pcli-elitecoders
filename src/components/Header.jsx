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

    return (
        <header>
            <section className="mx-auto flex flex-col justify-center h-[132px] max-w-[1731px]">
                <nav className="flex flex-wrap items-center justify-between pl-10 pr-10 pt-[55px]">
                    <div className="w-[90%] flex items-center justify-center flex-shrink-1 bg-gray-100 md:justify-start md:w-[40%]">
                        <img src="/logo-top.png" alt="logo pcli" className="ml-4 h-auto w-[250px] md:ml-12 md:w-[350px] 2xl:w-[400px] 2xl:w-full max-w-full min-w-0"/>
                    </div>
                    <div className="w-auto pt-10 hidden md:flex md:flex-wrap md:items-center md:justify-between md:gap-6">
                        <div className="flex-shrink-0">About Us</div>
                        <div className="flex-shrink-0">Services</div>
                        <div className="flex-shrink-0">Resources</div>
                        <div className="flex-shrink-0">Giving Back</div>
                        <div className="flex-shrink-0">Locations</div>
                        <div className="flex-shrink-0">Contact Us</div>
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        sx={{ml: 2, display: {md: 'none'}}}
                        onClick={handleMenuClick}
                    >
                        <MenuIcon/>
                    </IconButton>
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
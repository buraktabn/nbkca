import { useCallback, useEffect, useState } from "react";
import { menus } from "../menus";

export default function Menu({open, handleOpen}: any){

    console.log("open: ", open)
    return (
        <>
        <div className="menu-wrapper">
            <img 
                onClick={() => handleOpen()} src="/images/menu.svg" 
                loading="lazy" alt="" className="menu-image" 
                style={{
                    display: !open ? "none" : "block",
                    // transform: `translate3d(0px, 0px, 0px) scale3d(${open ? '1, 1, 1' : '0, 0, 1'}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                    transformStyle: 'preserve-3d'
                }} />
            <img 
                onClick={() => handleOpen()} 
                src="/images/close.svg" 
                loading="lazy" 
                alt="" 
                className="x-image" 
                style={{
                    display: open ? "none" : "block",
                    // transform: `translate3d(0px, 0px, 0px) scale3d(${!open ? '1, 1, 1' : '0, 0, 1'}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, 
                    transformStyle: 'preserve-3d'
                }} />
        </div>
       {<div className="menu" style={{display: open ? "none" :'flex', opacity: 1}}>
            <div className="menu-content">
                {menus?.map((menu, index) => {
                    return (
                        <div key={index} className="navlinks-wrapper">
                            <a href={menu.slug} aria-current="page" className="navlinks w-inline-block w--current" style={{transform: 'translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}}>
                                <div className="nav-text">{menu?.name}</div>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="contact-information-wrapper" />
        </div>}
    </>
    )
}
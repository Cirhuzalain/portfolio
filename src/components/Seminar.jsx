import React, {useRef} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Seminar(){

    const navData = useRef(null);

    return (
        <>
            <Header navInfo={navData} />
                <div>
                    <p>Seminar details ...</p>
                </div>
            <Footer />
        </>
    )
}
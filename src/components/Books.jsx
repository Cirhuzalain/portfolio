import React, {useRef} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Books(){

    const navData = useRef(null);

    return (
        <div>
            <Header navInfo={navData} />
                <div>
                    <p>Books list ...</p>
                </div>
            <Footer />
        </div>
    )
}
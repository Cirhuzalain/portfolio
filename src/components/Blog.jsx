import React, {userRef} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Blog(){

    const navData = userRef(null);

    return (
        <>
            <Header navInfo={navData} />
                <div>
                    <p>Blog Post ...</p>
                </div>
            <Footer />
        </>
    )
}
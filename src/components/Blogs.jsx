import React, {userRef} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Blogs(){

    const navData = userRef(null);
    const pageDetailData = [{name : "CDS", description : "", content : ""},
                            {name : "LP", description : "", content : ""},
                            {name : "RPA", description : "", content : ""},
                            {name : "UQ", description : "", content : ""}];
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
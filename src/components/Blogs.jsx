import React, {useRef} from "react";
import Header from "./Header.jsx";
import LinkMeta from "./LinkMeta.jsx";
import Footer from "./Footer.jsx";

export default function Blogs(){

    const navData = useRef(null);
    const pageDetailData = [{id : 1, name : "CDS", description : "", content : ""},
                            {id : 2, name : "LP", description : "", content : ""},
                            {id : 3, name : "RPA", description : "", content : ""},
                            {id : 4, name : "UQ", description : "", content : ""}];
    return (
        <>
            <html lang="en">
                <LinkMeta />
            <body>
            <Header navInfo={navData} />
                <div className="section-content">
                    <div className="blog-content card">
                        {
                            pageDetailData.map((item) => (
                                <a key={item.id} href={`/blog/${item.id}`}><h2 key={item.id}>{item.name}</h2></a>
                            ))
                        }
                    </div>
                </div>
            <Footer />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VVM9MZ5PGV"></script>
            <script async src="/server.js"></script>
            <script async src="/analytics.js"></script>
            </body>
            </html>
        </>
    )
}
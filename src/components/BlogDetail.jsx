import React, {useRef} from "react";
import parse from 'html-react-parser';
import LinkMeta from './LinkMeta.jsx';
import Header from "./Header.jsx";
import blogData from "../Datasets.html";
import Footer from "./Footer.jsx";


export default function BlogDetail(){

    const navData = useRef(null);

    return (
        <>
            <html lang="en">
                <LinkMeta />
            <body>
            <Header navInfo={navData} />
                <div className="detail-content">
                    {
                        parse(blogData)
                    }
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
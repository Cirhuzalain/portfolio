import React, {useRef} from "react";
import parse from "html-react-parser"
import LinkMeta from './LinkMeta.jsx';
import Header from "./Header.jsx";
import blogData from "../Datasets.html";
import Footer from "./Footer.jsx";


export default function BlogDetail(){

    const navData = useRef(null);
    let newBlogData = blogData.replaceAll('%0A', '');
    newBlogData = newBlogData.replaceAll('&%23182', '');
    newBlogData = newBlogData.replaceAll('data:text/html;charset=utf-8,', '');

    return (
        <>
            <html lang="en">
                <LinkMeta />
            <body>
            <Header navInfo={navData} />
                <div className="section-content">
                    <div className="detail-content card">
                        {
                            parse(newBlogData)
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
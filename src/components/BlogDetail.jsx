import React, {useRef, useState, useEffect} from "react";
import parse from "html-react-parser"
import LinkMeta from './LinkMeta.jsx';
import Header from "./Header.jsx";
import cds from "../contents/CDS.html";
import lp from "../contents/LP.html";
import rpa from "../contents/RPA.html";
import uq from "../contents/UQ.html";
import rs from "../contents/RS.html";
import pageDetailData from "../utils.jsx";
import Footer from "./Footer.jsx";


export default function BlogDetail(){

    const navData = useRef(null);

    useIsSSR = () => {
            const [isISsr, setIsSsr] = useState(true);

            useEffect(() => {
                setIsSsr(false);
            }, []);

            return isISsr;
    }

    const isISsr = useIsSSR();
    let pageId = 0;
    let newBlogData = null;
    let contentData = null;

    if (!isISsr){
        let pagePath = window.location.pathname;
        pageId = pagePath[pagePath.length - 1];
        pageId = parseInt(pageId);

        contentData = pageDetailData.filter((item) => item.id == pageId)
        if (contentData.length > 0){
            contentData = contentData[0]
        }

        switch(pageId){
            case 1:
                newBlogData = cds;
                break;
            case 2:
                newBlogData = lp;
                break;
            case 3:
                newBlogData = rpa;
                break;
            case 4:
                newBlogData = uq;
                break;
            case 5:
                newBlogData = rs;
                break;
            default:
                newBlogData = cds;
        }
        newBlogData = newBlogData.replaceAll('%0A', '');
    }

    if (newBlogData == null){
        newBlogData = cds.replaceAll('%0A', '');
    }

    newBlogData = newBlogData.replaceAll('&%23182', '');
    newBlogData = newBlogData.replaceAll('%23', '#');
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
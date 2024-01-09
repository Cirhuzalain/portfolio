import React, {useRef} from "react";
import Header from "./Header.jsx";
import LinkMeta from "./LinkMeta.jsx";
import Footer from "./Footer.jsx";

export default function Quotes(){

    const navData = useRef(null);

    return (
        <>
             <html lang="en">
                <LinkMeta />
            <body>
            <Header navInfo={navData} />
                <div className="quotes-content">
                    <p>
                         "Knowledge is having the right answers.
                          Intelligence is asking is asking the right questions.
                          Wisdom is knowing when to ask the right questions.
                         "RF
                    </p>
                    <p>
                        "The first principle is that you must not fool yourself and you are the easiest person to fool."RF
                    </p>
                    <p>
                        "To each scientific life its own style,
                         And each style defines a life.
                         A sequence of strategic objectives."AN
                    </p>
                    <p>
                        "To each scientific style, its own maxims.
                         Science is in the technique.
                         All else is commentary."AN
                    </p>
                    <p>
                        "The internet is a great equalizer, the fact that Google Search works the same
                        whether you are a kid in rural India/elsewhere or a professor at Harvard/Stanford..."SP
                    </p>
                    <p>
                        "Wear your failure as a badge of honor."SP
                    </p>
                    <p>
                        "Your assumptions are your windows on the world. Scrub them off every once in a while or the light won't come in."IA
                    </p>
                    <p>
                        "The world is not limited by IQ. We are limited by creativity and bravery."AT
                    </p>
                    <p>
                        "Those who can imagine anything can create the impossible."AT
                    </p>
                    <p>
                        "The most incomprehensible thing about the world is that it's comprehensible."AE
                    </p>
                </div>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VVM9MZ5PGV"></script>
                <script src="/server.js"></script>
                <script src="/analytics.js"></script>
            <Footer />
            </body>
            </html>
        </>
    )
}
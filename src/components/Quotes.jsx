import React, {useRef} from "react";
import Header from "./Header.jsx";
import LinkMeta from "./LinkMeta.jsx";
import Footer from "./Footer.jsx";

export default function Quotes(){

    return (
        <>
             <html lang="en">
                <LinkMeta />
            <body>
            <Header />
                <div className="section-content">
                    <div className="quotes-content card">
                        <p>
                             "Knowledge is having the right answers.
                              Intelligence is asking is asking the right questions.
                              Wisdom is knowing when to ask the right questions.
                             "Richard Feynman
                        </p>
                        <p>
                            "The first principle is that you must not fool yourself and you are the easiest person to fool."Richard Feynman
                        </p>
                        <p>
                            "To each scientific life its own style,
                             And each style defines a life.
                             A sequence of strategic objectives."Allan Newell
                        </p>
                        <p>
                            "To each scientific style, its own maxims.
                             Science is in the technique.
                             All else is commentary."Allan Newell
                        </p>
                        <p>
                            "The internet is a great equalizer, the fact that Google Search works the same
                            whether you are a kid in rural India/elsewhere or a professor at Harvard/Stanford..."Sundar Pichai
                        </p>
                        <p>
                            "Wear your failure as a badge of honor."Sundar Pichai
                        </p>
                        <p>
                            "Your assumptions are your windows on the world. Scrub them off every once in a while or the light won't come in."Isaac Asimov
                        </p>
                        <p>
                            "The world is not limited by IQ. We are limited by creativity and bravery."Astro Teller
                        </p>
                        <p>
                            "Those who can imagine anything can create the impossible."Alan Turing
                        </p>
                        <p>
                            "The most incomprehensible thing about the world is that it's comprehensible."Albert Einstein
                        </p>
                        <p>
                            "Most political debate ... is about our balance sheet ... but .... in order to solve the balance sheet,  you've got to grow the private sector."George W. Bush
                        </p>
                        <p>
                            "The survival of liberty in our land increasingly depends on the success of liberty in other lands."George W. Bush
                        </p>
                    </div>
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
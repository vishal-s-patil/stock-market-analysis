import React, {useRef} from 'react'
import './About.css'

export default function About() {
    const comment = useRef(null)

    let handleClick = () => {
        window.scrollTo({
            top : comment.current.offsetTop,
            behavior : "smooth"
        });
    }

    return (
        <>
        <div className="aboutMain">
        <div className="skipTo">
            <p onClick={handleClick}>hello</p>
        </div>
            <div className="aboutContainer">
                <h1 onClick={handleClick}>About Stock Market</h1>

                <h3>What is Stock Market?</h3>
                <p style={{marginTop : "10px"}}>
                    The stock market broadly refers to the collection of exchanges and other venues where the buying, selling, and issuance of shares of publicly held companies take place. Such financial activities are conducted through institutionalized formal exchanges (whether physical or electronic) or via over-the-counter (OTC) marketplaces that operate under a defined set of regulations.
                </p>
                <p style={{marginTop : "10px"}}>
                    While both the terms “stock market” and “stock exchange” are often used interchangeably, the latter term generally comprises a subset of the former. If one trades in the stock market, it means that they buy or sell shares on one (or more) of the stock exchange(s) that are part of the overall stock market. A given country or region may have one or more exchanges comprising their stock market. The leading U.S. stock exchanges include the New York Stock Exchange (NYSE) and the Nasdaq. These leading national exchanges, along with several other exchanges operating in the country, form the stock market of the United States.
                </p>

                <h3 style={{marginTop : "20px"}}>Understanding the Stock Market</h3>
                <p style={{marginTop : "10px"}}>
                    The stock market allows numerous buyers and sellers of securities to meet, interact, and transact. Stock markets allow for price discovery for shares of corporations and serve as a barometer for the overall economy. Since the number of stock market participants is huge, one can often be assured of a fair price and a high degree of liquidity as various market participants compete with one another for the best price.
                </p>
                <p style={{marginTop : "10px"}}>
                    A stock market is a regulated and controlled environment. In the United States, the main regulators include the Securities and Exchange Commission (SEC) and market participants under the purview of the Financial Industry Regulatory Authority (FINRA). Since the stock market brings together hundreds of thousands of market participants who wish to buy and sell shares, it ensures fair pricing practices and transparency in transactions. While earlier stock markets used to issue and deal in paper-based physical share certificates, the modern-day computerized stock markets operate electronically.
                </p>

                <h3 style={{marginTop : "20px"}}>Special Considerations</h3>
                <p style={{marginTop : "10px"}}>
                    The stock exchange shoulders the responsibility of ensuring price transparency, liquidity, price discovery, and fair dealings in such trading activities. As almost all major stock markets across the globe now operate electronically, the exchange maintains trading systems that efficiently manage the buy and sell orders from various market participants. They perform the price-matching function to facilitate trade execution at a price that is fair to both buyers and sellers.
                </p>
                <p style={{marginTop : "10px"}}>
                    A listed company may also offer new, additional shares through other offerings at a later stage, such as through rights issues or follow-on offerings. They may even buy back or delist their shares. The stock exchange facilitates such transactions.
                </p>
                <p style={{marginTop : "10px"}}>
                    The stock exchange often creates and maintains various market-level and sector-specific indicators, like the S&P (Standard & Poor’s) 500 index or the Nasdaq 100 index, which provide a measure to track the movement of the overall market. Other methods include the Stochastic Oscillator and the Stochastic Momentum Index.
                </p>
                <p style={{marginTop : "10px"}} ref={comment}>
                    The stock exchanges also maintain all company news, announcements, and financial reporting, which can usually be accessed on their official websites. A stock exchange also supports various other corporate-level, transaction-related activities. For instance, profitable companies may reward investors by paying dividends that usually come from part of the company’s earnings. The exchange maintains all such information and may support its processing to a certain extent.
                </p>
            </div>
        </div>
            
        </>
    )
}

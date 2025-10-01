import "./Airporttransferscon.css";
import { useState, useEffect } from "react";

function Airporttransferscon() {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => setContent(data.airportTransfers));
  }, []);

    return (
      <div> {/*root div */}
        <div className="h-auto flex flex-row"> {/*Container and elements for Airport transfer container */}
        <article className="w-[50%] h-auto flex justify-center items-start flex-col p-4 text-left">
            <h3 className="text-[18px] text-[hotpink] mt-0 mb-1">Airport Transfers</h3>
            <h1 className="text-[36px] text-[blueviolet] mt-0 mb-1 max-w-[70%]">Stress-Free Airport Transfers to Manchester & Liverpool</h1>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.paragraph}</p>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.paragraph1}</p>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.paragraph2}</p>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.paragraph3}</p>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.paragraph4}</p>
            <a href="#" className="border-[2px] border-solid border-[gray] rounded-[8px] w-[fit-content] h-[fit-content] px-8 py-4 flex justify-center items-center text-[gray] mt-4">Read More</a>
        </article>
        <section className="w-[50%] h-[fit-content] flex justify-start items-center p-4">
            <img src="/Images/airport-transfers.avif" className="w-[620px] h-[502px]" alt="Best taxis blackpool"></img>
        </section>
        </div>


        <div className="h-auto flex flex-row"> {/*Container and elemetns for best taxis */}
        <section className="w-[50%] h-[fit-content] flex justify-end items-center p-4">
            <img src="/Images/best-cabs.png" className="w-[620px] h-[502px]" alt="Best taxis blackpool"></img>
        </section>
        <article className="w-[50%] h-auto flex justify-center items-start flex-col p-4 text-left">
            <h3 className="text-[18px] text-[hotpink] mt-0 mb-1">Best Taxis Blackpool</h3>
            <h1 className="text-[36px] text-[blueviolet] mt-0 mb-1 max-w-[70%]">Reliable & Punctual Service</h1>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.best}</p>
            <p className="mt-0 mb-[4px] max-w-[75%]">{content.best1}</p>
            <a href="#" className="border-[2px] border-solid border-[gray] rounded-[8px] w-[fit-content] h-[fit-content] px-8 py-4 flex justify-center items-center text-[gray] mt-4">Read More</a>
        </article>
        </div>
        </div>
      






    );
}

export default Airporttransferscon;
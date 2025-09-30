import "./Ourfleet.css"

function Ourfleet () {

    return (
        <div>
            <section className="h-auto flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
                style={{ backgroundImage: "url('/Images/fleet.png')"}} >
                <article className="var43000-t-b">
                    <h1 className="varh1">Our Fleet</h1>
                    <p className="varp">At Whiteside Taxis, we take pride in maintaining a high-quality, modern fleet for your safety and comfort. Every vehicle is inspected weekly to ensure they meet our high standards in cleanliness and roadworthiness. With professional, friendly and helpful drivers and a dedicated call centre team using the latest, cutting edge technology, we guarantee a reliable and prompt journey every time.</p>
                </article>
                <div className="var43001"> {/*Grid container */}
                    <item className="var43002"> {/* Grid item */}
                        <img className="item-img" alt="saloon car" src="/Images/grid-images/saloon.avif"></img>
                        <h3 className="var43002h3">Saloon Cars</h3>
                        <p className="var43002p">Ideal for up to 4 passengers with light luggage.</p>
                    </item>

                    <item className="var43002"> {/* Grid item */}
                        <img className="item-img" alt="estate car" src="/Images/grid-images/estate.avif"></img>
                        <h3 className="var43002h3">Estate Cars</h3>
                        <p className="var43002p">Ideal option for up to 4 passengers with ample luggage space.</p>
                    </item>

                    <item className="var43002"> {/* Grid item */}
                        <img className="item-img" alt="multi person" src="/Images/grid-images/estate.avif"></img>
                        <h3 className="var43002h3">People Carriers MPVs</h3>
                        <p className="var43002p">Perfect for carrying up to 5/6 passengers with hand luggage.</p>
                    </item>

                    <item className="var43002"> {/* Grid item */}
                        <img className="item-img" alt="8-seater minibus" src="/Images/grid-images/minibus.avif"></img>
                        <h3 className="var43002h3">8-Seater Minibuses</h3>
                        <p className="var43002p">Spacious enough for up to 8 passengers and their luggage great for group travel.</p>
                    </item>
                </div>

            </section>









        </div>
);
}
export default Ourfleet;
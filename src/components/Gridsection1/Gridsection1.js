import "./Gridsection1.css"

function Gridsection1 () {
    return (
        <div className="Gridsection1">
            <h1>Why choose Whiteside Taxis?</h1>
            <section className="section-grid">
                <article className="grid-item">
                    <img src="/Images/grid-images/handshake.png"></img>
                    <h3>In business for over 145 years</h3>
                </article>

                <article className="grid-item">
                    <img src="/Images/grid-images/dbs.png"></img>
                    <h3>Fully DBS checked & licenced drivers</h3>
                </article>

                <article className="grid-item">
                    <img src="/Images/grid-images/clock.png"></img>
                    <h3>100% reliable & punctual service</h3>
                </article>

                <article className="grid-item">
                    <img src="/Images/grid-images/book.png"></img>
                    <h3>Book by app or online for the best rates</h3>
                </article>

                <article className="grid-item">
                    <img src="/Images/grid-images/car.png"></img>
                    <h3>Immaculately presented modern vehicles</h3>
                </article>

                <article className="grid-item">
                    <img src="/Images/grid-images/support.png"></img>
                    <h3>24/7 support by email, chat, or phone</h3>
                </article>

            </section>
        </div>
    );

}
export default Gridsection1;
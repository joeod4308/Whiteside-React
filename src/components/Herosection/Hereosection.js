import "./Herosection.css";

function Herosection() {
    return (
        <div className="h-[600px] bg-red-500 flex flex-row mb-4">
            <section className="hero-image">
                <img src="/Images/hero-img-1.png" alt="Whiteside Taxi Office"></img>
            </section>
            <article className="hero-text-con">
                <img src="/Images/logo-small-white.png" alt="Whiteside taxis logo" className="logo-small"></img>
                <h3>Whiteside Taxis</h3>
                <h1>A family run business, providing a superior taxi service across Blackpool</h1>
                <p>A family run business, providing a superior taxi service across Blackpool, Lytham St Annes, and the surrounding areas at competitive price since 1880.</p>
                <p>With over 145 years of experience in providing exceptional customer service, immaculately presented modern vehicles, driven by smart, uniformed and professional drivers delivering a reliable, punctual and quality service.</p>
                <div className="p-4 w-[fit-content] h-[fit-content] flex flex-row gap-4 ml-4">
                <a className="w-[fit-content] h-[fit-content] bg-[hotpink] text-[white] px-8 py-4 flex justify-center items-center rounded-[8px]" href="#">Book Online</a>
                <a className="w-[fit-content] h-[fit-content] bg-[white] text-[black] px-8 py-4 flex justify-center items-center rounded-[8px]" href="#">Google rating</a>
                <a className="w-[fit-content] h-[fit-content] bg-[white] text-[black] px-8 py-4 flex justify-center items-center rounded-[8px]" href="#">Facebook</a>
            </div>
            </article>
        </div>
    );
}

export default Herosection;
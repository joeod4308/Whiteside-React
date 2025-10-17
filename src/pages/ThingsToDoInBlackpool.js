import react from 'react';
import { Link } from 'react-router-dom';
import './ThingsToDoInBlackpool.css';
import { FaTaxi } from 'react-icons/fa6';


function ThingsToDoInBlackpool() {
    return (
        <>
  <div className='bg-[#e7e3f1] w-screen py-12 flex flex-col'>
    <article className='ml-[1rem] xl:ml-[15%]'>
      <h1 className='text-2xl font-bold text-[#5b1ecd] pb-4 xl:text-4xl xl:max-w-[55%]' >Things to do while visiting the coastal town of Blackpool</h1>
      <p className='pb-[2rem] max-w-[75%] xl:max-w-[58%]'>There are so many great activities to do when you are staying in Blackpool to experience and enjoy. And, never feel like you need to know how to get around when visiting as Whiteside <span className='text-[#ff39e5]'>Taxi Blackpool</span> has you covered. We love our town and we love driving visitors around and showing it off. Let’s go over some of the fun attractions you’ll find in Blackpool that you may need a ride too!</p>
      <Link to={"/Book"} className='group flex flex-row justify-center items-center gap-2 xl:gap-4 border-[2px] border-solid border-[#5b1ecd] w-[fit-content] h-[fit-content] py-4 px-8 rounded-lg hover:bg-[#5b1ecd] hover:duration-500 hover:text-white'  >Book a Taxi
      <FaTaxi className='text-[#5b1ecd] group-hover:text-white hover:duration-[0.5s]' /></Link>
    </article>
  </div>

  <div className=" bg-white xl:flex xl:flex-col xl:justify-center xl:items-center xl:pt-20 xl:pb-20 xl:h-auto xl:gap-4">
    <section className="bg-[#e7e3f1] w-[75%] flex flex-row justify-center items-center xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3 className='xl:text-2xl' >Ascent Trampoline Park</h3>
      <p>
        Do you have some little jumpers? Taking the kids out to get out some
        energy at the{" "}
        <a className="text-[#ff39e5] text-[18px]" href="https://www.airhop.co.uk/blackpool-adventure-trampoline-park/" target='blank'>
          {" "}
          Ascent Trampoline
        </a>{" "}
        Park in Blackpool is a great option. But, it offers more than just a
        trampoline park, it is full of fun for the whole family. Climb their
        climbing way or go to an open jumper. Don’t have any socks? It’s not a
        problem, they have them there for purchase. And the cost is £12 or
        under.
      </p>
    </section>

    <section className="bg-[#e7e3f1] xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3>Great Promenade Show</h3>
      <p>
        {" "}
        This is free and is located at the Blackpool Promenade from the South
        Pier, heading south. This is some amazing artwork. One piece called the
        Glam Rocks was installed in 2001 and has 100’s of fibre optic lights
        that are amazing to see in the evening. The collection consists of 10
        pieces that were chosen in 2000 and developed into this amazing art
        journey.{" "}
        <a href="https://www.visitblackpool.com/detail/great-promenade-show-6443">
          The Great Promenade Show
        </a>{" "}
        is a great place to take a stroll and enjoy our beautiful town.
      </p>
    </section>

    <section className="bg-[#e7e3f1] xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3>SEA LIFE Blackpool</h3>
      <p>
        {" "}
        The{" "}
        <a href="https://www.visitsealife.com/blackpool">
          SEA LIFE Blackpool
        </a>{" "}
        is also located at our beautiful promenade and is great for all ages.
        This is an amazing way to get up close and experience the Sealife
        Blackpool has to offer. They have some amazing animals. Clownfish,
        turtles, seahorses, Jellyfish and you can chart the basking shark of
        which they have tagged and travels all over. The fees start at around
        £11.
      </p>
    </section>

    <section className="bg-[#e7e3f1] xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3>Model Village &amp; Gardens</h3>
      <p>
        {" "}
        This is an award-winning attraction and has been around since the 70’s.
        The{" "}
        <a href="http://blackpoolmodelvillage.com/">
          Blackpool Model Village
        </a>{" "}
        and Gardens are all handcrafted miniature towns with amazing detailing.
        The villages are set into a garden and they are free to visit. All these
        handcrafted villages have themes and are just amazing to see in person.
      </p>
    </section>

    <section className="bg-[#e7e3f1] xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3>Comedy Carpet</h3>
      <p>
        {" "}
        This is a unique and fun site to see. The comedy carpet will have you
        laughing in no time. It is located near the famous Blackpool tower and
        it’s one of the biggest pieces the Uk has ever commissioned. It is sort
        of similar to the Hollywood walk of fame but captures the UK’s best
        jokes and comedians.{" "}
        <a href="https://www.visitblackpool.com/detail/comedy-carpet-blackpool-651130/">
          The Comedy Carpet
        </a>{" "}
        is really a great site to see.
      </p>
    </section>
    
    <section className="bg-[#e7e3f1] xl:w-[65%] xl:h-[fit-content] xl:py-4 xl:px-4 rounded-lg">
      <h3>The Beach</h3>
      <p>
        {" "}
        <a href="https://www.visitblackpool.com/detail/blackpool-beach-275980/">
          Blackpool beach
        </a>{" "}
        is a great place to spend the day! We have one of the best beaches in
        all of the UK but don’t take our word for it. Take the entire family and
        enjoy the sun for the day. And, take a look at the 3 piers it has to
        offer. Here you will see the Promenade Show and the famous Golden Mile.
        There are regular comedy shows and musical acts at the North Pier. The
        Central Pier has the SEA LIFE as we mentioned above and a 108 ft Ferris
        Wheel for those that don’t mind heights. The South pier has a waterpark
        and pleasure beach. This pier is a mini-theme park really.
      </p>
    </section>
  </div>
</>
    );
}

export default ThingsToDoInBlackpool;
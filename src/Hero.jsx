import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            hic! Modi deleniti blanditiis adipisci atque consectetur quasi
            asperiores magnam necessitatibus aperiam quibusdam libero temporibus
            dolore, molestias voluptas accusantium, magni consequuntur?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero

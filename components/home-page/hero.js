import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
        return(
            <section className={classes.hero}>
        <div className={classes.image}>
        <Image
        src="/images/site/Yiannis.jpg" alt="An Image of Yiannis" 
        width={300} 
        height={300} 
        />
        </div>
        <h1>
            Hi, I'm Yiannis
        </h1>
        <p>
            I blog about web development - especialy full-stack framworks like 
            Django and Next.js.
        </p>
    </section>
        )
    
}

export default Hero;
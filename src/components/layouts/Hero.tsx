import c from './hero.module.css';

interface HeroProps {
    
}
 
const Hero: React.FunctionComponent<HeroProps> = () => {
    return ( 
        <section className={c.hero}></section>
     );
}
 
export default Hero;
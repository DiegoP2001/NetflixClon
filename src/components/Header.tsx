import './css/Header.css'
import Avatar from './Avatar'
import { useRef } from 'react'

const Header = () => {

    const iframeRef = useRef(null)
    
    const handleFullscreen = () => {
        const iframe = iframeRef.current;
        
        if (iframe) {

            console.log(iframe)

            if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari y Opera
            iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // Edge
            iframe.msRequestFullscreen();
            }
        } else {

            console.log("No iframe")

        }
    };

    return (
        <>  
            <div autoPlay muted loop className='video-background'>
                <iframe 
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&fullscreen=true"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen={true}
                    webkitallowfullscreen={true} 
                    mozAllowFullScreen={true}
                    id="background-video">
                </iframe>
            </div>
           
            <header className="navbar">
                <ul className="leftSide">
                    <li>
                    <svg height="30" viewBox=".238 .034 919.406 248.488" width="200" xmlns="http://www.w3.org/2000/svg"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#e50914"/></svg>
                    </li>
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Novedades más vistas</li>
                    <li>Mi lista</li>
                    <li>Explorar por idiomas</li>
                </ul>
                <ul className="rightSide">
                    <li>
                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8.5" r="5"/><path d="m17.571 17.5-5.571-5.5"/></g></svg>
                    </li>
                    <li>Infantil</li>
                    <li>
                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m2.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848zm2.58452405-1.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 -1 18 19)"/></svg>
                    </li>
                    <li>
                        <Avatar/>
                    </li>
                </ul>
            </header>
        
        </>
    )

}



export default Header
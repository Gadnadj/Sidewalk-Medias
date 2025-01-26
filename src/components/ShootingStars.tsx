import { useEffect } from 'react';

type ShootingStarsProps = {
    containerId: string;
};

const ShootingStars = ({ containerId = 'particles-container' }: ShootingStarsProps) => {
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Position de départ : bas de l'écran avec variation horizontale
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${80 + Math.random() * 20}%`;

            // Taille aléatoire plus variée
            const size = Math.random() * 6 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Opacité aléatoire plus prononcée
            particle.style.opacity = (Math.random() * 0.7 + 0.3).toString();
            particle.style.backgroundColor = 'white';

            // Direction aléatoire
            const angle = Math.random() * 180; // Angle entre 0 et 180 degrés
            particle.style.setProperty('--angle', `${angle}deg`);

            // Animation plus rapide et plus variée
            particle.style.animationDuration = `${Math.random() * 15 + 5}s`;
            particle.style.animationDelay = `-${Math.random() * 5}s`;

            document.getElementById(containerId)?.appendChild(particle);

            // Supprimer la particule après l'animation
            setTimeout(() => {
                particle.remove();
            }, 13000);
        };

        // Plus de particules
        for(let i = 0; i < 100; i++) {
            createParticle();
        }

        // Créer de nouvelles particules périodiquement
        const interval = setInterval(() => {
            createParticle();
        }, 200);

        return () => {
            clearInterval(interval);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [containerId]);

    return (
        <div 
            id={containerId}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
            style={{ background: 'transparent' }}
        />
    );
};

export default ShootingStars; 
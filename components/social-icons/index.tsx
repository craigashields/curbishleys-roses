import React from 'react';
import Mail from './mail.svg'
import Facebook from './facebook.svg'
import GoogleMap from './googlemaps.svg'
import Instagram from './instagram.svg'

// Icons taken from: https://simpleicons.org/

const components = {
    mail: Mail,
    facebook: Facebook,
    googlemap: GoogleMap,
    instagram: Instagram
}

interface SocialIconProps {
    kind: keyof typeof components;
    href?: string;
    size?: number;
  }

  const SocialIcon: React.FC<SocialIconProps> = ({ kind, href, size = 8 }) => {

    const SocialSvg = components[kind];

    return (
      <a
        className="z-10 text-sm text-white transition hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-white hover:text-rose-100 h-${size} w-${size}`}
        />
      </a>
    );
  };
  
  export default SocialIcon;
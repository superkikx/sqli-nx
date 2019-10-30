import React from 'react';

import './text.css';

/**
 *  <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          ctaTitle: "visiter le site",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg',
          reversed: false
        }}
      </Text>
 * @param props 
 */
export const Text = props => {
  const { reversed, imageSrc, title, content, href, ctaTitle } = props.children;

  return (
    <section>
      <div className={'card 1 flip-card ' + (reversed && 'reversed')}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card_image">
              <img src={imageSrc || 'https://i.redd.it/b3esnz5ra34y.jpg'} />
            </div>
            <div className="card_title title-white">
              {title && <p>{title}</p>}
            </div>
          </div>
          <div className="flip-card-back">
            {content && (
              <p>
                {content}
                {/* href && <a href={href}> {ctaTitle}</a> */}
                { href && typeof href === 'string' ? (
                  <a href={href}>{ctaTitle}</a>
                ) : (
                  <a onClick={() => href(props)}>{ctaTitle}</a>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;

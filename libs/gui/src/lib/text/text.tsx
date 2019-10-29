import React from "react";

import "./text.css";

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
export const Text = (props) => {
  return (
    <section>
      <div className={"card 1 flip-card " + (props.children.reversed && 'reversed')}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card_image"> 
              {props.children.imageSrc && <img src={props.children.imageSrc} />}
              {!props.children.imageSrc && <img src="https://i.redd.it/b3esnz5ra34y.jpg" />}
            </div>
            <div className="card_title title-white">
              {props.children.title && <p>{props.children.title}</p>}
            </div>
          </div>
          <div className="flip-card-back">
              {props.children.content && 
              <p>
              {props.children.content}
              {props.children.href && 
                <a href={props.children.href}> 
                  {props.children.ctaTitle}
                </a>}
              </p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;

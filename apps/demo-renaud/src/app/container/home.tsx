import React from 'react';

import {
    Logo,
    MenuSofiane,
    Footer,
    AudioPlayer,
    BreadcrumbSqli,
    Autocomplete,
    Text
  } from '@sqli/gui';
  
  import '../app.css';
  
  export const Home = () => {
    return (
      <div className="app col">
  
        <div className="col">
          <Logo />
          <MenuSofiane background="true">{[]}</MenuSofiane>
          <MenuSofiane>
            {[
              { label: 'Home', action: '' },
              { label: 'Search', action: '' },
              { label: 'Login', action: '' }
            ]}
          </MenuSofiane>
          <MenuSofiane background="true">{[]}</MenuSofiane>
        </div>
  
        <div className="row">
  
          <div className="col pad">
            <AudioPlayer />
  
            <MenuSofiane direction="vertical">
              {[
                { label: 'Yuhei', action: '' },
                { label: 'Sullivan', action: '' },
                { label: 'Sofiane', action: '' },
                { label: 'AbdelJallil', action: '' },
                { label: 'Mohamed', action: '' },
                { label: 'Max', action: '' },
                { label: 'Khalid', action: '' },
                { label: 'Khalil', action: '' },
                { label: 'Renaud', action: '' }
              ]}
            </MenuSofiane>
          </div>
  
          <div className="col">
            <BreadcrumbSqli
              trail={[
                { label: 'Yuhei', action: '' },
                { label: 'Sullivan', action: '' },
                { label: 'Sofiane', action: '' },
                { label: 'AbdelJallil', action: '' },
                { label: 'Mohamed', action: '' },
                { label: 'Max', action: '' },
                { label: 'Khalid', action: '' },
                { label: 'Khalil', action: '' },
                { label: 'Renaud', action: '' }
              ]}
            ></BreadcrumbSqli>
            <div className="pad">
              <Autocomplete
                placeholder="Type Your Favorite Music Name"
                data={['Test']}
              />
            </div>
            <div className="pad wrap slide">
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random(),
                    reversed:true
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
              <div className="pad">
                <Text>
                  {{
                    title: 'In Code We Trust',
                    content:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium, ad perferendis ducimus, quas nostrum quibusdam provident doloremque illo aspernatur beatae non, expedita libero omnis eaque error mollitia aliquam quia!',
                    imageSrc: 'http://unsplash.it/300?' + Math.random()
                  }}
                </Text>
              </div>
            </div>
          </div>
        </div>
  
        <Footer background="crimson">
          <h1>
            Welcome to <Logo size="small" />
          </h1>
        </Footer>
      </div>
    );
  };
  
  export default Home;
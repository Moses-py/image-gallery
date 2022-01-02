import React from 'react'
import { CardHolder } from './CardStyles/style'
import {PreferenceThumb} from './PreferenceThumb'

export const Card = () => {
    return (
        <>
            <CardHolder>
                <h1>What are you interested in?</h1>
                <div>
                    <PreferenceThumb url="\images\thumbnails\francesco-de-tommaso-ZxNKxnR32Ng-unsplash.jpg" category="Wild Life" id="1" />
                    <PreferenceThumb url="\images\thumbnails\alexander-redl-d3bYmnZ0ank-unsplash.jpg" category="Sport/Fitness" id="2" />
                    <PreferenceThumb url="\images\thumbnails\anna-kolosyuk-D5nh6mCW52c-unsplash.jpg" category="Art" id="3" />
                </div>

                <div>
                    <PreferenceThumb url="\images\thumbnails\anna-pelzer-IGfIGP5ONV0-unsplash.jpg" category="Food" id="4" />
                    <PreferenceThumb url="\images\thumbnails\christopher-gower-m_HRfLhgABo-unsplash.jpg" category="Technology" id="5" />
                    <PreferenceThumb url="\images\thumbnails\erol-ahmed-IHL-Jbawvvo-unsplash.jpg" category="Nature" id="6" />
                </div>
                <div>
                    <PreferenceThumb url="\images\thumbnails\ethmessages-fArYu2gvHd8-unsplash.jpg" category="Blockchain" id="7" />
                    <PreferenceThumb url="\images\thumbnails\hal-gatewood-OgvqXGL7XO4-unsplash.jpg" category="Science" id="8" />
                    <PreferenceThumb url="\images\thumbnails\jefferson-santos-fCEJGBzAkrU-unsplash.jpg" category="Music" id="8" />
                </div>
            </CardHolder>
        </>
    )
}


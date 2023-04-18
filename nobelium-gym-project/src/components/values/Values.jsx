import React from 'react';
import Images from "../../../images/values.jpg";
import {GiCutDiamond} from "react-icons/gi"
import { SiOpenaigym } from 'react-icons/si'
import "./values.css"
import SectionHeader from '../sectionHead/SectionHead';
import Cart from '../../UI/cart/Cart';

const Values = () => {
    const values = [
        {
            id: 1,
            icon: <SiOpenaigym />,
            title: "Value One",
            desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
        },
        {
            id: 2,
            icon: <SiOpenaigym />,
            title: "Value Two",
            desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
        },
        {
            id: 3,
            icon: <SiOpenaigym />,
            title: "Value Three",
            desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
        },
        {
            id: 4,
            icon: <SiOpenaigym />,
            title: "Value Four",
            desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
        }
    ]
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="Values__image">
                    <img src={Images} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHeader icon={<GiCutDiamond />} title="Values" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo dignissimos impedit quae sed, eos temporibus sit labore laudantium rerum recusandae, ex, accusamus reiciendis sapiente laborum? Laboriosam dicta excepturi iste?</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, desc})=>(
                            <Cart key={id} icon={icon} info={desc} className="values__value"/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
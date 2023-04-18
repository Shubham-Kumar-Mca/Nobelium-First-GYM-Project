import React from 'react'
import { FaCrown } from "react-icons/fa"
import SectionHead from '../sectionHead/SectionHead'
import { SiOpenaigym } from 'react-icons/si'
import Cart from '../../UI/cart/Cart'
import "./programs.css"


const Programs = () => {
    const programs = [
        {
            id: 1,
            icon: <SiOpenaigym />,
            title: "Program One",
            info: "This is the day that the lord has made. We will rejoice!",
            path: "/programs/111"
        },
        {
            id: 2,
            icon: <SiOpenaigym />,
            title: "Program Two",
            info: "This is the day that the lord has made. We will rejoice!",
            path: "/programs/222"
        },
        {
            id: 3,
            icon: <SiOpenaigym />,
            title: "Program Three",
            info: "This is the day that the lord has made. We will rejoice!",
            path: "/programs/333"
        },
        {
            id: 4,
            icon: <SiOpenaigym />,
            title: "Program Four",
            info: "This is the day that the lord has made. We will rejoice!",
            path: "/programs/444"
        }
    ]
    return (
        <section className='programs'>
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Programs" />

                <div className="programs__wrraper">
                    {programs.map(({ id, title, icon, info, path }) => (
                        <Cart className="programs__program" key={id} title={title} icon={icon} info={info} path={path} />
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Programs
import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Service from './service';


class Portfolio extends React.Component {


    render() {
        return (
            <div className='row gy-5'>
                <h1>Portfolio</h1>

                <div className='row justify-content-center'>

                    <Service title="Web Design" color="gray" />
                    <Service title="Mobile Design" color="black" />
                    <Service title="Logo Design" color="gray" />
                    <Service title="Web Application Development" color="black" />
                    <Service title="Mobile Application Development" color="gray" />
                    <Service title="PWA Development" color="black" />

                </div>

            </div>
        );
    }
}

export default Portfolio;
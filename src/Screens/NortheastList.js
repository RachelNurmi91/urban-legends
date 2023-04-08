import { useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const NortheastList = ({listOutAllRegionStories, title}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div className="solid p-4">
            <h1>{title}</h1>

            <div className="container">
                <div className="row">
                    {listOutAllRegionStories()}
                </div>
            </div>
            

        </div>
    )

};

export default NortheastList;
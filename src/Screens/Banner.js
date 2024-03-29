import { useContext } from "react";
import { BannerContext } from "./Contexts/BannerContext";

const Banner = () => {

    const { showFullBanner, storyData, hideBanner } = useContext(BannerContext)

    return (
        
        <div id="banner" className="d-flex justify-content-center">

                {
                    hideBanner
                    ? null
                    : showFullBanner 
                    ? <h1 className="title-banner text-white text-center">AMERICAN URBAN LEGENDS</h1>
                    : <h1 className="story-banner">{storyData?.[0]?.title}</h1>
                }

        </div>
    )

};

export default Banner;

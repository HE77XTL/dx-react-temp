import React, {useRef} from 'react'
import Slider from "react-slick";
import css from './policyNews.module.less'
import {Button} from "caihrc";

const PolicyNews = function () {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

//--- useState ----------------------
    const sliderRef = useRef();

//--- useEffect ----------------------

//--- function ----------------------
    function slickNext() {
        sliderRef.current.slickNext();
    }
    function slickPrev() {
        sliderRef.current.slickPrev();
    }


//--- operate ----------------------

    return (<div className={`${css.policyNews} pagePadding`}>
        PolicyNews

        <div style={{width: '500px', height: '300px'}}>
            <h2> Single Item</h2>
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
        <div>
            <Button onClick={()=> {slickPrev()}}>pre</Button>
            <Button onClick={()=> {slickNext()}}>next</Button>
            <span>(UI出来可以根据具体样式绑定事件)</span>
        </div>
    </div>)
}

export default PolicyNews

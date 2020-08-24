import React from 'react';

const CustomTemplate = (props) => {
    const goNext = () => {
        if (props.sliderRef.current !== null && props.sliderRef.current.swiper !== null) {
            props.sliderRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (props.sliderRef.current !== null && props.sliderRef.current.swiper !== null) {
            props.sliderRef.current.swiper.slidePrev();
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>{props.slider}</div>
            <div style={{ width: '50%' }}>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
            </div>
        </div>
    );
};

export default CustomTemplate;

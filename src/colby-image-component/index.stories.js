import React, { Component } from 'react';
import common from '../common.css';
import Image from '@colbycommunications/colby-image-component';
import { withA11y } from '@storybook/addon-a11y';

export default { title: 'Image', decorators: [withA11y] };

const SingleImgDemo = class SimpleImgDemo extends Component {
    lightbox = new FsLightbox();
    componentDidMount() {
        this.lightbox.props.sources = ['/images/hats-and-miller-Comm2016-162_optimized.jpg'];
    }

    componentWillUnmount() {
        this.lightbox.close();
    }

    render() {
        return (
            <div className={`${common.demoContainer} container`} key="SingleImgDemo">
                <a
                    data-fslightbox={'gallery'}
                    data-type="image"
                    onClick={() => this.lightbox.open()}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src="/images/hats-and-miller-Comm2016-162_optimized.jpg"
                        className="img-fluid"
                        alt="test"
                    />
                </a>
            </div>
        );
    }
};

const GalleryDemo = class GalleryDemo extends Component {
    lightbox = new FsLightbox();
    componentDidMount() {
        this.lightbox.props.sources = [
            '/images/hats-and-miller-Comm2016-162_optimized.jpg',
            '/images//Will-Johnson-homepage-02-1.jpg',
        ];
    }

    componentWillUnmount() {
        this.lightbox.close();
    }

    render() {
        return (
            <div className={`${common.demoContainer} container`} key="GalleryDemo">
                <a
                    data-fslightbox="gallery"
                    data-type="image"
                    onClick={() => this.lightbox.open()}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src="/images/hats-and-miller-Comm2016-162_optimized.jpg"
                        className="img-fluid"
                        alt="test"
                    />
                </a>

                <a data-fslightbox="gallery" onClick={() => lightbox.open()}>
                    <img
                        src="/images//Will-Johnson-homepage-02-1.jpg"
                        className="img-fluid"
                        alt="test"
                        data-type="image"
                    />
                </a>
            </div>
        );
    }
};

export const Single = () => {
    return (
        <div className={`${common.demoContainer} container`}>
            <Image
                src={{ main: '/images/hats-and-miller-Comm2016-162_optimized.jpg' }}
                altText="The quick fox jumped over the lazy dog"
                useLightbox={false}
            />
        </div>
    );
};

export const SingleWithLightbox = () => {
    return <SingleImgDemo />;
};

export const Gallery = () => {
    return <GalleryDemo />;
};

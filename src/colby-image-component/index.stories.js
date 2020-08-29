import React, { Component } from 'react';
import common from '../common.css';
import Image from '@colbycommunications/colby-image-component';
import { withA11y } from '@storybook/addon-a11y';

export default { title: 'Image', decorators: [withA11y] };

const SingleImgDemo = class SimpleImgDemo extends Component {
    lightbox = new FsLightbox();
    componentDidMount() {
        this.lightbox.props.sources = ['images/hats-and-miller-Comm2016-162_optimized.jpg'];
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
                        src="images/hats-and-miller-Comm2016-162_optimized.jpg"
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
            'images/hats-and-miller-Comm2016-162_optimized.jpg',
            'images/Will-Johnson-homepage-02-1.jpg',
        ];
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
                        src="images/hats-and-miller-Comm2016-162_optimized.jpg"
                        className="img-fluid"
                        alt="test"
                    />
                </a>

                <a data-fslightbox="gallery" onClick={() => lightbox.open()}>
                    <img
                        src="images//Will-Johnson-homepage-02-1.jpg"
                        className="img-fluid"
                        alt="test"
                        data-type="image"
                    />
                </a>
            </div>
        );
    }
};

const LazyLoadWithLightboxDemo = class LazyLoadWithLightboxDemo extends Component {
    lightbox = new FsLightbox();
    componentDidMount() {
        this.lightbox.props.sources = ['images/Phone-Backround1.png'];
    }
    render() {
        <div className={common.demoContainer}>
            <div>
                <Image
                    src={{
                        main: 'images/Phone-Backround1.png',
                        thumbnail: 'images/Phone-Backround1-169x300',
                    }}
                    altText="The quick fox jumped over the lazy dog"
                    lazyLoad
                />
            </div>
        </div>;
        return (
            <div className={`${common.demoContainer} container`}>
                <div
                    onClick={() => this.lightbox.open()}
                    style={{ cursor: 'pointer', width: '500px' }}
                >
                    <Image
                        src={{
                            main:
                                'https://admittedstudents.colby.edu/wp-content/uploads/2020/04/Phone-Backround1.png',
                            thumbnail:
                                'https://admittedstudents.colby.edu/wp-content/uploads/2020/04/Phone-Backround1-169x300.png',
                        }}
                        altText="The quick fox jumped over the lazy dog"
                        useLightbox={false}
                        lazyLoad
                    />
                </div>
            </div>
        );
    }
};

export const Single = () => {
    return (
        <div className={`${common.demoContainer} container`}>
            <Image
                src={{ main: 'images/hats-and-miller-Comm2016-162_optimized.jpg' }}
                altText="The quick fox jumped over the lazy dog"
                useLightbox={false}
            />
        </div>
    );
};

export const SingleWithLightbox = () => {
    return <SingleImgDemo />;
};

export const LightboxGallery = () => {
    return <GalleryDemo />;
};

export const LazyLoad = () => (
    <div className={common.demoContainer}>
        <div style={{ width: '600px' }}>
            <Image
                src={{
                    main:
                        'https://www.colby.edu/magazine/wp-content/uploads/sites/105/2020/08/20191004_colbyhomecoming_5005-top.jpg',
                    thumbnail:
                        'https://www.colby.edu/magazine/wp-content/uploads/sites/105/2020/08/20191004_colbyhomecoming_5005-top-165x110.jpg',
                }}
                altText="The quick fox jumped over the lazy dog"
                useLightbox={false}
                lazyLoad
            />
        </div>
    </div>
);

export const LazyLoadWithLightbox = () => {
    return <LazyLoadWithLightboxDemo />;
};

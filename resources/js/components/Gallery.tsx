import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';



import lgAutoPlay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';
import lgThumbnail from 'lightgallery/plugins/thumnail.css';
import lgZoom from 'lightgallery/plugins/zoom';

const images = [
  {
    src: "/1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "/1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "/1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "/1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
  {
    src: "1.jpeg",
    alt: "image-1"
  },
]

const Gallery = () => {
  const onInit = () => {
    console.log('ok');

  }
  return (
    <div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugin={[lgThumbnail, lgZoom]}
      >
        {images.map((image, index) => (
          <a href="./1.jpeg" key={index}>
            <img src={image.src} alt={image.alt} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
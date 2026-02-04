import LightGallery from "lightgallery/react";
import "./gallery.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgShare from "lightgallery/plugins/share";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { src: "/r1.jpeg", alt: "image-1" },
  { src: "/r2.jpeg", alt: "image-1" },
  { src: "/r3.jpeg", alt: "image-1" },
  { src: "/r4.jpeg", alt: "image-1" },
  { src: "/r5.jpeg", alt: "image-1" },
  { src: "/r6.jpeg", alt: "image-1" },
  { src: "/r125.jpeg", alt: "image-1" },
  { src: "/r11.jpeg", alt: "image-1" },
  { src: "/r15.jpeg", alt: "image-1" },
  { src: "/r16.jpeg", alt: "image-1" },
  { src: "/r17.jpeg", alt: "image-1" },
  { src: "/r20.jpeg", alt: "image-1" },
  { src: "/r21.jpeg", alt: "image-1" },
  { src: "/r22.jpeg", alt: "image-1" },
  { src: "/r23.jpeg", alt: "image-1" },
  { src: "/r24.jpeg", alt: "image-1" },
  { src: "/r25.jpeg", alt: "image-1" },
  { src: "/r26.jpeg", alt: "image-1" },
  { src: "/r27.jpeg", alt: "image-1" },
  { src: "/r28.jpeg", alt: "image-1" },
  { src: "/r29.jpeg", alt: "image-1" },
  { src: "/r30.jpeg", alt: "image-1" },
  { src: "/r31.jpeg", alt: "image-1" }
];

export function Gallery() {
  return (
    <LightGallery
      speed={500}
      plugins={[
        lgThumbnail,
        lgRotate,
        lgShare,
        lgAutoplay,
        lgFullscreen,
        lgZoom
      ]}
    >
      {images.map((image, index) => (
        <a key={index} href={image.src}>
          <img src={image.src} alt={image.alt} />
        </a>
      ))}
    </LightGallery>
  );
}

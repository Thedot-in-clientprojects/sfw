import React from 'react';
import { Gallery } from "react-grid-gallery";

function ImageGrid() {

    const images = [
        {
           src: "images/grid/1.webp",
           width: 320,
           height: 200,
           isSelected: false,
           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: "images/grid/2.webp",
           width: 320,
           height: 212,
           tags: [
              { value: "Baby", title: "Baby" },
              { value: "Turned One", title: "Turned One" },
           ],
        },
      
        {
           src: "images/grid/3.webp",
           width: 320,
           height: 212,
        },
      
        {
           src: "images/grid/4.webp",
           width: 320,
           height: 212,
        },
      
        {
           src: "images/grid/5.webp",
           width: 320,
           height: 212,
        },
      
        {
           src: "images/grid/6.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/7.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/8.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/9.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/10.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/11.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/12.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/13.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/14.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/15.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/16.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/17.webp",
           width: 320,
           height: 212,
        },
        {
           src: "images/grid/18.webp",
           width: 320,
           height: 212,
        },
     ];
      


  return (
    <div style={{
        marginTop:30,
        marginBottom:30
    }}>
<Gallery images={images} />


    </div>
  )
}

export default ImageGrid
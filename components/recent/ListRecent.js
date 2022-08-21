import React from 'react';
import { ListImage } from '../../assets/images';
import ItemRecent from './ItemRecent';
const data = [
  {
    image: ListImage.recent1,
  },
  {
    image: ListImage.recent2,
  },
  {
    image: ListImage.recent3,
  },
  {
    image: ListImage.recent4,
  },
  {
    image: ListImage.recent5,
  },
  {
    image: ListImage.recent6,
  },
];
export default function ListRecent() {
  return (
    <>
      {data.map((item, index) => (
        <ItemRecent key={index} item={item.image}></ItemRecent>
      ))}
    </>
  );
}

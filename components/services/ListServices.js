import ItemService from './ItemService';
import { ListImage } from '../../assets/images';
export default function ListServices() {
  const ListData = [
    {
      image: ListImage.service1,
      title: 'Electronics',
      quantity: '12,990',
    },
    {
      image: ListImage.service2,
      title: 'Mobile',
      quantity: '12,990',
    },
    {
      image: ListImage.service3,
      title: 'Vehicles',
      quantity: '12,990',
    },
    {
      image: ListImage.service4,
      title: 'Appliances',
      quantity: '12,990',
    },
    {
      image: ListImage.service5,
      title: 'Fashions',
      quantity: '12,990',
    },
    {
      image: ListImage.service6,
      title: 'Properties',
      quantity: '12,990',
    },
    {
      image: ListImage.service7,
      title: 'Pets',
      quantity: '12,990',
    },
    {
      image: ListImage.service8,
      title: 'Educations',
      quantity: '12,990',
    },
    {
      image: ListImage.service9,
      title: 'Businesses',
      quantity: '12,990',
    },
    {
      image: ListImage.service10,
      title: 'Sports',
      quantity: '12,990',
    },
  ];

  return (
    <ul className='listing-services'>
      {ListData.map((item, index) => (
        <ItemService key={index} item={item} />
      ))}
    </ul>
  );
}

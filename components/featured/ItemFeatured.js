import Image from 'next/image';
import Link from 'next/link';
import { ListImage } from '../../assets/images';
export default function ItemFeatured(props) {
  return (
    <div className='item-featured'>
      <div className='featured-image'>
        <Link href='/'>
          <a>
            <Image src={props.item.image} alt="image"></Image>
          </a>
        </Link>
      </div>
      <div className='featured-caption'>
        <h4>
          <Link href=''>
            <a className='featured-link'>Perian cat</a>
          </Link>
        </h4>
        <p className='featured-cap'>
          Los Angels, CA · <strong className='sub-cap'>12hrs ago</strong>
        </p>
        <span className='featured-price'>$139.40</span>
        <div className='btn-wrapper'>
          <span className='pro-btn1'>new</span>
          <span className='pro-btn2'>promted</span>
        </div>
      </div>
    </div>
  );
}

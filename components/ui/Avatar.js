import Image from 'next/image';

const Avatar = (props) => {
  return <Image src={props.src} alt={props.alt} width={500} height={500} />;
};

export default Avatar;

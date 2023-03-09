type Props = {
  name: string;
  desc: string;
  img: string;
};

const Class = ({ name, desc, img }: Props) => {
  const overlayStyles = `flex flex-col p-5 h-[380px] w-[450px] z-30 absolute items-center justify-center whitespace-normal text-center bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={`${overlayStyles}`}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{desc}</p>
      </div>
      <img src={img} alt={`${img}`} />
    </li>
  );
};

export default Class;

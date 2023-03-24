import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center">
      <Image
      className="w-auto h-auto"
        height={50}
        width={50}
        src="https://i.imgur.com/ZCGDmH3.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}
export default Logo;

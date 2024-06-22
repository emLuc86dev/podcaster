import Image from "next/image";

interface PodcastCardProps {
  poscatId?: number;
  description: string;
  imgURL: string;
  title: string;
}

const PodcastCard = ({
  poscatId,
  description,
  imgURL,
  title,
}: PodcastCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="flex flex-col gap-2">
        <Image alt={title} src={imgURL} width={174} height={174} 
        className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-16 truncate text-white-1 font-bold">{title}</h1>
        <h2 className="text-12 truncate capitalize  text-white-4">{description}</h2>
      </div>
    </div>
  );
};

export default PodcastCard;

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
        <Image alt={title} src={imgURL} width={174} height={174} />
      </div>
    </div>
  );
};

export default PodcastCard;

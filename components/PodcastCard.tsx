import Image from "next/image";

interface PodcastCardProps {
  poscatId?: number;
  description: string;
  imgURL: string;
  title: string;
}

const PodcastCard = ({ poscatId, description, imgURL, title }: PodcastCardProps) => {
  return <div className="cursor-pointer">
    <figure className="flex flex-col gap-2">
        Image here
    </figure>
  </div>;
};

export default PodcastCard;

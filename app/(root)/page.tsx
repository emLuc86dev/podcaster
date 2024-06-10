import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcast</h1>
        {podcastData.map(({ id, description, imgURL, title }) => {
          return (
          <PodcastCard 
          key={id}
          imgURL={imgURL}
          description={description}
          title={title}
          poscatId={+id}
          />)
        })}
      </section>
    </div>
  );
};

export default Home;

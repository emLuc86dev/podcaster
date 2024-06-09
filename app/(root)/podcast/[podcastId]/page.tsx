type Props = {
  podcastId: string
}

const PodcastDetails = ({ params }: { params: Props }) => {
  return (
    <p className="text-white-1">
      Podcast details fro --- {params.podcastId}
    </p>
  )
}

export default PodcastDetails

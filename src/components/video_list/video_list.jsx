import VideoItem from 'components/video_item/video_item';
import styles from 'components/video_list/video_list.module.css';

const VideoList = ({ videos }) => {
  return (
    <>
      <div className={styles.videoListContainer}>
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default VideoList;

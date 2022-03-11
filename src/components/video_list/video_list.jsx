import VideoItem from 'components/video_item/video_item';
import styles from 'components/video_list/video_list.module.css';

const VideoList = ({ videos, onClickVideo }) => {
  return (
    <>
      <div className={styles.videoListContainer}>
        {videos.map(video => (
          <VideoItem key={video.id} video={video} onClickVideo={onClickVideo} />
        ))}
      </div>
    </>
  );
};

export default VideoList;

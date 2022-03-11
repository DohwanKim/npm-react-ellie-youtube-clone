import styles from 'components/video_item/video_item.module.css';

const VideoItem = props => {
  return (
    <>
      <div className={styles.videoItem}>
        <img src={props.video.snippet?.thumbnails.medium.url} alt="" />
        <div className={styles.videoInfo}>
          <div className={styles.videoTitle}>{props.video.snippet?.localized?.title ?? ''}</div>
          <div className={styles.videoSubTitle}>{props.video.snippet?.channelTitle ?? ''}</div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;

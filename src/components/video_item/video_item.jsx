import styles from 'components/video_item/video_item.module.css';

const VideoItem = ({ video, onClickVideo, isSideItem }) => {
  return (
    <>
      <div className={`${styles.videoItem} ${isSideItem ? styles.sideItem : ''}`} onClick={() => onClickVideo(video)}>
        <img src={video.snippet?.thumbnails.medium.url} alt="" />
        <div className={styles.videoInfo}>
          <div className={styles.videoTitle}>{video.snippet?.localized?.title ?? ''}</div>
          <div className={styles.videoSubTitle}>{video.snippet?.channelTitle ?? ''}</div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;

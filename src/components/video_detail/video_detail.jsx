import React from 'react';
import VideoItem from 'components/video_item/video_item';
import styles from 'components/video_detail/video_detail.module.css';

const VideoDetail = ({ videos, onClickVideo, selectedVideo }) => {
  return (
    <div className={styles.videoDetail}>
      <div className={styles.leftSide}>
        <iframe
          title="youtube"
          src={`http://www.youtube.com/embed/${selectedVideo.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <div className={styles.info}>
          <h3>{selectedVideo.snippet?.localized?.title ?? ''}</h3>
          <h4>{selectedVideo.snippet?.channelTitle ?? ''}</h4>
          <pre>{selectedVideo.snippet?.description ?? ''}</pre>
        </div>
      </div>
      <div className={styles.rightSide}>
        {videos.slice(10).map(video => (
          <VideoItem key={video.id} video={video} onClickVideo={onClickVideo} isSideItem={true} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;

import React from 'react';
import styles from 'components/video_detail/video_detail.module.css';

const VideoDetail = props => {
  return (
    <div className={styles.videoDetail}>
      <div>
        <div>video</div>
        <div>
          <h4>title</h4>
          <h5>subtitle</h5>
          <p>description</p>
        </div>
      </div>
      <div>
        <div>videoItem</div>
      </div>
    </div>
  );
};

export default VideoDetail;

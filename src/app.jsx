import React, { useCallback, useEffect, useState } from 'react';
import Header from 'components/header/header';
import VideoList from 'components/video_list/video_list';
import VideoDetail from 'components/video_detail/video_detail';
import styles from 'app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const onSearch = useCallback(searchValue => {
    youtube.search(searchValue).then(videos => setVideos(videos));
  }, []);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.container}>
      <Header onSearch={onSearch}>header</Header>
      <main>
        <VideoList videos={videos} />
        <VideoDetail />
      </main>
    </div>
  );
};

export default App;

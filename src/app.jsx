import React, { useCallback, useEffect, useState } from 'react';
import Header from 'components/header/header';
import VideoList from 'components/video_list/video_list';
import VideoDetail from 'components/video_detail/video_detail';
import styles from 'app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearch = useCallback(
    searchValue => {
      youtube.search(searchValue).then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
    },
    [youtube],
  );
  const onReset = useCallback(() => {
    setSelectedVideo(null);
  }, []);
  const onClickVideo = useCallback(item => {
    setSelectedVideo(item);
  }, []);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.container}>
      <Header onSearch={onSearch} onReset={onReset}>
        header
      </Header>
      <main>
        {!selectedVideo ? (
          <VideoList videos={videos} onClickVideo={onClickVideo} />
        ) : (
          <VideoDetail videos={videos} onClickVideo={onClickVideo} selectedVideo={selectedVideo} />
        )}
      </main>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import VideoList from 'components/video_list/video_list';
import VideoDetail from 'components/video_detail/video_detail';
import styles from 'app.module.css';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC5AlessBLI7rLq8mIq-15hrSnugEXdD9g',
      requestOptions,
    )
      .then(res => res.json())
      .then(data => setVideos(data.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.container}>
      <Header>header</Header>
      <main>
        <VideoList videos={videos} />
        <VideoDetail />
      </main>
    </div>
  );
};

export default App;

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    return await this.youtube
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then(res => res.data.items);
  }

  async search(query) {
    return await this.youtube
      .get('/search', {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 25,
          q: query,
        },
      })
      .then(res => res?.data?.items?.map(item => ({ ...item, id: item.id.videoId })) ?? []);
  }
}

export default Youtube;

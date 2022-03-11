class Youtube {
  constructor(key) {
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    return await fetch(
      `${this.baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(res => res.json())
      .then(data => data.items)
      .catch(error => console.log('error', error));
  }

  async search(query) {
    return await fetch(
      `${this.baseUrl}/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(res => res.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .catch(error => console.log('error', error));
  }
}

export default Youtube;

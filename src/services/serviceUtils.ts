class serviceUtils {
  asset_dir = "assets";
  timestamp = new Date().getTime();

  getImage(src: string) {
    console.log(`${this.asset_dir}/${src}`);
    return require(`${this.asset_dir}/${src}`);
  }

  urlHash(url: string) {
    return url.includes("?")
      ? `${url}&timestamp=${this.timestamp}`
      : `${url}?timestamp=${this.timestamp}`;
  }
}

let $serviceUtils = new serviceUtils();
export default $serviceUtils;

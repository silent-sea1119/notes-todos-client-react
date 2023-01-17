const { EventEmitter } = require("fbemitter");

class serviceUtils {
  asset_dir = "assets";
  timestamp = new Date().getTime();
  emitter = new EventEmitter();

  getImage(src: string) {
    console.log(`${this.asset_dir}/${src}`);
    return require(`${this.asset_dir}/${src}`);
  }

  urlHash(url: string) {
    return url.includes("?")
      ? `${url}&timestamp=${this.timestamp}`
      : `${url}?timestamp=${this.timestamp}`;
  }

  stateResolver(state: any, dataset: any): any {
    Object.entries(dataset).map((item) => (state[item[0]] = item[1]));
  }
}

let $serviceUtils = new serviceUtils();
export default $serviceUtils;

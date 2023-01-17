import axios from "axios";
import { API_VERSION, API_BASE_URL } from "env";
import { $serviceUtils as $utils } from "services";

interface IServiceType {
  fetch: (url: string, option: optionType) => Promise<any>;
  push: (url: string, option: optionType) => Promise<any>;
  update: (url: string, option: optionType) => Promise<any>;
  remove: (url: string, option: optionType) => Promise<any>;
  handleErrors: (err: any) => Promise<any>;
  getHeaders: (attach: boolean) => any;
  injectTokenInterceptor: () => Promise<any>;
}

// SERVIVE TYPES
type optionType = {
  payload?: any;
  resolve?: boolean;
  is_attach?: boolean;
};

// SERVICE API CLSS
class serviceApi implements IServiceType {
  private base_url: string = API_BASE_URL;
  private base_version: string = API_VERSION;

  // SKELETAL REQUEST TEMPLATE
  private requestSetup() {}

  // INSTANTIATE BASE API URL
  constructor() {
    axios.defaults.baseURL = `${this.base_url}${this.base_version}`;
    this.injectTokenInterceptor();
  }

  // GET API REQUEST
  async fetch(
    url: string,
    option: optionType = { resolve: true }
  ): Promise<any> {
    let api_url = $utils.urlHash(url);

    try {
      let response = await axios.get(api_url, this.getHeaders());
      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(
    url: string,
    { payload = {}, resolve = true, is_attach = false }: optionType
  ): Promise<any> {
    try {
      let response = await axios.post(url, payload, this.getHeaders(is_attach));

      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // UPDATE API REQUEST
  async update(
    url: string,
    { payload = {}, resolve = true, is_attach = false }: optionType
  ): Promise<any> {
    try {
      let response = await axios.put(url, payload, this.getHeaders(is_attach));
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(
    url: string,
    option: optionType = { payload: {}, resolve: true }
  ): Promise<any> {
    try {
      let response = await axios.delete(url, {
        data: option.payload,
        ...this.getHeaders(),
      });

      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // HANDLE API REQUEST ERRORS
  async handleErrors(err: any): Promise<any> {
    return await err.response?.data;
  }

  // SETUP REQUEST
  getHeaders(attach = false): any {
    // @ts-ignore
    let userPayload = JSON.parse(localStorage.getItem("NothyAuthPayload"));
    let token = userPayload ? userPayload.token : null;

    return attach
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
  }

  // AXIOS INTERCEPTOR
  async injectTokenInterceptor(): Promise<any> {
    axios.interceptors.request.use((config) => config);

    axios.interceptors.response.use(
      async (response) => await response,

      // ERROR RESPONSE
      async (error) => {
        const originalConfig = error.config;

        if (error.response) {
          if (error.response.status === 403 && !originalConfig._retry) {
            originalConfig._retry = true;

            localStorage.clear();
            window.location.href = "/login";

            return axios(originalConfig);
          }
        }

        return Promise.reject(error);
      }
    );
  }
}

let $serviceApi = new serviceApi();
export default $serviceApi;

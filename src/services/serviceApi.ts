import axios from "axios";
import { API_VERSION, API_BASE_URL } from "env";
import { $serviceUtils as $utils } from "services";

interface apiType {
  url: string;
  makeRequest: () => any;
  appendToBase: (url: string) => string;
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
class serviceApi implements apiType {
  url: string = "";

  // INSTANTIATE BASE API URL
  constructor() {
    axios.defaults.baseURL = `${API_BASE_URL}${API_VERSION}`;
    this.injectTokenInterceptor();
  }

  // MIGHT BE DEPRECIATED
  makeRequest(): serviceApi {
    axios.defaults.baseURL = `${API_BASE_URL}${API_VERSION}`;
    this.injectTokenInterceptor();
    return this;
  }

  // APEND URL TO BASE API
  appendToBase(url: string): string {
    return (this.url += url);
  }

  // GET API REQUEST
  async fetch(
    url: string,
    option: optionType = { resolve: true }
  ): Promise<any> {
    let api_url = $utils.urlHash(this.appendToBase(url));

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
    option: optionType = { payload: null, resolve: true, is_attach: false }
  ): Promise<any> {
    try {
      let response = await axios.post(
        this.appendToBase(url),
        option.payload,
        this.getHeaders(option.is_attach)
      );
      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // UPDATE API REQUEST
  async update(
    url: string,
    option: optionType = { payload: null, resolve: true, is_attach: false }
  ): Promise<any> {
    try {
      let response = await axios.put(
        this.appendToBase(url),
        option.payload,
        this.getHeaders(option.is_attach)
      );
      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(
    url: string,
    option: optionType = { payload: null, resolve: true }
  ): Promise<any> {
    try {
      let response = await axios.delete(this.appendToBase(url), {
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
    return err.response?.data;
  }

  // SETUP REQUEST
  getHeaders(attach = false): any {
    return attach
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("gradelyAuthToken")}`,
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("gradelyAuthToken")}`,
          },
        };
  }

  // AXIOS INTERCEPTOR
  async injectTokenInterceptor(): Promise<any> {
    axios.interceptors.request.use((config) => config);

    axios.interceptors.response.use(
      async (response) => {
        return await response;
      },

      // ERROR RESPONSE
      async (error) => {
        const originalConfig = error.config;

        if (error.response) {
          if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            // GENERATE NEW TOKEN
            // store.dispatch("auth/generateTokenSet");
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

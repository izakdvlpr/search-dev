import axios from "axios";

import IUserInfo from "../interfaces/UserInfo";
import IUserRepositories from "../interfaces/UserRepositories";

const API_URL = "https://api.github.com";

export default class Github {
  static getRepositories(name: string | any) {
    return axios.get<IUserRepositories[]>(`${API_URL}/users/${name}/repos`);
  }

  static getUser(name: string | any) {
    return axios.get<IUserInfo>(`${API_URL}/users/${name}`);
  }
}

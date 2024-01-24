import axios, { AxiosResponse } from "axios";

interface Options {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

const baseURL = "https://free-nba.p.rapidapi.com/";
const apiKey = "72c266f0damsha41f811977098d9p14af06jsn817eccf2211c";

const dataProvider = async <T>(endpoint: string): Promise<T> => {
  const url = `${baseURL}${endpoint}`;

  const options: Options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };

  try {
    const response: AxiosResponse<T> = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default dataProvider;

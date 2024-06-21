import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com", // Base URL for the GitHub API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiCall = async (callback) => {
  try {
    const res = await callback();
    return {
      status: res.status,
      data: res.data,
      totalCount: res.headers?.["x-total-count"],
    };
  } catch (err) {
    console.error(
      "API Call Error:",
      err.response ? err.response.data : err.message
    );
    return {
      status: false,
      message: err?.response?.data?.message || "Unknown Error",
    };
  }
};

const get = (url) => axiosInstance.get(url);

export const getPostFeeds = (start = 0) =>
  handleApiCall(() => get(`/users?per_page=10&since=${start}`));

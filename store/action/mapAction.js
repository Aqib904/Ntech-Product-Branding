import { globalUrl } from "../../components/Url";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var map = RepositoryFactory.get("map");
export const GetMapVideos = () => async (dispatch) => {
  try {
    const { data } = await map.getMapVideos();
    if (data != undefined) {
      dispatch({
        type: "MAP_VIDEOS",
        payload: data,
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export const getDashboardVideos = (page) => async (dispatch) => {
  console.log("i am here")
  try {
    const apiUrl = `${globalUrl}/Videos/get-videos-by-page-number?PageNo=${page}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "DASHBOARD_VIDEOS",
        payload: data,
      });
      console.log(data, "data");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export const getServiceProsVideos = (page) => async (dispatch) => {
  try {
    const apiUrl = `${globalUrl}/Videos/get-service-videos-by-page-number?PageNo=${page}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "DASHBOARD_VIDEOS",
        payload: data,
      });
      console.log(data, "data");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const getUtilitiesVideos = (page) => async (dispatch) => {
  try {
    const apiUrl = `${globalUrl}/Videos/get-utilities-videos-by-page-number?PageNo=${page}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "UTILITY_VIDEOS",
        payload: data,
      });
      console.log(data, "data");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const getCPOsVideos = (page) => async (dispatch) => {
  try {
    const apiUrl = `${globalUrl}/Videos/get-CPOs-videos-by-page-number?PageNo=${page}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "CPOS_VIDEOS",
        payload: data,
      });
      console.log(data, "data");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const getGovVideos = (page) => async (dispatch) => {
  try {
    const apiUrl = `${globalUrl}/Videos/get-gov-videos-by-page-number?PageNo=${page}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "GOV_VIDEOS",
        payload: data,
      });
      console.log(data, "data");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


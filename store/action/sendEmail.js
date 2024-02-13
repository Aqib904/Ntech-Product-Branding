import { RepositoryFactory } from "../../repository/RepositoryFactory";

export const sendEmailAction = (payload, onSuccess) => async (dispatch) => {
  try {
    const apiUrl =
      "https://uat.api.vehya.com/api/contractor-service/v1/newsPageSubscription";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      onSuccess();
      alert("Email subscribe successfully!");
    } else {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

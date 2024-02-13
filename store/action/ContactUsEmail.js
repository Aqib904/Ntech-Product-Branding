export const contactUsAction = (payload, onSuccess) => async (dispatch) => {
    try {
      const apiUrl =
        "https://api-dev.vehya.com/api/contractor-service/v1/email/contactUsEmail";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        onSuccess();
        alert("Thanks for connecting with us");
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
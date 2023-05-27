const TEST_BASE_URL = "https://jsonplaceholder.typicode.com";
const BARD_BASE_URL = "";
const ERROR_MSG = "ERROR!";

const getTestAPI = async (value) => {
  console.log("getTestAPI", value);

  try {
    const response = await fetch(`${TEST_BASE_URL}/posts`);
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return error?.message || ERROR_MSG;
  }
};

const getShortStory = async (value) => {
  try {
    const response = await fetch(BARD_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
    if (response.code === -1) {
      throw new Error("API request failed");
    }
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return error?.message || ERROR_MSG;
  }
};

export { getTestAPI, getShortStory };

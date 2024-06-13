export const getPlantList = async () => {
  try {
    const response = await fetch(
      'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
    );
    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.error('Error fetching plant list:', error);
    return [];
  }
};

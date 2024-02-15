export const getIncidents = async () => {
  const response = await fetch(import.meta.env.PUBLIC_INCIDENTS_API);
  const data = await response.json();
  return data;
};

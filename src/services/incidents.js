export const getIncidents = async () => {
  const response = await fetch("https://dds-tpa.onrender.com/incidents");
  const data = await response.json();
  return data;
};

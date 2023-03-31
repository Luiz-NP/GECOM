export const dateGenerator = () => {
  const date = new Date().toLocaleDateString().split('/');
  const day = date[0];
  const month = date[1];
  const year = date[2];
  const hour = new Date().toLocaleTimeString();

  return {
      day,
      month,
      year,
      hour
  }
}
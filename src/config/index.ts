function initializeConfig() {
  const config = {
    common: {
      apiUrl: import.meta.env.VITE_API_URL
    }
  };
  return config;
}

const config = initializeConfig();

export default config;
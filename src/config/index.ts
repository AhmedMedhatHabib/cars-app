function initializeConfig() {
  const config = {
    common: {
      apiUrl: process.env.REACT_APP_API_UR
    }
  };
  return config;
};

const config = initializeConfig();

export default config;
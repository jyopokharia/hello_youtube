const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry); // largest contentful
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
// this file is a bs a built-in utility function used to measure, capture,
// and analyze the real-world performance of a web application

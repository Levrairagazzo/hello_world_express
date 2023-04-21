const fetchData = async () => {
    try {
      const response = await fetch('https://render-test-uvan.onrender.com');
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();
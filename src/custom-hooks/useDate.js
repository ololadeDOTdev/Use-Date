const useDate = () => {
  const date = new Date();

  const getDay = () => {
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days.filter((curr, index) => index === day)[0];
  };

  const getMonth = () => {
    let month = date.getMonth();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Decemebr",
    ];
    return months.filter((curr, index) => index === month)[0];
  };

  function createCustomDate(year, month, day) {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    month = month - 1;
    let customDate = new Date(year, month, day);

    return customDate.toLocaleDateString("en-Us", options);
  }

  return { date, getDay, getMonth, createCustomDate };
};

export default useDate;

const getLaserSetting = (ask) => {
  if (ask === "please") {
    return "OFF";
  }
  return "ON";
};

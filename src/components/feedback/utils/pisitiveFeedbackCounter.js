const countPositiveFeedbackPercentage = (total, good) => {
  return Math.floor((100 / total) * good);
};

export default countPositiveFeedbackPercentage;

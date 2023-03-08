const StatisticList = ({ goodStatis, neutralStatis, badStatis }) => {
  return (
    <ul>
      <li>
        <p>Good:</p>
        <span>{goodStatis}</span>
      </li>
      <li>
        <p>Neutral:</p>
        <span>{neutralStatis}</span>
      </li>
      <li>
        <p>Bad:</p>
        <span>{badStatis}</span>
      </li>
    </ul>
  );
};

export default StatisticList;

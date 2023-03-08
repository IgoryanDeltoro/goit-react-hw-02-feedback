import { Component } from 'react';
import Button from './feedback/button/Button';
import StatisticList from './feedback/StatisticList';
import { FirstTitle, SecondTitle } from './feedback/Title';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  counterGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  counterNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  counterBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => console.log(good));
  };
  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <section>
        <div>
          <FirstTitle />
          <Button
            onGood={this.counterGoodFeedback}
            onNeutral={this.counterNeutralFeedback}
            onBad={this.counterBadFeedback}
          />
          <SecondTitle />
          <StatisticList
            goodStatis={this.state.good}
            neutralStatis={this.state.neutral}
            badStatis={this.state.bad}
          />
        </div>
      </section>
    );
  }
}

export default Feedback;

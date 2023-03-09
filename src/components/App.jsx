import { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions';
import Statistic from './feedback/statistic/Statistic';
import Section from './feedback/section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGoodFeedback = () => {
    this.setState(({ good }) => ({ good: good + 1 }));
  };
  counterNeutralFeedback = () => {
    this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
  };
  counterBadFeedback = () => {
    this.setState(({ bad }) => ({ bad: bad + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    return Math.floor((100 / total()) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGood={this.counterGoodFeedback}
            onNeutral={this.counterNeutralFeedback}
            onBad={this.counterBadFeedback}
            total={this.countTotalFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            percentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;

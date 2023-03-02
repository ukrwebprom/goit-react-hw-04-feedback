import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = (option) => {
    switch(option) {
      case "Good":
        setGood(state => state += 1 );
        break;
      case "Neutral":
        setNeutral(state => state += 1 );
        break;
      case "Bad":
        setBad(state => state += 1 );
        break;
      default:
        return;
    }
  }

  const total = () => good + neutral + bad;

  return (
    <div className='container'>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={Math.round(good * 100 / total())}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

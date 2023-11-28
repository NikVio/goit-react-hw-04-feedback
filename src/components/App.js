import { GlobalStyle } from 'GlobalStyle';
import { useState } from 'react';
import { BoxFeedback } from './App.styled';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = evt => {
    const targetValue = evt.target.textContent.toLowerCase();

    if (targetValue === 'good') {
      setGood(good => good + 1);
    }
    if (targetValue === 'neutral') {
      setNeutral(neutral => neutral + 1);
    }
    if (targetValue === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <BoxFeedback>
      <Section
        title="Please leave feedback"
        onLeaveFeedback={handleFeedback}
      ></Section>
      <Section
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      ></Section>
      <GlobalStyle />
    </BoxFeedback>
  );
};

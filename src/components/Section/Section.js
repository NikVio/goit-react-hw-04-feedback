import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {title === 'Please leave feedback' ? (
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

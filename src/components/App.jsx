import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export const App = () => {
  return (
    <div class='boxProfile'>
      <Section title="Please leave you feedback">
      <FeedbackOptions title= "Good"/>
      </Section>
      
      <Section title="Statistics">
      <Statistics/>      
      </Section>
    </div>
  );
};

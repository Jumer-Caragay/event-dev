import React from 'react';
import styles from './FAQ.module.css';
import TextSection from '../components/common/TextSection';
import TextHeader from '../components/common/TextHeader';
import questions from './data/FAQ.json';
import clouds from '../assets/clouds.png';

const FAQ = () => {
  function renderFAQSections(sectionNum) {
    const { body } = questions;
    return body[sectionNum].questions.map((question) => { // eslint-disable-line arrow-body-style
      if (question.title === 'MLH') {
        return (
          <div key={question.title} className={styles.question}>
            <TextHeader fontSize="1.25rem" color="black">Is there a code of conduct?</TextHeader>
            <TextSection fontSize="1.25rem" color="black">
              Please refer to <a rel="noopener noreferrer" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank"> the MLH code of conduct.</a>
            </TextSection>
          </div>
        );
      }
      return (
        <div key={question.title} className={styles.question}>
          <TextHeader fontSize="1.25rem" color="black">{question.title}</TextHeader>
          <TextSection fontSize="1.25rem" color="black">{question.answer}</TextSection>
        </div>
      );
    });
  }

  return (
    <div className={styles.faq}>
      <h1 id="faq" className={styles.faqHeader}>FAQ</h1>
      <div className={styles.faqWrapper}>
        <section className={styles.faqSection}>
          {renderFAQSections(0)}
        </section>

        <section className={styles.faqSection}>
          {renderFAQSections(1)}
        </section>
      </div>
      <img className={styles.cloud_image} src={clouds} alt="clouds" />
    </div>
  );
};

export default FAQ;

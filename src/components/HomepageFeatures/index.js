import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '「 Simple. 」',
    description: (
      <>
        Simplicity drives clarity.
      </>
    ),
  },
  {
    title: '「 Efficient. 」',
    description: (
      <>
        Efficiency is key.
      </>
    ),
  },
  {
    title: '「 Record. 」',
    description: (
      <>
        Code is the record of logic.
      </>
    ),
  },
];

function Feature({title, description}) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <div className={styles.featureBlock}>
            <div className={styles.featureTitle}>
              <h3>{title}</h3>
            </div>
            <div className={styles.featureContent}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

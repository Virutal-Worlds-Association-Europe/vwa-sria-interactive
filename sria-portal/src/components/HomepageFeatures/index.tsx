import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Applications & Opportunities',
    emoji: '🎯',
    description: (
      <>
        Explore Virtual Worlds applications across seven key sectors: Industry, Healthcare,
        Media, Arts & Culture, Education, Security, and Cities & Public Administration.
      </>
    ),
    link: '/docs/applications',
  },
  {
    title: 'Technical Outlook',
    emoji: '⚙️',
    description: (
      <>
        Discover the technology challenges spanning Visualisation, Interaction, Authoring,
        Standards, Digital Twins, and AI for Virtual Worlds.
      </>
    ),
    link: '/docs/technology',
  },
  {
    title: 'Socio-Economic Impact',
    emoji: '🌍',
    description: (
      <>
        Understand the societal and economic implications including Human Rights, Governance,
        Economics, Sustainability, and Trust in Virtual Worlds.
      </>
    ),
    link: '/docs/socio-economic',
  },
  {
    title: 'European Context',
    emoji: '🇪🇺',
    description: (
      <>
        Learn about the European research and innovation landscape for Data, Infrastructure,
        and Optics that enables Virtual Worlds.
      </>
    ),
    link: '/docs/context',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <div className={styles.featureEmoji}>{emoji}</div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Explore the Strategic Research Agenda
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

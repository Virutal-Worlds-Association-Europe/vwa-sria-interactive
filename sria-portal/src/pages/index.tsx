import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import { FaCog, FaFlag, FaGlobeEurope, FaRocket } from 'react-icons/fa';
import { FaGraduationCap, FaHeartPulse, FaIndustry, FaUsers } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Virtual Worlds SRIA
          </Heading>
          <p className={styles.heroSubtitle}>
            Solving Real World Problems
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.exploreButton}
              to="/docs/introduction">
              Explore the SRIA <HiArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

type StrategyCardProps = {
  title: string;
  icon: ReactNode;
  description: string;
  link: string;
};

function StrategyCard({title, icon, description, link}: StrategyCardProps) {
  return (
    <Link to={link} className={styles.strategyCard}>
      <div className={styles.strategyIcon}>{icon}</div>
      <h3 className={styles.strategyTitle}>{title}</h3>
      <p className={styles.strategyDescription}>{description}</p>
    </Link>
  );
}

type VisionCardProps = {
  title: string;
  icon: ReactNode;
  description: string;
};

function VisionCard({title, icon, description}: VisionCardProps) {
  return (
    <div className={styles.visionCard}>
      <div className={styles.visionIcon}>{icon}</div>
      <h3 className={styles.visionTitle}>{title}</h3>
      <p className={styles.visionDescription}>{description}</p>
    </div>
  );
}

function StrategicAgenda() {
  return (
    <section className={styles.strategicSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Explore the Strategic Research Agenda
        </Heading>
        <div className={styles.strategyGrid}>
          <StrategyCard
            title="Applications & Opportunities"
            icon={<FaFlag />}
            description="Explore Virtual Worlds applications across seven key sectors: Industry, Healthcare, Media, Arts & Culture, Education, Security, and Cities & Public Administration."
            link="/docs/applications"
          />
          <StrategyCard
            title="Technical Outlook"
            icon={<FaCog />}
            description="Discover the technology challenges spanning Visualisation, Interaction, Authoring, Standards, Digital Twins, and AI for Virtual Worlds."
            link="/docs/technology"
          />
          <StrategyCard
            title="Socio-Economic Outlook"
            icon={<FaGlobeEurope />}
            description="Understand the societal and economic implications including Human Rights, Governance, Economics, Sustainability, and Trust in Virtual Worlds."
            link="/docs/socio-economic"
          />
          <StrategyCard
            title="European Context"
            icon={<FaRocket />}
            description="Learn about the European research and innovation landscape for Data, Infrastructure, and Optics that enables Virtual Worlds."
            link="/docs/context"
          />
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className={styles.visionSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Vision of the Future
        </Heading>
        <div className={styles.visionGrid}>
          <VisionCard
            title="Industry & Innovation"
            icon={<FaIndustry />}
            description="Enhanced collaboration and productivity through virtual workspaces that transcend geographical boundaries."
          />
          <VisionCard
            title="Healthcare & Well-being"
            icon={<FaHeartPulse />}
            description="Advanced medical training and better patient care through collaborative diagnostics in virtual environments."
          />
          <VisionCard
            title="Education & Training"
            icon={<FaGraduationCap />}
            description="Immersive learning experiences that safely and efficiently upskill workforces through realistic simulations."
          />
          <VisionCard
            title="Social Inclusion"
            icon={<FaUsers />}
            description="Communities in virtual spaces where individuals connect, share experiences, and build relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="SRIA Overview"
      description="Strategic Research and Innovation Agenda for Virtual Worlds - Solving Real World Problems">
      <HomepageHeader />
      <main>
        <StrategicAgenda />
        <VisionSection />
      </main>
    </Layout>
  );
}
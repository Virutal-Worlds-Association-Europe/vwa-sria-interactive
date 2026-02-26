import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: string;
}

interface CategoryCardsProps {
  items: CategoryItem[];
  baseUrl?: string;
}

export default function CategoryCards({ items, baseUrl = '' }: CategoryCardsProps): React.ReactElement {
  return (
    <div className={styles.categoryContainer}>
      {items.map((item) => {
        const fullLink = baseUrl ? `${baseUrl}/${item.link}` : item.link;

        return (
          <div
            key={item.id}
            className={styles.categoryCard}
          >
            <div className={styles.iconContainer}>
              <i className={item.icon || 'fa-regular fa-calendar'} />
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
            <Link to={fullLink} className={styles.learnMore}>
              Learn More <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
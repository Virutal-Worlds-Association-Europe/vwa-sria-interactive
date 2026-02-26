import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/PaginatorNavLink';

export default function PaginatorNavLink(props: Props): ReactNode {
  const {permalink, title, subLabel, isNext} = props;
  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        'pagination-nav__link--pill',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}>
      {!isNext && (
        <div className="pagination-nav__icon pagination-nav__icon--prev">
          <i className="fa-solid fa-arrow-left" />
        </div>
      )}
      <div className="pagination-nav__content">
        {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
        <div className="pagination-nav__label">{title}</div>
      </div>
      {isNext && (
        <div className="pagination-nav__icon pagination-nav__icon--next">
          <i className="fa-solid fa-arrow-right" />
        </div>
      )}
    </Link>
  );
}

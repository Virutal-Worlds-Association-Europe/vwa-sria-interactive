import React from 'react';
import TOCItems from '@theme-original/TOCItems';
import type TOCItemsType from '@theme/TOCItems';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof TOCItemsType>;

/**
 * Wraps the default TOCItems to append a "Provide Feedback" link
 * at the bottom of the table of contents sidebar.
 */
export default function TOCItemsWrapper(props: Props): React.ReactElement {
  return (
    <>
      <TOCItems {...props} />
      <li className="table-of-contents__link-wrapper" style={{ marginTop: '8px' }}>
        <a
          href="#feedback"
          className="table-of-contents__link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--ifm-font-color-base)',
            fontWeight: 600,
          }}
        >
          <i className="fa-solid fa-comments" style={{ fontSize: '0.85em' }} />
          Provide Feedback
        </a>
      </li>
    </>
  );
}
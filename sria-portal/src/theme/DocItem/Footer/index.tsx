import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import FeedbackForm from '@site/src/components/FeedbackForm';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): React.ReactElement {
  const {metadata} = useDoc();

  // Extract section information from the document
  const getSection = () => {
    // Get the file path from metadata
    const sourcePath = metadata.source || '';

    // Extract section from file path (e.g., "01-applications/1a-industry.md")
    const pathMatch = sourcePath.match(/\/(\d+[a-z]-[a-z-]+)\.md$/i);
    if (pathMatch) {
      return pathMatch[1];
    }

    // Check if it's the introduction
    if (sourcePath.includes('introduction.md')) {
      return 'introduction';
    }

    // Fallback
    return 'general';
  };

  const getSectionTitle = () => {
    // Use the document title from frontmatter or default
    return metadata.title || 'This Section';
  };

  const section = getSection();
  const sectionTitle = getSectionTitle();

  return (
    <>
      <Footer {...props} />
      <FeedbackForm section={section} sectionTitle={sectionTitle} />
    </>
  );
}

// components/HtmlRenderer.js
import React from 'react';
import DOMPurify from 'dompurify';

const HtmlRenderer = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}   className="mt-4 text-clr" />
  );
};

export default HtmlRenderer;

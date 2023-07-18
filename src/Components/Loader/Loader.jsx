import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={271}
    height={260}
    viewBox="0 0 271 260"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="11" y="4" rx="12" ry="12" width="243" height="253" />
  </ContentLoader>
);

export const LoaderSingle = (props) => (
  <ContentLoader
    speed={2}
    width={1140}
    height={168}
    viewBox="0 0 1200 168"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1200" height="240" />
  </ContentLoader>
);

export const LoaderSingleMobile = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={168}
    viewBox="0 0 1200 168"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="345" height="345" />
  </ContentLoader>
);

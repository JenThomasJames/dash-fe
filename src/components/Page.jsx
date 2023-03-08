import React from "react";

const Page = ({ children, pageStyle }) => {
  const styles = "min-h-screen min-w-full flex " + pageStyle;
  return <div className={styles}>{children}</div>;
};

export default Page;

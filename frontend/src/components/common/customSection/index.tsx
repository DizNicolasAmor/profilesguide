import React, { FC } from "react";

export interface IHome {
  title: string;
  titleId: string;
}

const CustomSection: FC<IHome> = ({ title, titleId, children }) => (
  <section aria-labelledby={titleId}>
    <h1 className="text-center my-5" id={titleId}>
      {title}
    </h1>
    {children}
  </section>
);

export default CustomSection;

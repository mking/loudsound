import * as React from "react";
import "./Category.scss";
import * as classNames from "classnames";

export interface CategoryProps {
  className?: string;
}

export default function Category({ className }: CategoryProps) {
  return (
    <div className={classNames("category", className)}>
      <h1>Category X</h1>
      <p>blah blah blah</p>
    </div>
  );
}

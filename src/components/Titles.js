import React from "react";
import { useState, useEffect } from "react";

import "../css/Titles.css"

export const Titles = ({
  showTitles,
  saveSelectedTitle,
  handleTitlesDisplay,
  handleDocumentModal
}) => {
  
  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    fetch("/documents").then(
      res => res.json()
    ).then(
      data => {
        setTitles(data)
      }
    )
  }, []);

  return (
    <div className="titles-page">
      <h1 className="site-name">Wiki Docs</h1>
      <div className={ showTitles ? "titles" : "titles hidden"}>
        {
          titles.map(title => {
            return (
              <ul
                key={titles.indexOf(title)}
                className="title"
                onClick={() => {
                  saveSelectedTitle(title);
                  handleDocumentModal();
                  handleTitlesDisplay();
                }}
              >
                {title}
              </ul>
            )
          })
        }
      </div>
    </div>
  )
};

import React from "react";
import "./ItBerries.css";

const ItBerries = () => {
  return (
    <div className="itberries-section">
      <header className="itberries-header">
        <h2>IT BERRIES</h2>
      </header>

      <div className="itberries-content">
        <p className="itberries-text">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.
        </p>

        <div className="itberries-logo">
          <p>IT</p>
        </div>
      </div>

      <p className="readmore">Read More</p>
    </div>
  );
};

export default ItBerries;

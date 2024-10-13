import React from "react";
import Card from "@/components/Card";

import cardData from "@/constants/cards";

const ContentCard: React.FC = () => {
  return (
    <div
      id="contentcard"
      className="mt-14 md:mt-40 grid grid-cols-1 md:grid-cols-3 items-start content-start flex-wrap relative z-10"
    >
      {cardData.cards.map((card, i) => (
        <div key={i} className="h-full">
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            darkIcon={card.darkIcon}
          />
        </div>
      ))}
    </div>
  );
};
export default ContentCard;

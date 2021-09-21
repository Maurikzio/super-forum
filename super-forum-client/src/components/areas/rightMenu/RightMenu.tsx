import { useState, useEffect } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { getTopCategories } from "../../../services/DataService";
import TopCategory from "./TopCategory";
import groupdBy from "lodash/groupBy";
import "./RightMenu.css";

const RightMenu = () => {
  const { width } = useWindowDimensions();
  const [topCategories, setTopCategories] = useState<Array<JSX.Element> | undefined>();

  useEffect(() => {
    getTopCategories().then((res) => {
      const topCatThreads = groupdBy(res, "category");
      const topElements = [];
      for (let key in topCatThreads) {
        const currentTop = topCatThreads[key];
        topElements.push(<TopCategory key={key} topCategories={currentTop} />);
      }
      setTopCategories(topElements);
    });
  }, []);

  if (width <= 768) {
    return null;
  }

  return <div className="rightmenu rightmenu-conatiner">{topCategories}</div>;
};

export default RightMenu;

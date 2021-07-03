import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Sidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="sidebar">Sidebar</div>;
};

export default Sidebar;

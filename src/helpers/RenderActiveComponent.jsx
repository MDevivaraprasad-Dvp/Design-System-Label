import RenderBadge from "./RenderBadge.jsx";
import RenderButton from "./RenderButton.jsx";

const COMPONENTS_MAP = {
  Badge: RenderBadge,
  Button: RenderButton,
};

export default function RenderActiveComponent({ component }) {
  console.log(component);
  const Component = COMPONENTS_MAP[component];
  if (!Component) {
    return <div>Component not found</div>;
  }
  return <Component />;
}

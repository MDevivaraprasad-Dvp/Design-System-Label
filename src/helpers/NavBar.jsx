import Badge from "../components/Badge.jsx";

export default function renderNavBar({
  components,
  activeComponent,
  setActiveComponent,
}) {
  return (
    <nav className="nav-bar">
      {components.map((comp) => {
        return (
          <Badge
            key={comp.name}
            onClick={() => setActiveComponent(comp.component)}
            variant={activeComponent === comp.name ? "success" : "brand"}
            size="large"
          >
            {comp.name}
          </Badge>
        );
      })}
    </nav>
  );
}

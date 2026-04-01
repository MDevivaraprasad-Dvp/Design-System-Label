function Badge({
  variant = "neutral",
  size = "medium",
  children = "Label",
  onClick = () => {},
}) {
  return (
    <div
      className={["label-container", `label-${variant}`, `label-${size}`].join(
        " ",
      )}
      onClick={onClick}
    >
      <span>{children}</span>
    </div>
  );
}

export default Badge;

export default function Button({
  children = "Button CTA",
  leftIcon,
  rightIcon,
  onClick = () => {},
}) {
  return (
    <div onClick={onClick} className="button-container button-primary">
      {leftIcon && <span className="button-icon-left">{leftIcon}</span>}
      <button className="button ">{children}</button>
      {rightIcon && <span className="button-icon-right">{rightIcon}</span>}
    </div>
  );
}

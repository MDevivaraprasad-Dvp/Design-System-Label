import Badge from "../components/badge.jsx";

const LABEL_DATA = [
  { variant: "neutral", sizes: ["small", "medium", "large"] },
  { variant: "error", sizes: ["small", "medium", "large"] },
  { variant: "success", sizes: ["small", "medium", "large"] },
  { variant: "warning", sizes: ["small", "medium", "large"] },
  { variant: "brand", sizes: ["small", "medium", "large"] },
];

export default function RenderBadge() {
  return (
    <>
      {LABEL_DATA.map(
        ({ variant, sizes }) =>
          sizes.length > 0 && (
            <div style={{ display: "flex", gap: "24px" }} key={variant}>
              {sizes.map((size, idx) => (
                <Badge variant={variant} size={size} key={idx}>
                  Label Components
                </Badge>
              ))}
            </div>
          ),
      )}
    </>
  );
}

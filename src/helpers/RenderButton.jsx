import Button from "../components/Button";

const LeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M8.3337 12.6806L3.43547 15.4224L4.52945 9.9166L0.408203 6.10542L5.98254 5.44449L8.3337 0.347221L10.6848 5.44449L16.2591 6.10542L12.1379 9.9166L13.2319 15.4224L8.3337 12.6806ZM8.3337 11.0889L11.2828 12.7397L10.6241 9.42479L13.1054 7.13014L9.74925 6.73218L8.3337 3.66321L6.9181 6.73218L3.5619 7.13014L6.04322 9.42479L5.38455 12.7397L8.3337 11.0889Z"
        fill="white"
      />
    </svg>
  );
};

const RightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.92549 12.3333L3.02726 15.0751L4.12124 9.56937L0 5.75819L5.57433 5.09726L7.92549 0L10.2766 5.09726L15.8509 5.75819L11.7297 9.56937L12.8237 15.0751L7.92549 12.3333ZM7.92549 10.7417L10.8746 12.3924L10.2159 9.07757L12.6972 6.78292L9.34105 6.38496L7.92549 3.31599L6.5099 6.38496L3.15369 6.78292L5.63501 9.07757L4.97635 12.3924L7.92549 10.7417Z"
        fill="white"
      />
    </svg>
  );
};

const BUTTON_DATA = [
  {
    variant: "primary",
    sizes: ["medium", "large", "xlarge", "2xlarge"],
  },
];

export default function RenderButton() {
  return (
    <>
      {BUTTON_DATA.map(({ variant, sizes }) => {
        return (
          <div className="button-playground-container">
            {sizes.map((size) => (
              <Button
                variant={variant}
                size={size}
                key={`${variant}-${size}`}
                leftIcon={<LeftIcon />}
                rightIcon={<RightIcon />}
              >
                Button CTA
              </Button>
            ))}
          </div>
        );
      })}
    </>
  );
}

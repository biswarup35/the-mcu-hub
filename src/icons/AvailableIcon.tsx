const AvailableIcon = ({ color }: { color?: string | null | undefined }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 128 128"
  >
    <path
      fill={color ?? "#FFFCFC"}
      d="M21 11h86v51.474c0 38.606-86 34.746-86 0V11z"
    />
    <ellipse
      cx="64.5"
      cy="104.5"
      fill={color ?? "#FFFCFC"}
      rx="26.5"
      ry="12.5"
    />
  </svg>
);

export default AvailableIcon;

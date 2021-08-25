interface Props {
  projectUrl: string;
  backgroundColor: string;
}

export const SiteLink = ({ projectUrl, backgroundColor }: Props) => {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="mx-2"
    >
      <svg
        className={`fill-current hover:text-${backgroundColor}`}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <circle cx="12px" cy="12px" r="12px"></circle>
        <path
          className="fill-current text-gray-100"
          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        />
      </svg>
    </a>
  );
};

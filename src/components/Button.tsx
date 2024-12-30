const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded"
    onClick={onClick}
  >
    {label}
  </button>
);
export default Button;

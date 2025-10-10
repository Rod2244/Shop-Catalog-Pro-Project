const Control = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default Control;

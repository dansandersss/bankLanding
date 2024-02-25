export default function Button({ styles }) {
  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outrline-none ${styles} rounded-[10px]`}
      >
        Get Started
      </button>
    </>
  );
}

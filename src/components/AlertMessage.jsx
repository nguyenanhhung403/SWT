export default function AlertMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="alert" data-testid="alert-message">
      {message}
      {/* Nút đóng alert nếu muốn */}
      {onClose && (
        <button
          style={{ marginLeft: "8px", cursor: "pointer" }}
          onClick={onClose}
        >
          x
        </button>
      )}
    </div>
  );
}

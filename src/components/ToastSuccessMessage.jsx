const ToastSuccessMessage = ({ result, type = "success" }) => {
  return (
    result.success && (
      <div className="toast toast-top toast-center z-1">
        <div className={`alert alert-${type}`}>
          <span>{result.message}</span>
        </div>
      </div>
    )
  );
};

export default ToastSuccessMessage;

const ToastSuccessMessage = ({ result }) => {
  return (
    result.success && (
      <div className="toast toast-top toast-center z-1">
        <div className="alert alert-success">
          <span>{result.message}</span>
        </div>
      </div>
    )
  );
};

export default ToastSuccessMessage;

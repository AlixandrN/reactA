// ErrorFallback
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p style={{ color: "red" }}>поле не должно превышать 10 символов</p>
      <p style={{ color: "red" }}>сократите введенный текст</p>
      {/* <pre>{error.message}</pre> */}
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
}

export default ErrorFallback;

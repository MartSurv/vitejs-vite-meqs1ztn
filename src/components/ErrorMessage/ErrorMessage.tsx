import "./ErrorMessage.css";

type ErrorMessageProps = {
  title: string;
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  message,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="error">{message}</div>
    </>
  );
};

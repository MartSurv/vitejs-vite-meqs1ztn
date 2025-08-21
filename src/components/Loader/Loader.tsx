import "./Loader.css";

type LoaderProps = {
  title?: string;
  message: string;
};

export const Loader: React.FC<LoaderProps> = ({ title, message }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      <div className="loading">{message}</div>
    </>
  );
};

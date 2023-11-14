import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Oops, there was an error!</div>;
}

export default ErrorPage;

import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const status = 200;

  //redirects
  if (status === 404) {
    return <Navigate to="/not-found" />;
  }

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Post {params.id}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

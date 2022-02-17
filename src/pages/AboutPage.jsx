import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for your product</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back home</Link>
        </p>
      </div>
    </Card>
  );
}

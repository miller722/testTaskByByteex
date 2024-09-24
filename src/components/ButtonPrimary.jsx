import { Button } from "react-bootstrap";

export default function ButtonPrimary({ description }) {
  return (
    <Button className="button-primary">
      {description}
      <img src="icons/arrow-button.svg" alt="arrow" srcset="" />
    </Button>
  );
}

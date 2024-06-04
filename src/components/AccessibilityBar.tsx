import { Container, Stack } from "react-bootstrap";

import { BsUniversalAccessCircle } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import Button from "react-bootstrap/Button"

const AccessibilityBar = () => {
  return (
    <div className="bg-info text-white">
      <Stack direction="horizontal" className="p-2">
        <FormCheckLabel htmlFor="custom-switch">
          <Stack direction="horizontal">
            <Form.Check type="switch" id="custom-switch" />
            <strong>Moldura</strong>
          </Stack>
        </FormCheckLabel>

        <Stack direction="horizontal" gap={3} className="ms-auto">
          <Button variant="light" className="p-1">
            <BsUniversalAccessCircle size={24} />
          </Button>
          <Button variant="light" className="p-1 w-1200">
            - A
          </Button>
          <Button variant="light" className="p-1">
            A+
          </Button>
          <Button variant="light" className="p-1">
            <BsUniversalAccessCircle size={24} />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default AccessibilityBar;

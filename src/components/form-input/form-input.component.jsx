import { Group, FormInpuLabel, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInpuLabel shrink={otherProps.value.length}>{label}</FormInpuLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
};

export default FormInput;

import { TextField } from "@mui/material";

function Input({ type = "text", name, label, register }) {
  return (
    <TextField type={type} label={label} {...register(name)} size="small" />
  );
}
export { Input };

import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

function Subscription() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box component="section" className="subscription">
      <Typography variant="h3" className="subscription__title">
        Read a free chapter
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className="subscription__description"
      >
        Making this the first true value generator on the Internet. It of over
        200 Latin words, combined with a handful.
      </Typography>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="subscription__form subscription-form"
      >
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          required
          className="subscription-form__input"
        />
        <Button
          type="submit"
          variant="contained"
          disabled
          className="subscription-form__ btn"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
export { Subscription };

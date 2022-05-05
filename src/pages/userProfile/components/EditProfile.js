import { Input, Button, Box, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import { StyledForm, Wrapper } from "./EditProfile.styled";

export default function EditProfile({ profile, onSaveprofile }) {
  const {
    bio = "",
    email = "",
    firstName = "",
    lastName = "",
    profileUrl = "",
  } = profile;

  const initialState = {
    bio,
    email,
    firstName,
    lastName,
    profileUrl,
  };

  const { onChange, onSubmit, values } = useForm(
    () => onSaveprofile(values),
    initialState
  );

  return (
    <Wrapper>
      <StyledForm
        action="#"
        className="flex-column flex-gap"
        onSubmit={onSubmit}
      >
        <Typography color="primary" variant="h1">
          Edit your Profile
        </Typography>
        <div className="flex flex-gap-2">
          <Input
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            className="my-1 flex-grow-1"
          >
            <label>First Name</label>
          </Input>

          <Input
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            className="my-1 flex-grow-1"
          >
            <label>Last Name</label>
          </Input>
        </div>

        <Input
          placeholder="Email Address"
          name="email"
          value={values.email}
          onChange={onChange}
          className="my-1"
        >
          <label>Email</label>
        </Input>

        <Input
          name="bio"
          value={values.bio}
          onChange={onChange}
          placeholder="Add Biography"
          className="my-1 flex-grow-1"
        >
          <label>Biography</label>
        </Input>

        <Input
          name="profileUrl"
          value={values.profileUrl}
          onChange={onChange}
          placeholder="Profile URL"
          className="my-1 flex-grow-1"
        >
          <label>Profile URL</label>
        </Input>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="my-1"
        >
          <Button color="primary" className="my-1">
            Save Profile
          </Button>
        </Box>
      </StyledForm>
    </Wrapper>
  );
}

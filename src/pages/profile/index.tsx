import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { User, useUser } from "../../context/user-context";
import { FeatureRow } from "../../components/featureRow";
import { Stack } from "@mui/material";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogout = (): void => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUserIndex = storedUsers.findIndex(
      (item: User) => item.email === user?.email
    );

    if (foundUserIndex !== -1) {
      storedUsers[foundUserIndex].isLogged = false;
      localStorage.setItem("users", JSON.stringify(storedUsers));
    } else {
      console.error("User not found in the array.");
    }

    setUser(null);
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Avatar style={{ backgroundColor: "#1976D2", margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          variant="h5"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          User Profile
        </Typography>
        <Stack gap={2}>
          <FeatureRow title="Name" value={user?.username} />
          <FeatureRow title="Email" value={user?.email} />
          <FeatureRow title="Member Since" value="January 1, 2022" />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default ProfilePage;

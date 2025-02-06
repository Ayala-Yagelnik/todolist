import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService"; 
import { useState } from "react";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.register(name, password);
      navigate("/toDoList", { replace: true });
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          הרשמה
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="שם משתמש"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(event) => setName(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="זכור אותי"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            הרשמה
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"יש לך כבר חשבון? להתחברות"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;


// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// import authService from "../services/authService"; 
// import { useState } from "react";
// import Container from "@mui/material/Container";
// import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import LockIcon from "@mui/icons-material/Lock";

// function Register() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await authService.register(name, password);
//       navigate("/toDoList", { replace: true });
//     } catch (error) {
//       console.error("Registration failed:", error);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <Container maxWidth="lg">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           הרשמה
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="שם משתמש"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             onChange={(event) => setName(event.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="סיסמה"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             onChange={(event) => setPassword(event.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="זכור אותי"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             הרשמה
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 {"יש לך כבר חשבון? להתחברות"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Register;


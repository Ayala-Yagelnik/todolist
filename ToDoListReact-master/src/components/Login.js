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
import Service from "../services/authService";
import { useState } from "react";
import Container from "@mui/material/Container";

export default function Login() {
  const [name, setName] = useState("default");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Service.login(name, password);
    navigate("/toDoList", { replace: true });
  };

  return (
    <Container maxWidth="xs">
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
          התחברות
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="כתובת מייל"
            name="username"
            autoComplete="true"
            autoFocus
            helperText={"שם משתמש ברירת מחדל: default"}
            onChange={(event) => setName(event.target.value)}
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
            helperText={"סיסמה ברירת מחדל: 123456"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="זכור אותי"
          />
          
<Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{
    mt: 3,
    mb: 2,
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#dc004e', 
    },
  }}
>
  התחברות
</Button>

          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"אין לך עדין חשבון? להרשמה"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}


// import React, { useState } from 'react';
// import { Grid,TextField, Button, Container, Typography, Box ,Link} from '@mui/material';
// import service from '../services/toDoSrvice';
// import { useNavigate } from "react-router-dom";


// const Login=()=> {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function handleLogin(e) {
//     e.preventDefault();
//     try {
//       await service.login(username, password);
//       navigate("/toDoList", { replace: true });

//     } catch (error) {
//       alert('Login failed:', error);
//     }
//   }

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/register" variant="body2">
//                 {"you have not an account yet? register now!!"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Login;
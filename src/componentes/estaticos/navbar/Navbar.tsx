import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();

  function logout() {
    toast.info('Usuario deslogado!', {
      position:"top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover:false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

  if(token !== '') {
    navbarComponent = (
<AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte'>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="inherit" className='fonte'>
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    perfil
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <>
      {/* {navbarComponent} */}
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte'>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="inherit" className='fonte'>
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit" className='cursor'>
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit" className='cursor'>
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    perfil
                  </Typography>
                </Box>
              </Link>
            </Box>

            <Box>
            <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

import React,{useState}from 'react'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import{Box,createTheme,Stack,ThemeProvider} from '@mui/material'
import Navbar from './components/Navbar'
// import { light } from '@mui/material/styles/createPalette'
function App() {
  const [mode,setmode]=useState("light")
  const darktheme=createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
    <Box>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar setmode={setmode} mode={mode}/>
    <Feed/>
    <Rightbar/>
    </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default App

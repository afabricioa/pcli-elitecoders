import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        main: "#00ABC8"
      }
    },
});

export default function CardMore({title, description}){
    return (
        <ThemeProvider theme={theme}>
            <div className="card">
                <h2 className="text-[25px] md:text-[35px]">{title}</h2>
                <div className="pl-2">{description}</div>
                <div className="p-4">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        sx={{color: 'white'}}
                    >LEARN MORE</Button>
                </div>
            </div>
        </ThemeProvider>  
    )
}
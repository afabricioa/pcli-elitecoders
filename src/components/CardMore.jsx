import { Button } from "@mui/material";

export default function CardMore({title, description}){
    return (
        <div className="card">
            <h2 className="text-[25px] sm:text-[30px]">{title}</h2>
            <div className="desc">{description}</div>
            <div className="p-4">
                <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{color: 'white'}}
                >LEARN MORE</Button>
            </div>
        </div>
    )
}
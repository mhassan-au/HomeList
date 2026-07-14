import { Typography, Container } from "@mui/material";

function App() {
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h3" align="center">
                🛒 HomeList
            </Typography>

            <Typography align="center" sx={{ mt: 2 }}>
                Phase 1 Complete
            </Typography>
        </Container>
    );
}

export default App;
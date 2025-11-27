import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import App from "./App.tsx";
import GlobalStyled from "./styles/global.ts";
import theme from './styles/theme';

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <App />
        </ThemeProvider>
        
    </StrictMode>
);

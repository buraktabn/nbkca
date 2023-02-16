import { Content } from "../Content/";
import { Box } from "../ui-components/Box/";

export const Layout = ({ children }:{ children: any }) => (
    <Box css={{ maxW: "100%" }} >
        {children}
    </Box>
);
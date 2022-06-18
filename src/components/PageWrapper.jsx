import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Nav } from "./Nav";

export function PageWrapper({children}) {
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })

    return (
        <Flex 
            bgColor='gunmetal.500'
            h='100vh'
            maxH='100vh'
            w='100vw'
            maxW='100vw'
            overflow='scroll'
        >
            {isLargerThanLg && <Nav />}
            {children}
        </Flex>
    )
}
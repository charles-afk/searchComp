import { 
    Box,
    Text,
    Flex,
    Center,
    Input
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function Search() {
    return(
        <Box px={14} backgroundColor='lightgray'>
            <Flex>
                <Center>
                    <Text px={2} fontWeight='bold' fontSize='24px'>
                        Search
                    </Text>

                    <Flex backgroundColor='white' borderRadius='2xl' w='25px' h='25px' 
                    ml={1} pt={1.5} border='1px solid black' cursor='pointer'>
                        <Center>
                            <Input placeholder='Search Here' hidden={true} border='none' _focus={{boxShadow:'none'}} mb={2} mr={5}/>
                            <SearchIcon color='black' w={3} h={3} ml={1.5} mb={1}/>
                        </Center>
                    </Flex>

                    <Flex backgroundColor='white' borderRadius='2xl' w='255px' h='25px' 
                    ml={1} pt={1.5} border='1px solid black' cursor='pointer' justifyContent='end'>
                        <Center>
                            <Input placeholder='Search Here' border='none' _focus={{boxShadow:'none'}} mb={2} mr={5}/>
                            <SearchIcon color='black' w={3} h={3} mr={2} mb={1}/>
                        </Center>
                    </Flex>

                </Center>
            </Flex>
        </Box>
    )
}

export default Search;
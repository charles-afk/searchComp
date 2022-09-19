import { 
    Box,
    Text,
    Flex,
    Center,
    Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';
import './Search.css';

function Search() {

    const [searchInput, setSearchInput] = useState("");
    const [margin, setMargin] = useState(2);
    const searchbar = useRef();
    const input = useRef();

    const handleChange = (event) => setSearchInput(event.target.value);

    const handleSearch = () => {
        if(searchbar.current.offsetWidth === 25) {
            searchbar.current.className = 'openSearch';
            input.current.hidden = false; 
            setMargin(2);
        } else if(searchInput === "") {
            searchbar.current.className = 'closeSearch';
            input.current.hidden = true;
            setMargin(1);
        } else {
            console.log(searchInput);
        }
    };

    return(
        <Box px={14} backgroundColor='lightgray'>
            <Flex>
                <Center>
                    <Text px={2} fontWeight='bold' fontSize='24px'>
                        Search
                    </Text>
                    <Flex backgroundColor='white' borderRadius='2xl' w='25px' h='25px' 
                    ml={1} pt={1.5} cursor='pointer' border='1px solid black' 
                    justifyContent='normal' ref={searchbar}>
                        <Center>
                            <Input placeholder='Search Here' value={searchInput}
                            hidden={true} border='none' _focus={{boxShadow:'none'}} 
                            mb={2} mr={5} onChange={handleChange} ref={input}/>
                            <SearchIcon color='black' w={3} h={3} ml={1.5} 
                            mb={1} mr={margin} onClick={handleSearch}/>
                        </Center>
                    </Flex>
                </Center>
            </Flex>
        </Box>
    )
}

export default Search;
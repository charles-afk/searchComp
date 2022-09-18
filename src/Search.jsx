import { 
    Box,
    Text,
    Flex,
    Center,
    Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import './Search.css';

function Search({setSearchQuery}) {

    const [expand, setExpand] = useState(25)
    const [isExpanded, setIsExpanded] = useState(false)
    const [showInput, setShowInput] = useState(true)
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (event) => setSearchInput(event.target.value);

    return(
        <Box px={14} backgroundColor='lightgray'>
            <Flex>
                <Center>
                    <Text px={2} fontWeight='bold' fontSize='24px'>
                        Search
                    </Text>


                        <Flex backgroundColor='white' borderRadius='2xl' w={expand} h='25px' 
                        ml={1} pt={1.5} border='1px solid black' cursor='pointer' justifyContent='normal'>
                            <Center>
                                <Input placeholder='Search Here' value={searchInput}
                                hidden={showInput} border='none' _focus={{boxShadow:'none'}} 
                                mb={2} mr={5} onChange={handleChange}/>

                                <SearchIcon color='black' w={3} h={3} ml={1.5} mb={1} mr={2}
                                onClick={()=>{
                                    //try {
                                        if(!isExpanded){
                                            setExpand(255);
                                            setIsExpanded(true);
                                            setShowInput(false);
                                            setSearchQuery(searchInput); 
                                        }else if(isExpanded && searchInput === ""){
                                            setExpand(25);
                                            setIsExpanded(false);
                                            setShowInput(true)
                                        }
                                    //} catch(err) {}
                                }}/>
                            </Center>
                        </Flex>


                </Center>
            </Flex>
        </Box>
    )
}

export default Search;
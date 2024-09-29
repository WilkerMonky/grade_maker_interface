import FormProf from "../components/FormProf"
import { Center, Square, Circle } from '@chakra-ui/react'
import TableProf from "../components/TableProf"

function Professor(){
    return(
        <div>
            <Center>
                <h1 style={{marginBottom:'30'}}>Professor</h1>
            </Center>
            <Center>
                 
                 <div>
                    <TableProf></TableProf>
                 </div>
            </Center>
            
        </div>
    )
}

export default Professor
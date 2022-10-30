import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export function Login() {
//   const data = useSelector((state) => state.Reducer.Data);
  const [Inputvalues, setInputvalues] = useState({});
  const dispatch = useDispatch();
    const navigate = useNavigate();
    

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInputvalues({
      ...Inputvalues,
      [name]: value,
    });
  };    

  const handleSubmit = () => {    
    
      if ("foo" === Inputvalues.Username && "bar" === Inputvalues.Password
      ) {
          alert("Login Success");
          dispatch({type: "LOGIN_SUCCESS"})
          navigate("/");
      } else {
            alert("Wrong Credentilas");    
      }
    };
  
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your acount </Heading>         
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User name</FormLabel>
              <Input type="Username" onChange={handleinput} name={"Username"} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handleinput} name={"Password"} />
            </FormControl>
            <Stack spacing={10}>              
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>            
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

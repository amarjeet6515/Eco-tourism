
import { useSelector } from 'react-redux'
import { ArrowBackIcon } from "@chakra-ui/icons";
import Home from '../../Images/home.svg'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  useColorModeValue,
  useDisclosure,
  HStack,
  Image,
  Checkbox,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PaymentModal from './PaymentModal';
// import { EcoContext } from './EcoContext';
import Navbar from '../../components/Navbar.jsx/Navbar';


export default function Payment() {
  const { booking_place } = useSelector(state => state);
  console.log(booking_place);

  const [formData, setFormData] = useState({
    dov: "",
    name: "",
    category: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // console.log(FormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      position: "top-left",
      title: `User Information Updated`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormsubmit(true);
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const toast = useToast();



  var total = booking_place.price * 1.12



  const [formsubmit, setFormsubmit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      background={`url(${Home})`}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'10% 100%'}
      backgroundSize={'cover'}
      height={'100vh'}
      width={'100vw'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      position={'relative'}
      gap={'5%'}
      padding={'1%'}
      overflowY={'scroll'}
    >
      <Box width={"90%"} m="auto" mt={"30"}>
        <Box >
          <Navbar />
        </Box>
        <Text fontSize={"30"} fontWeight="700" color={"white"}>
          <ArrowBackIcon /> Confirm Your Booking
        </Text>
        <Text>&nbsp;</Text>
        <Stack
          direction={{
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          width={"100%"}
          m={"auto"}
        >
          <VStack
            backdropBlur={'50px'}
            width={{
              sm: "100%",
              md: "100%",
              lg: "65%",
              xl: "60%",
            }}
          >
            <Accordion
              allowToggle
              w={"95%"}
              defaultIndex={[0]}
              borderRadius={"10"}
              background={'#00000033'}
              backdropFilter={'blur(50px)'}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius={"10"}>
                    <Box
                      as="header"
                      borderRadius={"10"}
                      flex="1"
                      textAlign="left"
                      fontSize={"18"}
                      fontWeight={"600"}
                      color={"white"}

                    >
                      <Text>Guest Information</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={"white"}>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing="4">
                      <FormControl isRequired>
                        <FormLabel>Date of Visit</FormLabel>
                        <Input
                          type="date"
                          name="dov"
                          value={formData.dov}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </FormControl>


                      <FormControl isRequired>
                        <FormLabel>Category</FormLabel>
                        <Select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          placeholder="Select Category"
                          color={"black"}
                        >
                          <option value="IndianAdult" >Indian Adult</option>
                          <option value="IndianChild">Indian Child</option>
                          <option value="ForeignAdult">Foreign Adult</option>
                          <option value="ForeignChild">Foreign Child</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        <Button mt={5} type="submit" colorScheme={"orange"}>
                          Submit and Accept Terms and Conditions
                        </Button>
                      </FormControl>
                    </VStack>
                  </form>
                  {formsubmit ? (
                    <Alert mt={"5"} status="success">
                      <AlertIcon />
                      Data uploaded to the server. Fire on! Reserve Your Units !
                    </Alert>
                  ) : (
                    <></>
                  )}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="header"
                      flex="1"
                      textAlign="left"
                      fontSize={"18"}
                      fontWeight={"600"}
                      color={useColorModeValue("white")}
                    >
                      <Text>Property Policy</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={"white"}>
                  <Text>
                    - Guests are required to pay a 21% advance at the time of
                    booking itself. The entire balance needs to be cleared upon
                    arrival at the property during check-in.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Our standard check-in time is 12 PM and the standard
                    check-out time is 10 AM. Early check-in and late check-out
                    requests are subject to availability, and may also attract an
                    additional fee at the property's discretion.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- We strictly DO NOT allow a group of more than 8
                    people. In case of a group of 4 or more, you might be
                    purposefully allotted different dorm rooms. Further, if the
                    group behaviour is deemed unfit at the property, the Zostel
                    Property Manager, upon subjective evaluation, retains the full
                    right to take required action which may also result in an
                    on-spot cancellation without refunds.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Children below 18 years of age are not permitted
                    entry/stay at any of our hostels, with or without guardians.
                    We do not recommend families.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- We only accept a government ID as valid identification
                    proof. No local IDs shall be accepted at the time of check-in.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Guests are not permitted to bring outsiders inside the
                    hostel campus.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- We believe in self-help and do not provide luggage
                    assistance or room services.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Drugs and any substance abuse is strictly banned
                    inside and around the property.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Alcohol consumption is strictly prohibited in and
                    around the property premises.
                  </Text>
                  <Spacer />
                  <Text>
                    <br />- Right to admission reserved
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="header"
                      flex="1"
                      textAlign="left"
                      fontSize={"18"}
                      fontWeight={"600"}
                      color={useColorModeValue("white")}
                    >
                      <Text>Cancellation Policy</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={"white"}>
                  <Text>
                    We understand that sometimes plans change. Hence, to make it
                    light on your pocket, we are only charging a 21% advance,
                    which is on a non-refundable basis.
                  </Text>
                  <Text>&nbsp;</Text>
                  <Text>NOTE:</Text>
                  <Text>
                    - 21% advance payment is non-refundable at all times, as
                    stated above.
                  </Text>
                  <Text>
                    - If you have paid any amount over this 21%, it stands
                    applicable for a credit only if the cancellation is informed 7
                    days or more in advance. You will be able to avail the
                    credited amount for any future booking at any of our
                    properties.
                  </Text>
                  <Text>
                    - If informed within 7 days of the standard check-in time (12
                    pm), the amount shall be adjusted against the cancellation
                    fee.
                  </Text>
                  <Text>&nbsp;</Text>
                  <Text>
                    For any other queries, please reach out to us at{" "}
                    <Link href="mailto:reservations@zostel.com">
                      reservations@zostel.com
                    </Link>
                    .
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>

          {/* sidebar  */}
          <Box
            borderRadius={"10"}
            backdropFilter={'blur(50px)'}
            background={'#00000033'}
            height={'420px'}
            width={{
              sm: "100%",
              md: "100%",
              lg: "35%",
              xl: "35%",
            }}
            padding={"3"}
          >
            <Text as={"h3"} fontSize={"24"} fontWeight={"700"} color={"white"}>
              Summary
            </Text>
            <Text fontSize={"14"} fontWeight={"700"} color={"white"}>
              4 day & 3 Nights <span style={{ color: "gray" }}>starting from</span> {formData.dov}
            </Text>
            <VStack>
              {/* Hotel Card Starts */}
              <></>
              <>
                <HStack spacing={5} width={"100%"} mt={5}>
                  <Image
                    src={booking_place.image}
                    width={"64px"}
                    borderRadius="10"
                  />
                  <VStack align={"baseline"} spacing={"0"}>
                    <Text fontSize={"14"} fontWeight={"600"} color={"white"} textTransform={"capitalize"}>
                      {booking_place.cityname}
                    </Text>
                    <Text fontSize={"16"} fontWeight={"600"} color={"white"}>
                      ₹{booking_place.price} x 1 Package
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize={"16"} fontWeight={"600"} color={"white"}>
                    ₹{booking_place.price}
                  </Text>
                </HStack>
                <Divider />
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text color={"white"}>Tax</Text>
                  <Spacer />
                  <Text color={"white"}>₹{(booking_place.price * 0.12).toFixed(0)}</Text>
                </HStack>
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text color={"white"}>Total (tax incl.)</Text>
                  <Spacer />
                  <Text color={"white"}>₹{total.toFixed(0)}</Text>
                </HStack>
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text color={"white"}>Payable Now</Text>
                  <Spacer />
                  <Text color={"white"}>₹{total.toFixed(0)}</Text>
                </HStack>
                <Divider />
                <Checkbox
                  isChecked={formsubmit}
                  colorScheme="orange"
                  isRequired
                  mt={"50px"}
                  onChange={(e) => console.log("eeee", e.target.checked)}
                  color={"white"}
                >
                  I acknowledge and accept the terms and conditions mentioned in
                  the Property Policy & Cancellation Policy.
                </Checkbox>
                <Button
                  isDisabled={!formsubmit}
                  width={"100%"}
                  colorScheme={"orange"}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
                <PaymentModal
                  onOpen={onOpen}
                  onClose={onClose}
                  isOpen={isOpen}
                />
              </>
              {/* Hotel Card Ends */}
            </VStack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
          <Text fontSize="lg" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a dictum magna facilisis.
          </Text>
        </Container>
      </Box>

      {/* Additional Articles Grid */}
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="white" p={6} boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Article 1</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a dictum magna facilisis.
            </Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Article 2</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a dictum magna facilisis.
            </Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Article 3</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a dictum magna facilisis.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
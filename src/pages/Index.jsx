import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import { FaBullhorn, FaChartLine, FaUsers, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const services = [
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
      description: "We create effective digital marketing strategies to boost your online presence and reach your target audience.",
    },
    {
      icon: FaChartLine,
      title: "Analytics & Insights",
      description: "Gain valuable insights from data analytics to make informed decisions and optimize your marketing efforts.",
    },
    {
      icon: FaUsers,
      title: "Social Media Management",
      description: "Our team helps you engage with your audience and build brand loyalty through strategic social media management.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Company",
      quote: "Working with this marketing company has been a game-changer for our business. Their strategies have helped us achieve remarkable growth.",
    },
    {
      name: "Jane Smith",
      company: "XYZ Corporation",
      quote: "The team at this marketing company is highly skilled and professional. They have exceeded our expectations in every aspect.",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" py={4} px={8} bg="purple.500" color="white">
        <Heading as="h1" size="xl">
          Marketing Company
        </Heading>
        <Stack as="nav" direction="row" spacing={6}>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#team">Team</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Flex direction={["column", "row"]} align="center" justify="space-between" py={20} px={8} bg="gray.100">
        <Box maxW="500px">
          <Heading as="h2" size="2xl" mb={4}>
            Elevate Your Brand with Innovative Marketing Solutions
          </Heading>
          <Text fontSize="xl" mb={8}>
            We are a leading marketing company dedicated to helping businesses grow and succeed in the digital landscape.
          </Text>
          <Button colorScheme="purple" size="lg">
            Get Started
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwYnJhaW5zdG9ybWluZ3xlbnwwfHx8fDE3MTI5NzE4MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Marketing Team" maxW="500px" ml={[0, 8]} mt={[8, 0]} />
      </Flex>

      {/* Services Section */}
      <Box id="services" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {services.map((service, index) => (
            <Box key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
              <Icon as={service.icon} boxSize={12} color="purple.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                {service.title}
              </Heading>
              <Text>{service.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" py={20} px={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          What Our Clients Say
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="xl" mb={4}>
                "{testimonial.quote}"
              </Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text>{testimonial.company}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Team Section */}
      <Box id="team" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Meet Our Team
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {[1, 2, 3, 4].map((member) => (
            <Box key={member} textAlign="center">
              <Image src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0JTIwJTI0JTdCbWVtYmVyJTdEfGVufDB8fHx8MTcxMjk3MTgwNHww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Team Member ${member}`} borderRadius="full" boxSize="200px" mx="auto" mb={4} />
              <Heading as="h3" size="lg">
                Team Member {member}
              </Heading>
              <Text>Position</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} px={8} bg="purple.500" color="white">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Get in Touch
        </Heading>
        <Flex align="center" justify="center">
          <Icon as={FaEnvelope} boxSize={12} mr={4} />
          <Link href="mailto:info@marketingcompany.com" fontSize="2xl">
            info@marketingcompany.com
          </Link>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} px={8} bg="gray.800" color="white" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Marketing Company. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;

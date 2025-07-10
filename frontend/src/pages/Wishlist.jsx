import { useWishlistStore } from "../store/wishlist";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistStore();

  const total = wishlist.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <Box p={6}>
      <Heading mb={4}>💖 Wishlist</Heading>

      {wishlist.length === 0 ? (
        <Text>Your wishlist is empty.</Text>
      ) : (
        <VStack align="stretch" spacing={4}>
          {wishlist.map((item) => (
            <Box key={item._id} p={4} borderWidth={1} borderRadius="md">
              <HStack justify="space-between">
                <HStack spacing={3}>
                  <Image boxSize="60px" src={item.image} alt={item.name} />
                  <Text>{item.name}</Text>
                </HStack>
                <Text>${item.price}</Text>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeFromWishlist(item._id)}
                >
                  Remove
                </Button>
              </HStack>
            </Box>
          ))}

          <Divider />
          <Box mt={4}>
            <Text fontWeight="bold">
              🎯 You’ve wishlisted items worth <b>${total.toFixed(2)}</b>
            </Text>
            <Button mt={3} colorScheme="blue" onClick={clearWishlist}>
              Clear Wishlist
            </Button>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default WishlistPage;

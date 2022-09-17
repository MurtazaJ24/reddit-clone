import { Button, Flex, FormLabel, Image } from "@chakra-ui/react";
import React from "react";

type ImageUploadProps = {
  selectedImage?: string;
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedImage: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedImage,
  onSelectImage,
  setSelectedImage,
}) => {
  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      {selectedImage ? (
        <>
          <Image src={selectedImage} maxWidth="400px" maxHeight="400px" />
          <Button
            mt={4}
            variant="outline"
            height="28px"
            onClick={() => setSelectedImage("")}
          >
            Remove
          </Button>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="gray.200"
          width="100%"
          borderRadius={4}
        >
          <Button
            as={FormLabel}
            htmlFor="upload"
            variant="outline"
            height="28px"
          >
            Upload
          </Button>
          <input type="file" id="upload" hidden onChange={onSelectImage} />
        </Flex>
      )}
    </Flex>
  );
};
export default ImageUpload;

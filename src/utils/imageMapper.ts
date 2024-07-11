import image1 from "@assets/imgs/caringBeyondImages/caringBeyondTopic1.jpg";
import image2 from "@assets/imgs/caringBeyondImages/caringBeyondTopic2.jpg";
import image3 from "@assets/imgs/caringBeyondImages/caringBeyondTopic3.jpg";

interface IImageMapper {
    [key: string]: string;
}

export const imageMapper: IImageMapper = {
    "caringBeyondTopic1.jpg": image1,
    "caringBeyondTopic2.jpg": image2,
    "caringBeyondTopic3.jpg": image3,
};


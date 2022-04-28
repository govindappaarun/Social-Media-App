import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Arun",
    lastName: "Govindappa",
    username: "arun",
    password: "arun123",
    wallpaper:
      "https://res.cloudinary.com/db9adijl0/image/upload/v1650855699/profile/pexels-photo-220453_zya0qb.webp",
    avatar:
      "https://res.cloudinary.com/db9adijl0/image/upload/v1650854948/profile/nature3_cqyhtq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

import { writable } from "svelte/store";
import { infoUser } from "./infoUser";

export const newReport = writable({
  title: "",
  dsc: "",
  type: "",
  date: new Date().getTime(),
  imgs: {
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  },
  locate: {
    lat: 0,
    long: 0,
    address: "",
  },
  idAuthor: "",
  hour: new Date().toLocaleTimeString("en-US"),
});

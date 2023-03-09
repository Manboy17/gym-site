import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowercase = page.toLowerCase().replace(/ /g, "") as SelectedPage; // replace all spaces into one string

  return (
    <AnchorLink
      className={`${
        selectedPage === lowercase ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowercase)}
      href={`#${lowercase}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

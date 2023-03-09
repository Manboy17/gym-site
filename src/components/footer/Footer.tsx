import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="mt-20 w-full bg-primary-100 py-20">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="mt-5 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            deleniti aspernatur, eos eaque cum sint reiciendis quasi temporibus
            totam commodi enim autem esse dolorum laudantium.
          </p>
          <span>&copy; Evogym All Rights Reserved.</span>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mb-5">Lorem ipsum dolor sit</p>
          <p className="mb-5">Lorem ipsum dolor sit</p>
          <p className="mb-5">Lorem ipsum dolor sit</p>
          <p className="mb-5">Lorem ipsum dolor sit</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mb-5">Lorem ipsum dolor sit</p>
          <p className="mb-5">Lorem ipsum dolor sit</p>
          <p className="mb-5">Lorem ipsum dolor sit</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

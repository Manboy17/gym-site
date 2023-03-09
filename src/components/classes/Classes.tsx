import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import Class from "@/components/class/Class";

interface ClassType {
  name: string;
  desc: string;
  img: string;
}

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img1,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img2,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img3,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img4,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img5,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam dolor impedit unde molestiae placeat voluptas maiores repudiandae autem.",
    img: img6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            corrupti adipisci itaque veniam voluptates, nobis ratione provident
            optio, maxime nam deserunt voluptatum id veritatis ipsam. Modi
            dolorum impedit laborum doloremque.
          </p>
        </div>
      </motion.div>

      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, i) => (
            <Class key={i} name={item.name} desc={item.desc} img={item.img} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Classes;

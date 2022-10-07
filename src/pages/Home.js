import { Col, Row } from "reactstrap";
import Blog from "../components/dashboard/Blog";
import doc from "../assets/images/bg/doc.jpg";
import bgApi from "../assets/images/bg/api.jpg";
import bgDemo from "../assets/images/bg/demo.jpg";
import bgRelease from "../assets/images/bg/release.jpg";

const BlogData = [
  {
    image: doc,
    title: "Documentação",
    subtitle: "Atualizado em 06/10/2022",
    description:
      "Confira a documentação completa da nossa api.",
    btnbg: "primary",
  },
  {
    image: bgApi,
    title: "API Downloads",
    subtitle: "Atualizado em 06/10/2022",
    description:
      "Realize o download dos nossos AAR da nossa API.",
    btnbg: "primary",
  },
  {
    image: bgDemo,
    title: "Demo",
    subtitle: "Atualizado em 06/10/2022",
    description:
      "Confira o nossa aplicação demo e veriques todos os recursos disponíveis",
    btnbg: "primary",
  },  
  {
    image: bgRelease,
    title: "Release Notes",
    subtitle: "Atualizado em 06/10/2022",
    description:
      "Confira o que tem disponivel em cada versão",
    btnbg: "primary",
  },  
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      
      {/***Main Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;

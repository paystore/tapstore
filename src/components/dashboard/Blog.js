import {
  Card,
  CardBody,
  CardImg,  
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  let navigate = useNavigate();
  return (
    <Card>
      <CardImg height={168} width={300} alt="Card image cap" src={props.image} />
      <CardBody style={{minHeight: 280}} className="p-4">
        <div style={{height: 250}} className="d-flex flex-column justify-content-between">
          <div>
          <CardTitle tag="h5">{props.title}</CardTitle>          
          <CardText className="mt-3">{props.text}</CardText>
          </div>
          <div style={{height:100}}>
          <Button color={props.color} onClick={() => navigate(props.route)}>Acesse aqui</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Blog;

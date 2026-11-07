import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form"

export function Home() {
    return (
    <MainTemplate>
         <Container>
                <CountDown></CountDown>
              </Container>
        
              <Container>
                <Form></Form>
              </Container>
        
    </MainTemplate>
    );
}   
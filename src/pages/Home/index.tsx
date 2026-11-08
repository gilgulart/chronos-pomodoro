import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Form } from '../../components/Form';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {

  return (
    <MainTemplate>
      <Container>
        <CountDown {...props}/>
      </Container>

      <Container>
        <Form {...props}/>
      </Container>
    </MainTemplate>
  );
}

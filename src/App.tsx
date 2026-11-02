import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo <TimerIcon/> </Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

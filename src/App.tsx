import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
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

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam
        quis officiis neque cupiditate incidunt magnam nemo fugiat aperiam
        repudiandae atque, deserunt praesentium obcaecati distinctio autem
        excepturi quaerat recusandae quod.
      </p>
    </>
  );
}

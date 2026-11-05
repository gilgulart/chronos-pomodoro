import styles from './styles.module.css';

type DefaultButtonProps = {
  id: string;
  color?: 'green' | 'red';
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
}

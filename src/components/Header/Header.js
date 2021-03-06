import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          Food<span>space</span>
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;

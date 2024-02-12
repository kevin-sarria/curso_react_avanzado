import logo from '../../logo.png';

export const ReactLogo = () => {
  return (
    <img
        src={logo}
        alt="React Logo"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '80px',
        }}
    />
  )
}

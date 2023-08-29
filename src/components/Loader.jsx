import { Html, useProgress } from '@react-three/drei';
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontWeight: 800,
          fontSize: 14,
          color: '#f1f1f1',
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;

// MenuBar.jsx
export default function MenuBar({ onChairChange, lightSettings, setLightSettings, onColorChange }) {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.section}>
        <h3 style={styles.heading}>Change Object</h3>
        <button style={styles.button} onClick={() => onChairChange('chair1')} >Nordic Curve</button>
        <button style={styles.button} onClick={() => onChairChange('chair2')}>Aria Luxe</button>
        <button style={styles.button} onClick={() => onChairChange('chair3')}>Linea Extend</button>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Texture Change</h3>
        <button style={styles.button} onClick={() => onColorChange('#6b2822')}>Dark Maroon</button>
        <button style={styles.button} onClick={() => onColorChange('#796e6d')}>Vintage Mauve</button>
        <button style={styles.button} onClick={() => onColorChange('grey')}>Urban Grey</button>

      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Light Control</h3>

        <label style={styles.label}>
          Intensity
          <input
            type="range"
            min="0"
            max="200"
            step="0.1"
            value={lightSettings.intensity}
            onChange={(e) => setLightSettings({ ...lightSettings, intensity: parseFloat(e.target.value) })}
            style={styles.slider}
          />
        </label>

        <label style={styles.label}>
          Color
          <input
            type="color"
            value={lightSettings.color}
            onChange={(e) => setLightSettings({ ...lightSettings, color: e.target.value })}
            style={styles.colorPicker}
          />
        </label>
      </div>
    </div>
  );
}

const styles = {
  menuContainer: {
    height: '80vh',
    width: '20vw',
    backgroundColor: 'white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    boxShadow: '2px 0 5px rgba(74, 209, 131, 0.1)',
    overflowY: 'auto',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  heading: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#c97a04ff',

    paddingBottom: '0.25rem',
  },
  button: {
    padding: '0.5rem',
    border: '1px solid #ccc',
    backgroundColor: '#ea900aff',
    cursor: 'pointer',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
  },
  slider: {
    width: '100%',
  },
  colorPicker: {
    marginTop: '0.25rem',
  }
};

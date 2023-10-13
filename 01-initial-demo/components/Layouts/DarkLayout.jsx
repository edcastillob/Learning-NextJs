

export const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'purple',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark L</h3>
            <div>
                { children }
            </div>
    </div>
  )
}

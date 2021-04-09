import FoodData from './FoodData';

export default function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        background: 'black',
        minHeight: '100vh',
      }}>
      <div style={{ paddingTop: '20vh' }}>
        <div style={{ fontSize: '5vh', fontStyle: 'italic', color: 'gray' }}>*Loud italian noises*</div>
        <div style={{ fontSize: '7vh', fontWeight: 'bold', color: 'red' }}>&quot;EY PIZZA MAMA&quot;</div>
        <div style={{ fontSize: '5vh', fontStyle: 'italic', color: 'gray' }}>ETC...</div>
        <div>
          <ul>
            {FoodData.map((category, index) => (
              <div key={index}>
                <div style={{ fontSize: '3vh', fontWeight: 'bold', fontStyle: 'italic', color: 'green' }}>
                  {category.categoryName}
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {category.data.map((data, index) => (
                    <li key={index}>{JSON.stringify(data)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

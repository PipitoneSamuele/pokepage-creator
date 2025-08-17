import '../css/grid.css'

function Grid() {
  return (
    <div className="grid-container mx-auto">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="grid-item">
          
        </div>
      ))}
    </div>
  );
}

export default Grid;